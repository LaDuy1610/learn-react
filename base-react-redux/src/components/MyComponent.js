import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br></br>
        <br></br>
        <DisplayInfor name="Duy" age="32"></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
