'use client';

import { useEffect, useState } from "react"
interface HeaderProps {
  callback: (profession: string) => void
}

export default function SearchProfession({callback}: HeaderProps) {
  const [profession, setProfession] = useState<string>("")
  const [recommendations, setRecommendations] = useState<string[]>([])

  const getRecommendations = async (profession: string) => {
    const res = await fetch(`http://scholastix.nav.lv:1280/professions/search?value=${profession}`, {
      method: "GET",
    }).catch((err) => console.log(err)).then((res) => res && res.json())
    console.log(res)
    if (Array.isArray(res)) setRecommendations(res);
  }

  useEffect(() => {
    if (profession !== "") getRecommendations(profession)
  }, [profession])
  return (
    <div className="search-profession">
      <input type="text" placeholder="Meklēt pēc profesijas" value={profession} onChange={(e) => {setProfession(e.target.value); callback(e.target.value)}} />
      <div className="results">
        {recommendations.map((recommendation) => {
          return <p onClick={() => {setProfession(recommendation); callback(recommendation)}}>{recommendation}</p>
        })}
      </div>
    </div>
  )
}