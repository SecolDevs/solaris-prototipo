import HotelContext from './HotelContext'
import HotelReducer from './HotelReducer'
import clienteAxios from '../../config/clienteAxios'
import { useReducer } from 'react'
import { GET_HOTELES } from '../../types'

const HotelState = (props) => {
  const initialState = {
    listado: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(HotelReducer, initialState)

  const getHoteles = async (id) => {
    try {
      const res = await clienteAxios.get(`hotel?filter[paquete][eq]=${id}`)
      dispatch({
        type: GET_HOTELES,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <HotelContext.Provider
      value={{
        listado: state.listado,
        loading: state.loading,
        getHoteles,
      }}
    >
      {props.children}
    </HotelContext.Provider>
  )
}

export default HotelState
