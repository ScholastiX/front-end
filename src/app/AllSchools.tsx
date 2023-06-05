import { useCallback, useEffect, useState } from "react";
import Filter, { FilterType } from "../components/filter.tsx";
import SchoolShort from "../components/school-short.tsx";
import Sort from "../components/sort.tsx";
import { useNavigate } from "react-router-dom";

import arrowBack from "../assets/icons/left-arrow.svg";

export default function AllSchools() {
  const navigate = useNavigate();
  const [ sort, setSort ] = useState<"OCE" | "populous" | "rank" | "distance">("OCE");
  const [ filter, setFilter ] = useState({
    pupils: {
      min: 0,
      max: 1000
    },
    distance: {
      min: 0,
      max: 10
    },
    oce_rank: {
      min: 0,
      max: 100
    },
    professions: [] as string[],
  });
  const [ enabledFilters, setEnabledFilters ] = useState<FilterType[]>([]);
  const [ foundSchools, setFoundSchools ] = useState<any[]>([]);
  const [ geolocation, setGeolocation ] = useState<GeolocationPosition|null>(null);

  const filterCallback = useCallback((set: "pupils" | "distance" | "oce_rank", minMax: "min" | "max", value: number) => {
    if (minMax === "min" && value > filter[set].max) return;
    if (minMax === "max" && value < filter[set].min) return;
    if (value < 0) return;
    setFilter({
      ...filter,
      [set]: {
        ...filter[set],
        [minMax]: value,
      }
    });
  }, [ filter ]);

  const filterProfessionCallback = useCallback((profession: string) => {
    setFilter({
      ...filter,
      professions: [ profession ]
    });
  }, []);

  const sortingCallback = useCallback((category: "OCE" | "populous" | "rank" | "distance") => {
    setSort(category)
  }, []);

  const schools = useCallback(async () => {
    console.log(".", (geolocation ? { targetLocation: { lat: geolocation.coords.latitude, lon: geolocation.coords.longitude } } : {}));
    try {
      const res = await fetch("http://scholastix.nav.lv:1280/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pagination: {size: 10, offset: 0},
          ...(geolocation ? { targetLocation: { lat: geolocation.coords.latitude, lon: geolocation.coords.longitude } } : {}),
          sort: {
            direction: "desc",
            sortBy: "pupils",
          },
          ...(enabledFilters.length > 0 ? {
            filter: {
              ...enabledFilters
                    .map(v => ({ [v]: filter[v] }))
                    .reduce((a, b) => ({...a, ...b}), {})
            },
          } : {}),
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setFoundSchools(data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [ filter, enabledFilters, geolocation ]);

  const filterToggle = useCallback((filter: FilterType) => {
    console.log(enabledFilters);
    if (enabledFilters.includes(filter)) {
      setEnabledFilters(enabledFilters.filter(v => v !== filter));
    } else {
      setEnabledFilters([...enabledFilters, filter]);
    }
  }, [ enabledFilters ]);

  useEffect(() => {
    schools().catch(console.error);
  }, [ sort, filter, geolocation, enabledFilters ]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(res => {
        setGeolocation(res);
      });
      let interval = setInterval(async () => {
        console.log(".");
        const perm = await navigator.permissions.query({ name: "geolocation" });
        if (perm.state !== "prompt") {
          clearInterval(interval);
          navigator.geolocation.getCurrentPosition(res => {
            setGeolocation(res);
          });
        }
      }, 10);
      return () => { clearInterval(interval); }
    }
  }, []);

  return (
        <main>
          <div className="schools">
            <h1><img src={arrowBack} alt="Back arrow" onClick={() => navigate(-1)} /> Skolas</h1>
            <div className="search-section">
              <Sort callback={sortingCallback} selected={sort} />
              <Filter
                    callback={filterCallback}
                    callbackProfession={filterProfessionCallback}
                    defaultFilter={filter}
                    enabledFilters={enabledFilters}
                    filterToggle={filterToggle}
              />
            </div>
            {foundSchools.map((v, i) => <SchoolShort
                  key={i} distance={v.distance} school={v.faculty_name}
                  id={v.faculty_nr} population={v.pupils_grades_1_12_total}
                  rank={v.rank} rankTotal={v.ranktotal} score={v.oce_index} />)}
          </div>
        </main>
  );
}
