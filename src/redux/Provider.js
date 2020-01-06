import { React } from 'mido-construct/lib/react/react';
import Context from './Context';

export default props => {
  const {
    store,
    children
  } = props;

  const {
    state: userState,
    reducer
  } = store;

  const [state, dispatch] = React.useReducer(reducer, userState)

  return (<Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>)
}