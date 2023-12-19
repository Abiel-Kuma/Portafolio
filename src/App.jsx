import react from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import homePage from './pages/homePage'

function app(){
  return (
    <Router>
      <Switch>
        <Route path="/" exactm Component={homePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}
export default app