import Draggable from "react-draggable";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,

      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  // eventLogger(e: MouseEvent, data: Object) {
  //   console.log("Event: ", e);
  //   console.log("Data: ", data);
  // }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart() {
    console.log(this.state);
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div>
        <Draggable {...dragHandlers}>
          <div className="box" />
        </Draggable>
      </div>
    );
  }
}

export default App;
