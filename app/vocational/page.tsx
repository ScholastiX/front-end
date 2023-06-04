'use client'

import SchoolShort from '@/components/school-short'
import Sort from '@/components/sort'
import { useEffect, useState } from 'react'

export default async function Home() {
  const [sort, setSort] = useState<"OCE" | "populous" | "rank" | "distance">("OCE")
  const sortingCallback = (category: "OCE" | "populous" | "rank" | "distance") => {
    setSort(category)
  }
  const schools = async () => {
    const res = await fetch("http://scholastix.nav.lv:1280/", {
      method: "POST",
      body: JSON.stringify({
        pagination: {size: 0, offset: 10},
        targetlocation: {lat: 0, log: 0},
        direction: "desc",
        sortBy: "pupils"
      }),
    }).then(res => res.json()).catch(err => console.error(err))
    console.log(res)
  }

  useEffect(() => {
    schools()
  }, [sort])

  return (
    <main>
      <div className="schools">
        <h1>Profesionālās</h1>
        <div className="search-section">
          <Sort callback={sortingCallback} selected={sort} />
        </div>
        <SchoolShort distance={16} school='Rīgas Mākslas un Mediju tehnikums' population='1.0k' rating='20/302' score={123} id='123'/>
      </div>
    </main>
  )
}
