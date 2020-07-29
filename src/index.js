// require('./test')
// console.log('hello world')

// for (let i of [1,2,3]) {
//   console.log(i)
// }

const { ToyReact }  = require('./ToyReact')

class MyComponent {

}
// let test = <MyComponent test="gqf" desc="fred" />
// let test = <div test="gqf" desc="fred"></div>
let test = (<div test="gqf" desc="fred">
  <span class="haha">Hello</span>
  <span id="my-span">World</span>
  <span>!!</span>
</div>)

console.log(test)
document.body.appendChild(test)