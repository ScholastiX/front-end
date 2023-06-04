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

export default function School({ params }: { params: { school: string } }) {
  return (
    <main>
      <h1>{data.faculty_name}</h1>
      <small>{data.distance.toFixed(0)} km attālumā</small>
      <div>
        <div>{data.rank}/{data.ranktotal}</div>
        <div>OCE: {data.oce_index}</div>
        <div>{data.pupils_grades_1_12_total}</div>
        <div>{data.subordinate === "Pašvaldība " ? "Pašvaldības" : "Privātā"} izglītības iestāde</div>
      </div>
      <div>
        Apmeklē skolu klātienē
        <p>
          {data.address}
        </p>
      </div>
      <div>
        Piesaki vizīti
        <p>
          Direktors: <span className="director">{data.director}</span>
        </p>
        <p>
          Tālrunis: {data.phone}
        </p>
        <p>
          E-pasts: {data.email}
        </p>
      </div>
      <div>
        Atsauces (4.7/5, 204)
        <div>
        </div>
      </div>
    </main>
  )
}
