import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = event => {
    event.preventDefault();
    let inputText = this.myInput.value.value;
    console.log(inputText);
    this.props.history.push(`/store/${inputText}`);
  };
  // Determines what goes on the page
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2> Please Enter A Store </h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
