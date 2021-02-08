import { useContext, useEffect, useState } from 'react'
import HotelContext from '../../../context/hotel/HotelContext'

const Formulario = ({ paquete }) => {
  const hotelContext = useContext(HotelContext)
  const { loading, listado, getHoteles } = hotelContext

  const { id, costo } = paquete

  useEffect(() => {
    getHoteles(id)
  }, [id])

  const [hotel, setHotel] = useState(null)
  const [total, setTotal] = useState(costo)
  const [datos, setDatos] = useState({
    hotel: '',
    viajeros: '',
    dias: '',
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (datos.hotel.trim().length > 0)
      setHotel({
        hotel: listado.find((hotel) => hotel.id === parseInt(datos.hotel)),
      })
  }, [datos.hotel])

  useEffect(() => {
    if (datos.dias > 0 && datos.viajeros > 0 && datos.hotel > 0) {
      let costoPersonas = datos.viajeros * hotel.hotel.costopersona
      let costoDias = costoPersonas * datos.dias
      setTotal(paquete.costo + costoDias)
    }
  }, [datos])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <label htmlFor="hotel" className="col-lg-2">
          Selecciona el hotel:
        </label>
        <div className="col-lg-10">
          <select
            name="hotel"
            id="hotel"
            className="form-control"
            value={datos.hotel}
            onChange={handleChange}
          >
            <option value="" disabled>
              Seleccione
            </option>
            {loading ? (
              <option value="">Cargando...</option>
            ) : Object.keys(listado).length > 0 ? (
              listado.map((hote) => (
                <option key={hote.id} value={hote.id}>
                  {hote.nombre}
                </option>
              ))
            ) : null}
          </select>
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="viajeros" className="col-lg-2">
          Numero de Viajeros:
        </label>
        <div className="col-lg-10">
          <input
            className="form-control"
            type="number"
            name="viajeros"
            id="viajeros"
            placeholder="Personas"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="dias" className="col-lg-2">
          Duracion del Viaje:
        </label>
        <div className="col-lg-10">
          <input
            className="form-control"
            type="number"
            name="dias"
            id="dias"
            placeholder="Dias"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />

      {hotel ? (
        <h2>
          <strong>Costo de Hotel: ${hotel.hotel.costopersona}</strong>
        </h2>
      ) : null}

      <h2>
        <strong>Costo total: ${total}</strong>
      </h2>

      <div className="container">
        {hotel ? (
          <button type="submit" className="btn btn-primary btn-block">
            Reserva Ya por ${total}
          </button>
        ) : (
          <button disabled className="btn btn-primary btn-block">
            Debe seleccionar un hotel
          </button>
        )}
      </div>
    </form>
  )
}

export default Formulario
