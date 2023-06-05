import { useNavigate } from "react-router-dom";
import Button from "../components/button.tsx";

import arrowBack from "../assets/icons/left-arrow.svg";
import testScreenShoot from "../assets/images/test.png";

import { Link } from "react-router-dom";

export default function Student() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="student">
        <div className="header">
          <h1><img src={arrowBack} alt="Back arrow" onClick={() => navigate(-1)} /> Laiks veikt informētas izvēles</h1>
          <p>Vai jau zini ko meklē?</p>
          <img src={testScreenShoot} alt="" />
        </div>
        <div className="buttons">
          <a className="button secondary arrow-up large" href={"https://testi.niid.lv/"}>
            Aizpildi testu
            <svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2 35.7491C16.0954 35.7491 15.2 34.8537 15.2 33.7491L15.2 6.08329C15.2 4.97872 16.0954 4.08328 17.2 4.08328H20.8C21.9046 4.08328 22.8 4.97871 22.8 6.08328L22.8 33.7491C22.8 34.8537 21.9046 35.7491 20.8 35.7491L17.2 35.7491Z" fill="#2A2B2E"/>
              <path d="M38 26.4382C38 28.3087 35.6613 29.1556 34.4637 27.7188L20.5363 11.0098C19.7367 10.0505 18.2633 10.0505 17.4637 11.0098L3.5363 27.7188C2.33868 29.1556 0 28.3087 0 26.4383L0 22.519C0 22.051 0.164087 21.5979 0.463703 21.2384L17.4637 0.843127C18.2633 -0.116149 19.7367 -0.116148 20.5363 0.843128L37.5363 21.2384C37.8359 21.5979 38 22.051 38 22.519V26.4382Z" fill="#2A2B2E"/>
            </svg>
          </a>
          <Link className="button primary arrow-right large" to={"/all-schools"}>
            Izvēlies skolu
            <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 17.2C0 16.0954 0.895431 15.2 2 15.2H53.9167C55.0213 15.2 55.9167 16.0954 55.9167 17.2V20.8C55.9167 21.9046 55.0213 22.8 53.9167 22.8H2C0.895428 22.8 0 21.9046 0 20.8V17.2Z" fill="#2A2B2E"/>
              <path d="M33.5617 38C31.6913 38 30.8444 35.6613 32.2812 34.4637L48.9902 20.5363C49.9495 19.7367 49.9495 18.2633 48.9902 17.4637L32.2812 3.5363C30.8444 2.33868 31.6913 0 33.5617 0H37.481C37.949 0 38.4021 0.164087 38.7616 0.463702L59.1569 17.4637C60.1161 18.2633 60.1161 19.7367 59.1569 20.5363L38.7616 37.5363C38.4021 37.8359 37.949 38 37.481 38H33.5617Z" fill="#2A2B2E"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
