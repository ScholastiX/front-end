'use client'

import Marker from '../components/marker';
import GoogleMapReact from "google-map-react"
import { InlineWidget } from "react-calendly";

import populationIcon from "../assets/icons/population.svg"
import rankIcon from "../assets/icons/rank.svg"
import OCEIcon from "../assets/icons/OCE.svg"
import boardIcon from "../assets/icons/board.svg"
import emptyStarIcon from "../assets/icons/star.svg"
import fullStarIcon from "../assets/icons/star-filled.svg"
import halfStarIcon from "../assets/icons/star-half.svg"
import arrowBack from "../assets/icons/left-arrow.svg"

import { useNavigate } from 'react-router-dom';

const data = {
  "municipality": "Siguldas novads",
  "faculty_nr": "4319901124  ",
  "faculty_name": "Siguldas Valsts ģimnāzija",
  "faculty_type": "Vispārējās izglītības iestāde",
  "faculty_type_alt": "Valsts ģimnāzija",
  "subordinate": "Pašvaldība ",
  "oce_index": "75.49",
  "grade_12_pupils": 74,
  "oce_math_weighted_average": "67.83",
  "oce_latvian_weighted_average": "75.48",
  "oce_foreign_weighted_average": "83.15",
  "email": "svg@sigulda.lv",
  "phone": "67971461",
  "director": "RŪDOLFS KALVĀNS",
  "pupils_preschool_total": 0,
  "pupils_grades_1_12_total": 547,
  "lat": 57.1584109,
  "lon": 24.859166703619493,
  "address": "Siguldas Valsts ģimnāzija, 7, Ata Kronvalda iela, Sigulda, Siguldas novads, Vidzeme, LV-2150, Latvija",
  "distance": 12.79978674156446,
  "rank": "7",
  "ranktotal": "285"
} as const;

export default function AllSchools({ params }: { params: { school: string } }) {
  const GOOGLEKEY="AIzaSyBJbC7DxiyphaQrPJLnZoXxYaXYD5Btf-I"
  const navigate = useNavigate();

  const getDataFromLocalStorage = () => {
    const school = localStorage.getItem("school");
    const output = JSON.parse(school || "{}");
    return { ...output };
  }

  const dataFromLocalStorage = getDataFromLocalStorage();

  return (
    <main className='school'>
      <div className="title">
        <h1><img src={arrowBack} alt="Back arrow" onClick={() => navigate(-1)} /> {dataFromLocalStorage.school}</h1>
        {dataFromLocalStorage.distance && <p>{parseFloat(dataFromLocalStorage.distance).toFixed(0)} km attālumā</p>}
      </div>
      <div>
        <h2>Par skolu</h2>
        <div className='stats'>
          <div><img src={rankIcon} alt="Rank" /><p>{dataFromLocalStorage.rank}/{dataFromLocalStorage.rankTotal}</p></div>
          <div><img src={OCEIcon} alt="OCE" /><p>{dataFromLocalStorage.score}</p></div>
          <div><img src={populationIcon} alt="Pupil count" /><p>{dataFromLocalStorage.population}</p></div>
          <div><img src={boardIcon} alt="Board style" /><p>{dataFromLocalStorage.board === "Pašvaldība " ? "Pašvaldības" : "Privātā"}</p></div>
        </div>
      </div>
      <div className="map">
        <div className="header">
          <h2>Apmeklē skolu klātienē</h2>
          <p>Adrese: {dataFromLocalStorage.address}</p>
        </div>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLEKEY }}
            defaultCenter={dataFromLocalStorage.coordinates.lat && dataFromLocalStorage.coordinates.lon ? { lat: parseFloat(dataFromLocalStorage.coordinates.lat), lng: parseFloat(dataFromLocalStorage.coordinates.lon) } : { lat: 57.1584109, lng: 24.859166703619493 }}
            defaultZoom={14}
          >
          <Marker
            lat={dataFromLocalStorage.coordinates.lat ? parseFloat(dataFromLocalStorage.coordinates.lat) : 57.1584109}
            lng={dataFromLocalStorage.coordinates.lon ? parseFloat(dataFromLocalStorage.coordinates.lon) : 57.1584109}
            text={dataFromLocalStorage.address ? dataFromLocalStorage.address : "Siguldas Valsts ģimnāzija, 7, Ata Kronvalda iela, Sigulda, Siguldas novads, Vidzeme, LV-2150, Latvija"}
          />
          </GoogleMapReact>
        </div>
      </div>
      <div>
        <h2>Piesaki vizīti</h2>
        <InlineWidget url='https://calendly.com/jekabs-1' />
      </div>
      <div className="contacts">
        <h2>Kontaktē skolu</h2>
        <p>Direktors: <span className="director">{dataFromLocalStorage.director}</span></p>
        <p>Tālrunis: {dataFromLocalStorage.phone}</p>
        <p>E-pasts: {dataFromLocalStorage.email}</p>
      </div>
      <div className="reviews">
        <h2>Atsauksmes no vecākiem un skolotājiem</h2>
        <div className="review">
          <p>Skolotāja</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam blandit, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam blandit, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nunc.”</p>
          <div className="stars">
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={emptyStarIcon} alt="Star" />
          </div>
        </div>
        <div className="review">
          <p>Vecāks</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam blandit, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nunc. Sed euismod, diam quis aliquam blandit, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nunc.”</p>
          <div className="stars">
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={fullStarIcon} alt="Star" />
            <img src={halfStarIcon} alt="Star" />
          </div>
        </div>
      </div>
    </main>
  )
}
