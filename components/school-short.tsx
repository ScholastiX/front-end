import populationIcon from "@assets/icons/population.svg"
import rankIcon from "@assets/icons/rank.svg"
import OCEIcon from "@assets/icons/OCE.svg"
import { useRouter } from "next/navigation";

interface HeaderProps {
  school: string;
  population: string;
  distance: number;
  rating: string;
  score: number;
  id: string;
}

export default function SchoolShort ({school, population, distance, rating, score, id}: HeaderProps) {
  const navigate = useRouter().push

  return (
    <div className="school-short" onClick={() => navigate(`/school/${id}`)}>
      <div className="school-short__header">
        <h3>{school}</h3>
        <p>{distance}km</p>
      </div>
      <div className="school-short__stats">
        <div>
          <img src={rankIcon.src} alt="rank" />
          <p>{rating}</p>
        </div>
        <div>
          <img src={OCEIcon.src} alt="" />
          <p>{score}</p>
        </div>
        <div>
          <img src={populationIcon.src} alt="" />
          <p>{population}</p>
        </div>
      </div>
    </div>
  )
}