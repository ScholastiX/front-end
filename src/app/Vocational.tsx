import { useCallback, useEffect, useState } from "react";
import Filter from "../components/filter.tsx";
import SchoolShort from "../components/school-short.tsx";
import Sort from "../components/sort.tsx";

export default function Vocational() {
  const [ sort, setSort ] = useState<"OCE" | "populous" | "rank" | "distance">("OCE");
  const [ filter, setFilter ] = useState({
    pupils: {
      min: 0,
      max: 1000
    },
    distance: {
      min: 0,
      max: 1000
    },
    oce_rank: {
      min: 0,
      max: 1000
    },
    profession: ""
  });

  const filterCallback = useCallback((set: "pupils" | "distance" | "rating", minMax: "min" | "max", value: number) => {
    if (minMax === "min" && value > filter[set].max) return;
    if (minMax === "max" && value < filter[set].min) return;
    if (value < 0) return;
    if (minMax === "min") {
      setFilter({
        ...filter,
        [set]: {
          min: value,
          max: filter[set].max
        }
      });
    } else {
      setFilter({
        ...filter,
        [set]: {
          min: filter[set].min,
          max: value
        }
      });
    }
  }, []);

  const filterProfessionCallback = useCallback((profession: string) => {
    setFilter({
      ...filter,
      profession
    });
  }, []);

  const sortingCallback = useCallback((category: "OCE" | "populous" | "rank" | "distance") => {
    setSort(category)
  }, []);

  const schools = useCallback(async () => {
    console.log(filter)
    // const res = await fetch("http://scholastix.nav.lv:1280/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     pagination: {size: 0, offset: 10},
    //     targetLocation: {lat: 0, log: 0},
    //     direction: "desc",
    //     sortBy: "pupils",
    //     filter: {
    //       professions: [filter.profession],
    //       distance: {
    //         min: filter.distance.min,
    //         max: filter.distance.max
    //       },
    //       pupils: {
    //         min: filter.pupils.min,
    //         max: filter.pupils.max
    //       },
    //       oce: {
    //         min: filter.rating.min,
    //         max: filter.rating.max
    //       }
    //     }
    //   }),
    // }).then(res => res.json()).catch(err => console.error(err))
    // console.log(res)
  }, []);

  useEffect(() => {
    schools().catch(err => console.error(err)).then(res => console.log(res))
  }, [ sort, filter ]);

  return (
    <main>
      <div className="schools">
        <h1>Profesionālās</h1>
        <div className="search-section">
          <Sort callback={sortingCallback} selected={sort} />
          <Filter callback={filterCallback} callbackProfession={filterProfessionCallback} defaultFilter={filter} />
        </div>
        <SchoolShort distance={16} school='Rīgas Mākslas un Mediju tehnikums' population='1.0k' rank='20/302' score={123} id='123'/>
      </div>
    </main>
  )
}
