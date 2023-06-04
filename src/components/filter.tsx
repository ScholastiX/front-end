import { useState } from "react";
import SearchProfession from "./search-profession";

interface HeaderProps {
  callback: (set: "pupils" | "distance" | "rating", minMax: "min" | "max", value: number) => void,
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
    rating: {
      min: number,
      max: number
    },
    profession: string
  }
}

export default function Filter ({callback, callbackProfession, defaultFilter}: HeaderProps) {
  console.log("render filter");
  const [active, setActive] = useState<boolean>(false)

  return <div className={`filter ${active ? "active" : ""}`}>
    <p onClick={() => setActive(!active)} className="title">Filtri</p>
    <div className="pupils">
      <p>Skolēnu skaits</p>
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
      <p>Attālums</p>
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
      <p>Reitings</p>
      <div className="min">
        <label htmlFor="min-rating">Min</label>
        <input type="number" id="min-rating" defaultValue={defaultFilter.rating.min} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("rating", "min", parseInt(e.target.value))}} />
      </div>
      <div className="max">
        <label htmlFor="max-rating">Max</label>
        <input type="number" id="max-rating" defaultValue={defaultFilter.rating.max} onChange={(e) => {if (!isNaN(parseInt(e.target.value))) callback("rating", "max", parseInt(e.target.value))}} />
      </div>
    </div>
    <div className="profession">
      <p>Profesija</p>
      <SearchProfession callback={callbackProfession} />
    </div>
  </div>
}
