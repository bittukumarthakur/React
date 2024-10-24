function createElement(type, props, ...children) {
  return {
    type: type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createVirtualDOM(component) {
  if (typeof component === "string") {
    return createElement(component, {});
  }

  if (typeof component === "function") {
    // If component is a function component
    return createVirtualDOM(component());
  }

  const { type, props = {} } = component;
  const children = (props.children || []).map((child) =>
    createVirtualDOM(child)
  );

  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

// Example usage
function MyComponent(props) {
  return createElement(
    "div",
    {},
    createElement("h1", {}, "Hello, ", props && props.name, "!"),
    createElement("p", {}, "This is a sample component.")
  );
}

const myVirtualDOM = createVirtualDOM(MyComponent);
console.log(myVirtualDOM);
