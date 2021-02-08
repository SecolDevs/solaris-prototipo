import { useContext, useEffect, useState } from 'react'
import DestinoContext from '../../../context/destino/DestinoContext'
import PaqueteContext from '../../../context/paquete/PaqueteContext'

const Buscador = () => {
  const destinoContext = useContext(DestinoContext)
  const { listado, loading, getRegistros } = destinoContext

  const paqueteContext = useContext(PaqueteContext)
  const { getPaquetes } = paqueteContext

  useEffect(() => {
    getRegistros()
  }, [])

  const [destino, setDestino] = useState('')

  const handleChange = (e) => {
    setDestino(e.target.value)
  }

  useEffect(() => {
    if (destino.trim().length > 0) getPaquetes(destino)
  }, [destino])

  return (
    <div className="display-tc">
      <h1>Encuentra tu siguiente destino</h1>
      <div className="row">
        <form className="form-inline" id="fh5co-header-subscribe">
          <div className="col-md-6 col-md-offset-3">
            <div className="form-group">
              <select
                className="form-control"
                name="destino"
                id="destino"
                required
                value={destino}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione
                </option>
                {loading ? (
                  <option value="">Cargando...</option>
                ) : Object.keys(listado).length > 0 ? (
                  listado.map(({ id, nombre }) => (
                    <option key={id} value={id}>
                      {nombre}
                    </option>
                  ))
                ) : (
                  <option value="">No hay registros.</option>
                )}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Buscador
