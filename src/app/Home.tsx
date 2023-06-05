import { Link, useNavigate } from "react-router-dom";
import Button from '../components/button'
import heroIllustration from "../assets/illustrations/hero.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="hero">
        <div className="header">
          <h1>Sveicināts skolu meklētājā</h1>
          <p>Mēs palīdzēsim veikt pareizo skolas izvēli tev/tavam bērnam </p>
          <img src={heroIllustration} alt="Classroom illustration" />
        </div>
        <div className="buttons">
          <Link to="/student" className="button large primary arrow-right">
            Skolēniem
            <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17.2C0 16.0954 0.895431 15.2 2 15.2H53.9167C55.0213 15.2 55.9167 16.0954 55.9167 17.2V20.8C55.9167 21.9046 55.0213 22.8 53.9167 22.8H2C0.895428 22.8 0 21.9046 0 20.8V17.2Z" fill="#2A2B2E"/>
              <path d="M33.5617 38C31.6913 38 30.8444 35.6613 32.2812 34.4637L48.9902 20.5363C49.9495 19.7367 49.9495 18.2633 48.9902 17.4637L32.2812 3.5363C30.8444 2.33868 31.6913 0 33.5617 0H37.481C37.949 0 38.4021 0.164087 38.7616 0.463702L59.1569 17.4637C60.1161 18.2633 60.1161 19.7367 59.1569 20.5363L38.7616 37.5363C38.4021 37.8359 37.949 38 37.481 38H33.5617Z" fill="#2A2B2E"/>
            </svg>
          </Link>
          <Link to="/all-schools" className="button large secondary arrow-left">
            Vecākiem
            <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 20.8C60 21.9046 59.1046 22.8 58 22.8H6.08328C4.97871 22.8 4.08328 21.9046 4.08328 20.8V17.2C4.08328 16.0954 4.97871 15.2 6.08328 15.2H58C59.1046 15.2 60 16.0954 60 17.2V20.8Z" fill="#2A2B2E"/>
              <path d="M26.4383 4.76837e-07C28.3087 4.76837e-07 29.1556 2.33868 27.7188 3.5363L11.0098 17.4637C10.0505 18.2633 10.0505 19.7367 11.0098 20.5363L27.7188 34.4637C29.1556 35.6613 28.3087 38 26.4383 38H22.519C22.051 38 21.5979 37.8359 21.2384 37.5363L0.843133 20.5363C-0.116144 19.7367 -0.116143 18.2633 0.843133 17.4637L21.2384 0.463702C21.5979 0.164087 22.051 4.76837e-07 22.519 4.76837e-07H26.4383Z" fill="#2A2B2E"/>
            </svg>
          </Link>
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
