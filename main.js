import React from "./src/React.js";
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
            console.log("Timer => ", this);
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
  const timer = React.createElement(Timer, {});
  const root = document.getElementById("root");

  ReactDom.render(root, timer);
};

main();
