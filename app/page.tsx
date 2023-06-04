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
    </main>
  )
}
