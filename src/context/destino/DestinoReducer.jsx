import { GET_DESTINOS } from '../../types'

const DestinoReducer = (state, action) => {
  switch (action.type) {
    case GET_DESTINOS:
      return {
        ...state,
        loading: false,
        listado: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default DestinoReducer
