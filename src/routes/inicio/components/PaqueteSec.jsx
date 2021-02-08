import { useContext } from 'react'
import Spinner from '../../../componets/Spinner'
import PaqueteContext from '../../../context/paquete/PaqueteContext'
import PaqueteCard from './PaqueteCard'

const PaqueteSec = () => {
  const paqueteContext = useContext(PaqueteContext)
  const { listado, loading } = paqueteContext

  return (
    <div id="fh5co-project">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Nuestros Destinos</h2>
            <p>Consulta nuestros destinos mas llamativos.</p>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <Spinner />
          ) : Object.keys(listado).length > 0 ? (
            listado.map((datos) => <PaqueteCard key={datos.id} datos={datos} />)
          ) : (
            <p>No se han encontrado resultados</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PaqueteSec
