export const ToyReact = {
  createElement (type, attrs, ...children) {
    console.log(arguments)
    let element
    if (typeof type === 'string')
      element = document.createElement(type)
    for (let attr in attrs) {
      element.setAttribute(attr, attrs[attr])
    }
    for (let child of children) {
      if (typeof child === 'string')
        child = document.createTextNode(child)
      element.appendChild(child)
    }  
    return element   
  }
}