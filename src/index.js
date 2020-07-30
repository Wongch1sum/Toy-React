import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component{
 render () {
   return (
     <div>
       <span>cool</span>
       <div>{this.children}</div>
       <div>{true}</div>
     </div>
   )
 }
}

// const a = <MyComponent id="my-conponent" test="component-test"/>
const a = (
  <MyComponent id="my-conponent" test="component-test">
    <div>toy react</div>
    <span>yeah!</span>
  </MyComponent>
)
ToyReact.render(a, document.body)

const b = (
  <div id="my-div" test="div-test">
    <span>Hello</span>
    <span>World</span>
    <span>!!!</span>
  </div>
)
ToyReact.render(b, document.body)