import { GET_PAQUETE, GET_PAQUETES, HANDLE_CLEAN } from '../../types'

const PaqueteReducer = (state, action) => {
  switch (action.type) {
    case GET_PAQUETES:
      return {
        ...state,
        listado: action.payload,
        loading: false,
      }
    case GET_PAQUETE:
      return {
        ...state,
        paquete: action.payload,
        loading: false,
      }
    case HANDLE_CLEAN:
      return {
        ...state,
        loading: true,
        listado: [],
        paquete: [],
      }
    default:
      return {
        ...state,
      }
  }
}

export default PaqueteReducer
