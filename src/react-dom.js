const concileDom = (reactElement) => {
  const { type, props, children } = reactElement;

  if (typeof type === "object") {
    return concileDom(type.render());
  }

  const currentElement = document.createElement(type);

  if (typeof children === "string") {
    currentElement.innerText = children;
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      currentElement.appendChild(concileDom(child));
    });
  }

  if ("onClick" in props) {
    currentElement.onclick = props["onClick"];
  }

  return currentElement;
};

const createVirtualDom = (reactElement) => {
  const { type, props, children } = reactElement;

  if (type.prototype?.constructor === type) {
    const component = new type(props);
    return {
      type: new type(props),
      props,
      children: createVirtualDom(component.render()),
    };
  }

  if (Array.isArray(children)) {
    return {
      type,
      props,
      children: children.map((child) => createVirtualDom(child)),
    };
  }

  return reactElement;
};

const updateRealDom = (rootElement, virtualDom) => {
  const html = concileDom(virtualDom);

  [...rootElement.children].forEach((child) => {
    child.remove();
  });

  rootElement.appendChild(html);
};

const render = (rootElement, reactElement) => {
  const virtualDom = createVirtualDom(reactElement);

  render.context = { rootElement, reactElement, virtualDom };
  updateRealDom(rootElement, virtualDom);
};

export default { render, updateRealDom };
