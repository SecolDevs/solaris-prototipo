import { GET_HOTELES } from '../../types'

const HotelReducer = (state, action) => {
  switch (action.type) {
    case GET_HOTELES:
      return {
        ...state,
        listado: action.payload,
        loading: false,
      }

    default:
      return {
        ...state,
      }
  }
}

export default HotelReducer
