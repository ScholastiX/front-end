import { useNavigate } from "react-router-dom";
import Button from "../components/button.tsx";

import arrowBack from "../assets/icons/left-arrow.svg";

export default function Student() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="student">
        <div className="header">
          <h1><img src={arrowBack} alt="Back arrow" onClick={() => navigate(-1)} /> Laiks veikt informētas izvēles</h1>
          <p>Vai jau zini ko meklē?</p>
        </div>
        <div className="buttons">
          <Button text='Aizpildi testu' type='secondary' arrow='up' onClick={() => window.open("https://testi.niid.lv/", "_blank")} size='large' />
          <Button text='Izvēlies skolu' type='primary' arrow='right' onClick={() => navigate("/all-schools")} size='large' />
        </div>
      </div>
    </main>
  )
}
