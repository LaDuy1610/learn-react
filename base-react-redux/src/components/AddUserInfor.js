import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Yuri",
//     address: "Ha Noi",
//     age: 23,
//   };

//   handleChangeName(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }

//   handleChangeAge(event) {
//     this.setState({
//       age: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
//         {this.state.age} year old
//         <form
//           onSubmit={(event) => {
//             this.handleSubmit(event);
//           }}
//         >
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => {
//               this.handleChangeName(event);
//             }}
//           ></input>

//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => {
//               this.handleChangeAge(event);
//             }}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("Yuri");
  const [age, setAge] = useState(23);
  const [address, setAddress] = useState("Ha Noi");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      My name is {name} and I'm from {address} and I'm {age} year old
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleChangeName(event)}
        ></input>

        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleChangeAge(event)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
