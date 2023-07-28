import {Outlet} from "react-router-dom";
import style from "./App.module.css"; 
import logo from "../public/Imagens/logo.png";

function App() {

  return (
      <div className={style.app}>
        <img src={logo} alt='logo do site' className={style.logo}/>
        <Outlet/>
      </div>
  )
}

export default App
