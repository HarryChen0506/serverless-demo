import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Taro from '@tarojs/taro'
import configStore from './store'


import '@/styles/taro-ui.scss'
import './app.less'



const store = configStore()
class App extends Component {

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'test-2g50j387286873a3'
      })
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
