import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../componets/Footer'
import Header from '../componets/Header'
import Inicio from './inicio/Inicio'
import Paquete from './paquete/Paquete'

const Routes = () => {
  return (
    <Router>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/paquete/:id" component={Paquete} />
          <Route exact path="/" component={Inicio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default Routes
