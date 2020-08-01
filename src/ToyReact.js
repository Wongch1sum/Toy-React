class ElementWrapper {
  constructor (type) {
    this.element = document.createElement(type)
  }
  setAttribute (attr, value) {
    if (attr.match(/^on([\s\S]+)$/)) {
      // console.log(RegExp.$1)
      this.element.addEventListener(RegExp.$1.toLowerCase(), value)
    }
    if (attr === "className") {
      attr = 'class'
    }
    this.element.setAttribute(attr, value)
  }
  appendChild (vchild) {
    vchild.mountTo(this.element)
  }
  mountTo (parent) {
    parent.appendChild(this.element)
  }
}
class TextWrapper {
  constructor (content) {
    this.text = document.createTextNode(content)
  }
  mountTo (parent) {
    parent.appendChild(this.text)
  }
}

export class Component {
  constructor () {
    this.children = []
    this.props = Object.create(null)
  }
  mountTo (parent) {
    let vdom = this.render()
    vdom.mountTo(parent)
  }
  setAttribute (attr, value) {
    this[attr] = value
    this.props[attr] = value
  }
  appendChild (vchild) {
    this.children.push(vchild)
  }
  setState (state) {
    let merge = (oldState, newState) => {
      for (let p in newState) {
        if (typeof newState[p] === 'object') {
          if (typeof oldState[p] !== 'object') {
            oldState[p] = {}
          }
          merge(oldState[p], newState[p])
        } else {
          oldState[p] = newState[p]
        }
      }
    }
    if (!this.state && state) {
      this.state = {}
    }
    merge(this.state, state)
    console.log(this.state)
  }
}

export const ToyReact = {
  createElement (type, attrs, ...children) {
    // console.log(arguments)
    let element
    if (typeof type === 'string')
      element = new ElementWrapper(type)
    else 
      element = new type  
    for (let attr in attrs) {
      element.setAttribute(attr, attrs[attr])
    }
    let insertChildren = children => {
      for (let child of children) {
        if (typeof child === 'object' && child instanceof Array) {
          insertChildren(child)
        } else {
          if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper))
            child = child.toString()
          if (typeof child === 'string')
            child = new TextWrapper(child)
          element.appendChild(child)
        }
      }  
    }
    insertChildren(children)
    return element   
  },
  render (vdom, element) {
    // console.log(vdom, element)
    vdom.mountTo(element)
  }
}