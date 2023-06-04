'use client'

import Marker from '../components/marker';
import GoogleMapReact from "google-map-react"

import populationIcon from "../assets/icons/population.svg"
import rankIcon from "../assets/icons/rank.svg"
import OCEIcon from "../assets/icons/OCE.svg"

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
    <main>
      <div className="title">
        <h1>{data.faculty_name}</h1>
        <p>{data.distance.toFixed(0)} km attālumā</p>
      </div>
      <div className='stats'>
        <div><img src={rankIcon} alt="Rank" /><p>{data.rank}/{data.ranktotal}</p></div>
        <div><img src={OCEIcon} alt="OCE" /><p>{data.oce_index}</p></div>
        <div><img src={populationIcon} alt="Pupil count" /><p>{data.pupils_grades_1_12_total}</p></div>
        <div><img src="" alt="" /><p>{data.subordinate === "Pašvaldība " ? "Pašvaldības" : "Privātā"} izglītības iestāde</p></div>
      </div>
      <h2>Piesaki vizīti</h2>
      <div className="calendly-inline-widget" data-url="https://calendly.com/jekabs-1" style={{minWidth: "320px", height: "700px"}}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      <h2>Apmeklē skolu klātienē</h2>
      <div className="map">
        <div className="google-map" style={{width: "700px", height: "700px"}}>
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
      <div className="contacts">
        <h2>Kontaktē skolu</h2>
        <p>Direktors: <span className="director">{data.director}</span></p>
        <p>Tālrunis: {data.phone}</p>
        <p>E-pasts: {data.email}</p>
      </div>
    </main>
  )
}
