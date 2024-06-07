import ReactDom from "./react-dom";

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this.instance = null;
  }

  setState(fn) {
    this.state = fn(this.state);
    const { rootElement, virtualDom } = ReactDom.render.context;
    ReactDom.updateRealDom(rootElement, virtualDom);
  }

  render() {}
}

const createElement = (type, props, children) => {
  return { type, props, children };
};

export default {
  createElement,
  Component,
};
