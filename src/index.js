// import _ from 'lodash'
// import printMe from './print.js'
// import './style.css'
import { cube } from './math.js'

function component() {
  // var element = document.createElement('div');

  // var btn = document.createElement('button')

  // // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  // btn.innerHTML = 'click me and check the console!'
  // btn.onclick = printMe

  // element.appendChild(btn);
  var element = document.createElement('pre')

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

document.body.appendChild(component())
// let element = component() // 当print.js 改变导致页面重新渲染是，重新获取渲染元素
// document.body.appendChild(element)

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!')
//     // printMe()
//     document.body.removeChild(element)
//     element = component() // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element)
//   })
// }