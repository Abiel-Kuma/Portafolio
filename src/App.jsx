import react from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/homePage'
import NavbarComponent from "./components/NavbarComponent"

function app(){
  return (
    <Router>
      <div>
        <NavbarComponent/>
       <Switch>
          <Route path="/" exactm Component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>      
    </Router>
  )
}
export default app