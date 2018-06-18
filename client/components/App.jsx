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
      <div className="backgroundImage">
        <img src="http://www.avso.org/wp-content/uploads/files/3/7/8/bedroom-wall-design-wall-decoration-behind-the-bed-0-378.jpg" />
        <div className="draggable">
          <Draggable {...dragHandlers}>
            <div className="box" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;
