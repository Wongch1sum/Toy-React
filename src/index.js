import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component{
 render () {
   return (
     <div>
       <span>cool</span>
     </div>
   )
 }
}

const a = <MyComponent id="my-conponent" test="component-test"/>
ToyReact.render(a, document.body)

const b = (
  <div id="my-div" test="div-test">
    <span>Hello</span>
    <span>World</span>
    <span>!!!</span>
  </div>
)
ToyReact.render(b, document.body)