import { useState } from "react";
import SearchProfession from "./search-profession";

interface HeaderProps {
  callback: (set: "pupils" | "distance" | "oce_rank", minMax: "min" | "max", value: number) => void,
  callbackProfession: (profession: string) => void,
  defaultFilter: {
    pupils: {
      min: number,
      max: number
    },
    distance: {
      min: number,
      max: number
    },
    oce_rank: {
      min: number,
      max: number
    },
    professions: string[]
  },
  enabledFilters: FilterType[],
  filterToggle: (f: FilterType) => void,
}

export type FilterType = 'pupils'|'distance'|'oce_rank'|'professions';

export default function Filter ({ callback, callbackProfession, defaultFilter, filterToggle, enabledFilters }: HeaderProps) {
  const [active, setActive] = useState<boolean>(false);

  return <div className={`filter ${active ? "active" : ""}`}>
    <p onClick={() => setActive(!active)} className="title">Filtri</p>
    <div className="pupils">
      <label><input type="checkbox" checked={enabledFilters.includes('pupils')} onChange={() => filterToggle('pupils')}/> Skolēnu skaits</label>
      <div className="min">
        <label htmlFor="min-pupils">Min</label>
        <input type="number" id="min-pupils" defaultValue={defaultFilter.pupils.min} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("pupils", "min", parseInt(e.target.value))}} />
      </div>
      <div className="max">
        <label htmlFor="max-pupils">Max</label>
        <input type="number" id="max-pupils" defaultValue={defaultFilter.pupils.max} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("pupils", "max", parseInt(e.target.value))}} />
      </div>
    </div>
    <div className="distance">
      <label><input type="checkbox" checked={enabledFilters.includes('distance')} onChange={() => filterToggle('distance')}/> Attālums</label>
      <div className="min">
        <label htmlFor="min-distance">Min</label>
        <input type="number" id="min-distance" defaultValue={defaultFilter.distance.min} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("distance", "min", parseInt(e.target.value))}} />
      </div>
      <div className="max">
        <label htmlFor="max-distance">Max</label>
        <input type="number" id="max-distance" defaultValue={defaultFilter.distance.max} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("distance", "max", parseInt(e.target.value))}} />
      </div>
    </div>
    <div className="rating">
      <label><input type="checkbox" checked={enabledFilters.includes('oce_rank')} onChange={() => filterToggle('oce_rank')}/> Reitings</label>
      <div className="min">
        <label htmlFor="min-rating">Min</label>
        <input type="number" id="min-rating" defaultValue={defaultFilter.oce_rank.min} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("oce_rank", "min", parseInt(e.target.value))}} />
      </div>
      <div className="max">
        <label htmlFor="max-rating">Max</label>
        <input type="number" id="max-rating" defaultValue={defaultFilter.oce_rank.max} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("oce_rank", "max", parseInt(e.target.value))}} />
      </div>
    </div>
    <div className="profession">
      <label><input type="checkbox" checked={enabledFilters.includes('professions')} onChange={() => filterToggle('professions')}/> Profesija</label>
      <SearchProfession callback={callbackProfession} />
    </div>
  </div>
}
