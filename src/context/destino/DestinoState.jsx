import { useReducer } from 'react'
import DestinoContext from './DestinoContext'
import DestinoReducer from './DestinoReducer'
import clienteAxios from '../../config/clienteAxios'
import { GET_DESTINOS } from '../../types'

const DestinoState = (props) => {
  const initialState = {
    loading: true,
    listado: [],
  }

  const [state, dispatch] = useReducer(DestinoReducer, initialState)

  const getRegistros = async () => {
    try {
      const res = await clienteAxios.get('destino')
      dispatch({
        type: GET_DESTINOS,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <DestinoContext.Provider
      value={{
        loading: state.loading,
        listado: state.listado,
        getRegistros,
      }}
    >
      {props.children}
    </DestinoContext.Provider>
  )
}

export default DestinoState
