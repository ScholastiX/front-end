import populationIcon from "../assets/icons/population.svg";
import rankIcon from "../assets/icons/rank.svg";
import OCEIcon from "../assets/icons/OCE.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  school: string;
  population: string;
  distance?: number;
  rank: string;
  rankTotal: string;
  score: string;
  id: string;
  board: string;
  coordinates: {
    lat: any,
    lon: any
  }
  address: string;
  phone: string;
  email: string;
  director: string;
}

export default function SchoolShort ({school, population, distance, rank, rankTotal, score, id, coordinates, board, address, phone, email, director}: HeaderProps) {
  const navigate = useNavigate();

  const saveToLocalStorage = () => {
    localStorage.setItem("school", JSON.stringify({school, population, distance, rank, rankTotal, score, id, board, coordinates, address, phone, email, director}));
  }

  return (
    <div className="school-short" onClick={() => {saveToLocalStorage(); navigate(`/school/${id}`)}}>
      <div className="school-short__header">
        <h3>{school}</h3>
        {distance ? <p>{distance.toFixed(1)}km</p> : null}
      </div>
      <div className="school-short__stats">
        <div>
          <img src={rankIcon} alt="rank" />
          <p>{rank} / {rankTotal}</p>
        </div>
        <div>
          <img src={OCEIcon} alt="" />
          <p>{score}</p>
        </div>
        <div>
          <img src={populationIcon} alt="" />
          <p>{population}</p>
        </div>
      </div>
    </div>
  )
}
