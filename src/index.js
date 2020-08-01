import {ToyReact, Component} from './ToyReact'

// class MyComponent extends Component{
//  render () {
//    return (
//      <div>
//        <span>cool</span>
//        <div>{this.children}</div>
//        <div>{true}</div>
//      </div>
//    )
//  }
// }

// // const a = <MyComponent id="my-conponent" test="component-test"/>
// const a = (
//   <MyComponent id="my-conponent" test="component-test">
//     <div>toy react</div>
//     <span>yeah!</span>
//   </MyComponent>
// )
// ToyReact.render(a, document.body)

// const b = (
//   <div id="my-div" test="div-test">
//     <span>Hello</span>
//     <span>World</span>
//     <span>!!!</span>
//   </div>
// )
// ToyReact.render(b, document.body)

class Square extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={i}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

ToyReact.render(<Board></Board>, document.body)