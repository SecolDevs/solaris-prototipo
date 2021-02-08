import React from 'react'
import ComponenteState from './context/componente/ComponenteState'
import DestinoState from './context/destino/DestinoState'
import HotelState from './context/hotel/HotelState'
import PaqueteState from './context/paquete/PaqueteState'
import Routes from './routes/Routes'

function App() {
  return (
    <DestinoState>
      <PaqueteState>
        <ComponenteState>
          <HotelState>
            <Routes />
          </HotelState>
        </ComponenteState>
      </PaqueteState>
    </DestinoState>
  )
}

export default App
