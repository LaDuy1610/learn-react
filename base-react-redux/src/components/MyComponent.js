import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [
        { id: 1, name: "Yuri", age: 10 },
        { id: 2, name: "Duy", age: 20 },
        { id: 3, name: "Yudal", age: 30 },
      ],
    };
  }

  handleAddNewUser = (user) => {
    this.setState({
      listUsers: [user, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  //JSX
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
          <br></br>
          <br></br>
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          ></DisplayInfor>
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
