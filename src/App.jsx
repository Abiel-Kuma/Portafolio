import react from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import {HomePage} from './pages/homePage'
import NavbarComponent from "./components/NavbarComponent"

function app(){
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default app