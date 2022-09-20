"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, catCount: 1 };
  }
  intervalId = null;
  componentDidMount() {
    this.intervelId = setInterval(() => {
      this.setState({
        catCount: ((this.state.catCount + 1) % 3) + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    intervalId && clearInterval(intervalId);
  }
  render() {
    return e("div", {}, [
      e("img", { src: "../assets/fish.jpg" }),
      e("img", {
        src: "../assets/loves.gif",
        style: { width: 100, height: 100 },
      }),
      e("img", { src: `../assets/cat${this.state.catCount}.jpg` }),
    ]);
  }
}

const domContainer = document.querySelector("#like_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
