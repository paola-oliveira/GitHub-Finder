import './App.css';
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
      <div>
        <img src='../public/Imagens/logo.png' alt='logo do site' className='logo'/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
