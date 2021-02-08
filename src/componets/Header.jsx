import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ComponenteContext from '../context/componente/ComponenteContext'

const Header = () => {
  const componenteContext = useContext(ComponenteContext)
  const { componente } = componenteContext

  return (
    <>
      <nav className="fh5co-nav fixed-top" role="navigation">
        <div className="container">
          <div className="row">
            <div className="left-menu text-right menu-1">
              <ul>
                <li>
                  <a href="#!">Trabajo</a>
                </li>
                <li>
                  <a href="#!">Acerca de</a>
                </li>
                <li className="has-dropdown">
                  <a href="#!">Servicios</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#!">Turismo</a>
                    </li>
                    <li>
                      <a href="#!">Salidas</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="logo text-center">
              <div id="fh5co-logo">
                <Link to="/">SOLARIS</Link>
              </div>
            </div>
            <div className="right-menu text-left menu-1">
              <ul>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li className="has-dropdown">
                  <a href="#!">Covid 19</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#!">Protocolos</a>
                    </li>
                    <li>
                      <a href="#!">Precauciones</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Contactanos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header
        id="fh5co-header"
        className="fh5co-cover fh5co-cover-sm header-image"
        role="banner"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">{componente}</div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
