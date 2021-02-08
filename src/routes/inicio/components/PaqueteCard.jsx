import { Link } from 'react-router-dom'

const PaqueteCard = ({ datos }) => {
  const { id, nombre, foto, costo, destino } = datos
  // foto.data.full_url

  return (
    <div className="col-md-4 col-sm-6 fh5co-project">
      <Link to={`paquete/${id}`}>
        <img src={foto.data.full_url} alt={nombre} className="img-responsive" />
        <h3>{nombre}</h3>
        <span>
          {destino.nombre} - Desde: ${costo}
        </span>
      </Link>
    </div>
  )
}

export default PaqueteCard
