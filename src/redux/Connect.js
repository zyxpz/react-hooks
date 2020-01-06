import { React } from 'mido-construct/lib/react/react';

import Context from './Context';

const loop = () => { };

export default (mapStateToProps = loop) => View => {
  // 高阶函数不能使用hooks
  // const {
  //   state,
  //   dispatch
  // } = React.useContext(Context);

  // const {
  //   stateToProps
  // } = mapStateToProps(state)

  // return (<View {...stateToProps} dispatch={dispatch} />)

  // return (
  //   <Context.Consumer>
  //     {
  //       ({ state, dispatch }) => {
  //         return (
  //           <View {...mapStateToProps(state)} dispatch={dispatch}>{}</View>
  //         )
  //       }
  //     }
  //   </Context.Consumer >
  // )


  // Consumer return 一个类
  return class Consumer extends React.PureComponent {
    render() {
      return (
        <Context.Consumer>
          {
            ({ state, dispatch }) => {
              return (
                <View {...mapStateToProps(state)} dispatch={dispatch} />
              )
            }
          }
        </Context.Consumer >
      )
    }
  }
}

