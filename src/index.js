import {ToyReact} from './ToyReact'

class MyComponent {

}

// const a = <MyComponent id="my-conponent" test="component-test"/>

const b = (
  <div id="my-div" test="div-test">
    <span>Hello</span>
    <span>World</span>
    <span>!!!</span>
  </div>
)
console.log(b)
document.body.appendChild(b)