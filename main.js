import React from "./src/my-own-react.js";
import ReactDom from "./src/react-dom.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const heading = React.createElement("h1", {}, "Timer");
    const button = React.createElement(
      "button",
      {
        onClick: () => {
          this.setState(({ count }) => {
            return { count: count + 1 };
          });
        },
      },
      `Clicked ${this.state.count} times`
    );

    const div = React.createElement("div", {}, [heading, button]);

    return div;
  }
}

const main = () => {
  const timer1 = React.createElement(Timer, {});
  const timer2 = React.createElement(Timer, {});
  const div = React.createElement("div", {}, [timer1, timer2]);

  const root = document.getElementById("root");

  ReactDom.render(root, div);
};

main();
