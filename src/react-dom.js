const concileDom = (reactElement) => {
  const { type, props, children } = reactElement;

  if (typeof type === "object") {
    console.log("type: ", type);
    console.log(type.render());

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

const createVDom = (reactElement) => {
  const { type, props, children } = reactElement;

  if (type.prototype?.constructor === type) {
    const component = new type(props);
    return {
      type: new type(props),
      props,
      children: createVDom(component.render()),
    };
  }

  if (Array.isArray(children)) {
    return {
      type,
      props,
      children: children.map((child) => createVDom(child)),
    };
  }

  return reactElement;
};

const render = (rootElement, reactElement, virtualDom) => {
  render.context = { rootElement, reactElement };

  if (!virtualDom) {
    render.context.virtualDom = createVDom(reactElement);
  }

  console.log("V dom", JSON.stringify(render.context.virtualDom, null, 4));

  const html = concileDom(render.context.virtualDom);

  [...rootElement.children].forEach((child) => {
    child.remove();
  });

  rootElement.appendChild(html);
};

export default { render };
