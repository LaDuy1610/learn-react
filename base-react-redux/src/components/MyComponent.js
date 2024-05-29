import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Yuri", age: 10 },
      { id: 2, name: "Duy", age: 20 },
      { id: 3, name: "Yudal", age: 30 },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br></br>
        <br></br>
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
