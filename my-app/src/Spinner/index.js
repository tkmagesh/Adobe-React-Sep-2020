import React, { Component } from 'react';

class Spinner extends Component {
  state = {
    delta: 0
  };

  onUpClick = () => {
    const { delta } = this.state;
    const up_action = this.props.up(delta);
    this.props.dispatch(up_action);
  };
  onDownClick = () => {
    const { delta } = this.state;
    const down_action = this.props.down(delta);
    this.props.dispatch(down_action);
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <h3>Spinnner</h3>
        <hr />
        <label>Delta : </label>
        <input
          type="number"
          value={this.state.delta}
          onChange={evt =>
            this.setState({ delta: parseInt(evt.target.value) || 0 })
          }
        />
        <br />
        <input type="button" value="Down" onClick={this.onDownClick} />
        <span> [ {value} ] </span>
        <input type="button" value="Up" onClick={this.onUpClick} />
      </div>
    );
  }
}

export default Spinner;