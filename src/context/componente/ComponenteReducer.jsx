import { HANDLE_COMPONENT } from '../../types'

const ComponenteReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_COMPONENT:
      return {
        ...state,
        componente: action.payload,
      }

    default:
      return {
        ...state,
      }
  }
}

export default ComponenteReducer
