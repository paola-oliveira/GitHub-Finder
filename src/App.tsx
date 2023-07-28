import {Outlet} from "react-router-dom";
import style from "./App.module.css"; 

function App() {

  return (
      <div className={style.app}>
        <img src='../public/Imagens/logo.png' alt='logo do site' className={style.logo}/>
        <Outlet/>
      </div>
  )
}

export default App
