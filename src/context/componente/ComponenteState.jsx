import { useReducer } from 'react'
import { HANDLE_COMPONENT } from '../../types'
import ComponenteContext from './ComponenteContext'
import ComponenteReducer from './ComponenteReducer'

const ComponenteState = (props) => {
  const initialState = {
    componente: null,
  }

  const [state, dispatch] = useReducer(ComponenteReducer, initialState)

  const changeComponent = (component) => {
    dispatch({
      type: HANDLE_COMPONENT,
      payload: component,
    })
  }

  return (
    <ComponenteContext.Provider
      value={{ componente: state.componente, changeComponent }}
    >
      {props.children}
    </ComponenteContext.Provider>
  )
}

export default ComponenteState
