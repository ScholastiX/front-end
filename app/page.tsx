'use client'

import Button from '@/components/button'
import { useRouter } from 'next/navigation'


export default function Home() {
  const navigate = useRouter().push

  return (
    <main>
      <div className="hero">
        <div className="header">
          <h1>Sveicināts skolu meklētājā</h1>
          <p>Mēs palīdzēsim veikt pareizo skolas izvēli tev/tavam bērnam </p>
        </div>
        <div className="buttons">
          <Button text='Skolēns' type='primary' arrow='right' onClick={() => navigate("/student")} size='large' />
          <Button text='Vecāks' type='secondary' arrow='left' onClick={() => {}} size='large' />
        </div>
      </div>
      <div className="about">
        <div className="spacer"></div>
        <h2>Par mums:</h2>
        <p>
          Sveicināti skolu lokatora Latvijā vietnē.
        </p>
        <p>
          Mēs atbalstām apzinātu lēmumu pieņemšanu attiecībā uz iegūstamo izglītību, un mūsu vietne nodrošina iespēju iegūt lietotājam viegli pārskatāmu un salīdzināmu informāciju par mācību iestādēm Latvijā.
        </p>
        <p>
          Mūsu mērķis ir palīdzēt atrast to mācību iestādi, kas vislabāk atbilst tam karjeras virzienam, kādā vēlies dodies!
        </p>
        <p>
          Atrodi un aplūko skolas, kas nodrošina izgītības iegūšanu no 6. līdz 12. klasei, lai ar pārliecību orientētos izglītības piedāvājumā.
        </p>
        <div className="spacer"></div>
      </div>
    </main>
  )
}
