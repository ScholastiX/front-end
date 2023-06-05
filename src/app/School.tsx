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
  const location = {
    address: data.address,
    lat: data.lat,
    lng: data.lon,
  }

  return (
    <main className='school'>
      <div className="title">
        <h1>{data.faculty_name}</h1>
        <p>{data.distance.toFixed(0)} km attālumā</p>
      </div>
      <div>
        <h2>Par skolu</h2>
        <div className='stats'>
          <div><img src={rankIcon} alt="Rank" /><p>{data.rank}/{data.ranktotal}</p></div>
          <div><img src={OCEIcon} alt="OCE" /><p>{data.oce_index}</p></div>
          <div><img src={populationIcon} alt="Pupil count" /><p>{data.pupils_grades_1_12_total}</p></div>
          <div><img src={boardIcon} alt="Board style" /><p>{data.subordinate === "Pašvaldība " ? "Pašvaldības" : "Privātā"}</p></div>
        </div>
      </div>
      <div className="map">
        <h2>Apmeklē skolu klātienē</h2>
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLEKEY }}
            defaultCenter={location}
            defaultZoom={14}
          >
          <Marker
            lat={location.lat}
            lng={location.lng}
            text={location.address}
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
        <p>Direktors: <span className="director">{data.director}</span></p>
        <p>Tālrunis: {data.phone}</p>
        <p>E-pasts: {data.email}</p>
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
