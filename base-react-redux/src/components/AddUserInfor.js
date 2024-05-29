import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "Yuri",
    address: "Ha Noi",
    age: 23,
  };

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
        {this.state.age} year old
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleChangeName(event);
            }}
          ></input>

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleChangeAge(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
