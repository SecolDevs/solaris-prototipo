import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../componets/Spinner'
import ComponenteContext from '../../context/componente/ComponenteContext'
import PaqueteContext from '../../context/paquete/PaqueteContext'
import Descripcion from './components/Descripcion'
import Formulario from './components/Formulario'
import ImagenPaquete from './components/ImagenPaquete'
import PaqueteHeader from './components/PaqueteHeader'

const Paquete = () => {
  const componenteContext = useContext(ComponenteContext)
  const { changeComponent } = componenteContext

  const paqueteContext = useContext(PaqueteContext)
  const { paquete, loading, getPaquete } = paqueteContext

  const { id } = useParams()

  useEffect(() => {
    getPaquete(id)
  }, [id])

  useEffect(() => {
    changeComponent(
      Object.keys(paquete).length > 0 ? (
        <PaqueteHeader
          nombre={paquete.nombre}
          descripcion={paquete.destino.nombre}
        />
      ) : (
        <PaqueteHeader />
      )
    )
  }, [paquete])

  const { fotos } = paquete

  return (
    <div className="fh5co-project">
      <div className="container">
        <div className="row">
          {loading ? (
            <Spinner />
          ) : Object.keys(paquete).length > 0 ? (
            <div className="mt-5">
              <div className="col-lg-5">
                <ImagenPaquete datos={paquete.foto} />
                <div className="row">
                  {fotos.map((foto) => (
                    <div key={foto.id} className="col-lg-4">
                      <ImagenPaquete datos={foto.directus_files_id} />
                    </div>
                  ))}
                </div>
              </div>
              <Descripcion descripcion={paquete.descripcion} />
              <div className="col-lg-12">
                <br />
                <hr />
                <h1>Calcula el costo de tu viaje</h1>
                <Formulario paquete={paquete} />
                <br />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3>No se ha encontrado el paquete</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Paquete
