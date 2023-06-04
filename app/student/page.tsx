'use client'

import Button from '@/components/button'
import { useRouter } from 'next/navigation'


export default function Home() {
  const navigate = useRouter().push

  return (
    <main>
      <div className="student">
        <div className="header">
          <h1>Laiks veikt informētas izvēles</h1>
          <p>Vai jau zini ko meklē?</p>
        </div>
        <div className="buttons">
          <Button text='Aizpildi testu' type='secondary' arrow='up' onClick={() => navigate("/vocational")} size='large' />
          <Button text='Profesionālā izglītība' type='primary' arrow='right' onClick={() => navigate("/vocational")} size='large' />
          <Button text='Tradicionālā izglītība' type='secondary' arrow='down' onClick={() => navigate("/traditional")} size='large' />
        </div>
      </div>
    </main>
  )
}
