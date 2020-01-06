import { React, ReactDom } from 'mido-construct/lib/react/react';
import './index.less'

import { Provider, connect } from '../redux';

const initState = {
  num: 0,
  num2: 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        num: state.num + 1
      }

    case 'reduce':
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state;
  }
}

const View = connect(state => ({ num: state.num, test: state.num2 }))(
  props => {
    const {
      num,
      dispatch
    } = props;

    const add = () => {
      dispatch({
        type: 'add'
      })
    }

    const reduce = () => {
      dispatch({
        type: 'reduce'
      })
    }
    return (
      <React.Fragment>
        <button type="button" onClick={add}>加</button>
        <span>{num}</span>
        <button type="button" onClick={reduce}>减</button>
      </React.Fragment>
    )
  }
)

const App = () => {

  return (
    <Provider store={{ state: initState, reducer: reducer }}>
      <View />
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById('root'));