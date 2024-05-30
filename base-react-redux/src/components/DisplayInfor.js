import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   state = {
//     isShow: true,
//   };

//   hadleShowHide() {
//     this.setState({
//       isShow: !this.state.isShow,
//     });
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       document.title = "Halo";
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (this.props.listUsers !== prevProps.listUsers) {
//       if (this.props.listUsers.length === 5) {
//         alert("you got 5 users");
//       }
//     }
//   }

//   render() {
//     const { listUsers } = this.props;
//     //props => viết tắt của properties
//     return (
//       <div className="display-infor-container">
//         <img src={logo}></img>
//         <div>
//           <span
//             onClick={() => {
//               this.hadleShowHide();
//             }}
//           >
//             {this.state.isShow === true ? "Hide" : "Show"}
//           </span>
//         </div>

//         {this.state.isShow && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={user.age > 18 ? "red" : "green"}>
//                   <div>
//                     <div>My name is {user.name}</div>
//                     <div>My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <br></br>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShow, setShowHide] = useState(true);
  const hadleShowHide = () => {
    setShowHide(!isShow);
  };

  return (
    <div className="display-infor-container">
      {/* <img src={logo}></img> */}
      <div>
        <span onClick={() => hadleShowHide()}>
          {isShow === true ? "Hide" : "Show"}
        </span>
      </div>

      {isShow && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                <div>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <br></br>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
