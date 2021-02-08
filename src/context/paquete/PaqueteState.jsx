import { useReducer } from 'react'
import PaqueteContext from './PaqueteContext'
import PaqueteReducer from './PaqueteReducer'
import clienteAxios from '../../config/clienteAxios'
import { GET_PAQUETE, GET_PAQUETES, HANDLE_CLEAN } from '../../types'

const PaqueteState = (props) => {
  const initialState = {
    listado: [],
    paquete: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(PaqueteReducer, initialState)

  const getPaquetes = async (id) => {
    handleClean()
    try {
      const res = await clienteAxios.get(
        `paquete?filter[destino][eq]=${id}&fields=*.*.*`
      )
      dispatch({
        type: GET_PAQUETES,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const getPaquete = async (id) => {
    handleClean()
    try {
      const res = await clienteAxios.get(`paquete/${id}?fields=*.*.*`)
      dispatch({
        type: GET_PAQUETE,
        payload: res.data.data,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleClean = () => {
    dispatch({
      type: HANDLE_CLEAN,
    })
  }

  return (
    <PaqueteContext.Provider
      value={{
        listado: state.listado,
        paquete: state.paquete,
        loading: state.loading,
        getPaquetes,
        getPaquete,
      }}
    >
      {props.children}
    </PaqueteContext.Provider>
  )
}

export default PaqueteState
