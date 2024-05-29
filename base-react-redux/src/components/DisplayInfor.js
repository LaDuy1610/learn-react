import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { age, name } = this.props;
    //props => viết tắt của properties
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
