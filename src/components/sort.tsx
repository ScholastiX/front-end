import { useState } from "react";

interface HeaderProps {
  callback: (category: "OCE" | "populous" | "rank" | "distance") => void,
  selected: "OCE" | "populous" | "rank" | "distance"
}

export default function Sort ({callback, selected}: HeaderProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={`sort ${active ? "active" : ""}`}>
      <div className="selected" onClick={() => setActive(!active)}>
        <p>{selected}</p>
      </div>
      <div className="categories">
        {selected !== "OCE" && <button onClick={() => callback("OCE")}>OCE</button>}
        {selected !== "populous" && <button onClick={() => callback("populous")}>Populous</button>}
        {selected !== "rank" && <button onClick={() => callback("rank")}>Rank</button>}
        {selected !== "distance" && <button onClick={() => callback("distance")}>Distance</button>}
      </div>
    </div>
  )
}
