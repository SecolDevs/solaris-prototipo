import { useContext, useEffect } from 'react'
import ComponenteContext from '../../context/componente/ComponenteContext'
import Buscador from './components/Buscador'
import PaqueteSec from './components/PaqueteSec'

const Inicio = () => {
  const componenteContext = useContext(ComponenteContext)
  const { changeComponent } = componenteContext

  useEffect(() => {
    changeComponent(<Buscador />)
  }, [])

  return (
    <>
      <PaqueteSec />
    </>
  )
}

export default Inicio
