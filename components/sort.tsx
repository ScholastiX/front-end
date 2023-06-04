interface HeaderProps {
  callback: (category: "OCE" | "populous" | "rank" | "distance") => void,
  selected: "OCE" | "populous" | "rank" | "distance"
}

export default function Sort ({callback, selected}: HeaderProps) {
  return (
    <div className="sort">
      <div className="selected">
        <p>{selected}</p>
      </div>
      <div className="categories">
        <button onClick={() => callback("OCE")}>OCE</button>
        <button onClick={() => callback("populous")}>Populous</button>
        <button onClick={() => callback("rank")}>Rank</button>
        <button onClick={() => callback("distance")}>Distance</button>
      </div>
    </div>
  )
}