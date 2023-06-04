'use client'

import Filter from '@/components/filter'
import SchoolShort from '@/components/school-short'
import Sort from '@/components/sort'
import { useEffect, useState } from 'react'

export default async function Home() {
  const [sort, setSort] = useState<"OCE" | "populous" | "rank" | "distance">("OCE")
  let filter = {
    pupils: {
      min: 0,
      max: 1000
    },
    distance: {
      min: 0,
      max: 1000
    },
    rating: {
      min: 0,
      max: 1000
    },
    profession: ""
  }

  const filterCallback = (set: "pupils" | "distance" | "rating", minMax: "min" | "max", value: number) => {
    if (minMax === "min" && value > filter[set].max) return;
    if (minMax === "max" && value < filter[set].min) return;
    if (value < 0) return;
    if (minMax === "min") {
      filter = {
        ...filter,
        [set]: {
          min: value,
          max: filter[set].max
        }
      }
    } else {
      filter = {
        ...filter,
        [set]: {
          min: filter[set].min,
          max: value
        }
      }
    }
  }

  const filterProfessionCallback = (profession: string) => {
    filter = {
      ...filter,
      profession
    }
  }

  const sortingCallback = (category: "OCE" | "populous" | "rank" | "distance") => {
    setSort(category)
  }
  const schools = async () => {
    const res = await fetch("http://scholastix.nav.lv:1280/", {
      method: "POST",
      body: JSON.stringify({
        pagination: {size: 0, offset: 10},
        targetLocation: {lat: 0, log: 0},
        direction: "desc",
        sortBy: "pupils"
      }),
    }).then(res => res.json()).catch(err => console.error(err))
    console.log(res)
  }

  // useEffect(() => {
  //   schools()
  // }, [sort])

  return (
    <main>
      <div className="schools">
        <h1>Profesionālās</h1>
        <div className="search-section">
          <Sort callback={sortingCallback} selected={sort} />
          <Filter callback={filterCallback} callbackProfession={filterProfessionCallback} defaultFilter={filter} />
        </div>
        <SchoolShort distance={16} school='Rīgas Mākslas un Mediju tehnikums' population='1.0k' rating='20/302' score={123} id='123'/>
      </div>
    </main>
  )
}
