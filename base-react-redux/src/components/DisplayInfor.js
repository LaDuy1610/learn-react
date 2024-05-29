import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };

  hadleShowHide() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  render() {
    const { listUsers } = this.props;
    //props => viết tắt của properties
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.hadleShowHide();
            }}
          >
            {this.state.isShow === true ? "Hide" : "Show"}
          </span>
        </div>

        {this.state.isShow && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <br></br>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
