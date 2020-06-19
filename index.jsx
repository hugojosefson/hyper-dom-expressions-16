/** @jsx h */
import h from 'solid-js/h'
import {render} from 'solid-js/dom'

const Greeting = () => 'HELLO'

render(
  () => <Greeting/>,
  document.getElementById('root')
)
