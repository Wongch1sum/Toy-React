class ElementWrapper {
  constructor (type) {
    this.element = document.createElement(type)
  }
  setAttribute (attr, value) {
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
  mountTo (parent) {
    let vdom = this.render()
    vdom.mountTo(parent)
  }
  setAttribute (attr, value) {
    this[attr] = value
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
    for (let child of children) {
      if (typeof child === 'string')
        child = new TextWrapper(child)
      element.appendChild(child)
    }  
    return element   
  },
  render (vdom, element) {
    // console.log(vdom, element)
    vdom.mountTo(element)
  }
}