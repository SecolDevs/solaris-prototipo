const PaqueteHeader = ({
  nombre = 'Paquete',
  descripcion = 'Reserva tu paquete',
}) => {
  return (
    <div className="display-tc">
      <div className="row">
        <h1>{nombre}</h1>
        <h2>{descripcion}</h2>
      </div>
    </div>
  )
}

export default PaqueteHeader
