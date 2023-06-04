'use client'

import SchoolShort from '@/components/school-short'
import Sort from '@/components/sort'
import { useState } from 'react'

export default function Home() {
  const [sort, setSort] = useState<"OCE" | "populous" | "rank" | "distance">("OCE")
  const sortingCallback = (category: "OCE" | "populous" | "rank" | "distance") => {
    setSort(category)
  }

  return (
    <main>
      <h1>Profesionālās</h1>
      <Sort callback={sortingCallback} selected={sort} />
      <SchoolShort distance={16} school='Rīgas Mākslas un Mediju tehnikums' population='1.0k' rating='20/302' score={123} id='123'/>
    </main>
  )
}
