import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <button type="button">Delete</button>
        <h3>First card</h3>
        <p>lorem ipsum</p>
      </div>
    );
  }
}

export default Card;
