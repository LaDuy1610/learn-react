import ModalCreateUser from "./ModalCreateUser";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div>
          <button>Add new Users</button>
        </div>
        <div>
          table users <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;