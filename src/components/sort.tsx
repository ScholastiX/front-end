import { useState } from "react";

interface HeaderProps {
  callback: (category: SortType, ascending: boolean) => void,
  selected: SortType,
  ascending: boolean,
}

export type SortType = 'pupils'|'oce_rank'|'distance';

const options = [
  { type: "oce_rank", asc: true, disp: "Ranks (augošs)"},
  { type: "oce_rank", asc: false, disp: "Ranks (dilstošs)"},
  { type: "pupils", asc: true, disp: "Skolēni (augošs)"},
  { type: "pupils", asc: false, disp: "Skolēni (dilstošs)"},
  { type: "distance", asc: true, disp: "Attālums (augošs)"},
  { type: "distance", asc: false, disp: "Attālums (dilstošs)"},
] as const;

export default function Sort ({callback, selected, ascending}: HeaderProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`sort ${active ? "active" : ""}`}>
      <div className="selected" onClick={() => setActive(!active)}>
        <p>{options.find(v => v.type === selected && v.asc === ascending)!.disp}</p>
      </div>
      <div className="categories">
        {options.filter(v => !(v.type === selected && v.asc === ascending)).map(v =>
              <button onClick={() => callback(v.type, v.asc)}>{v.disp}</button>)}
      </div>
    </div>
  )
}
