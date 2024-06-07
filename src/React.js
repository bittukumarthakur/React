import ReactDom from "./react-dom";

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.instance = null;
  }

  setState(fn) {
    this.state = fn(this.state);
    const { rootElement, reactElement } = ReactDom.render.context;
    ReactDom.render(rootElement, reactElement);
  }

  render() {}
}

const updateInstance = (instance) => {};

const createElement = (type, props, children) => {
  return { type, props, children };
};

export default {
  createElement,
  Component,
};
