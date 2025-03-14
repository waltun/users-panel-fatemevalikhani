import React, { useState } from "react";

function AddUser({ setUsers, showModal, setShowModal }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  });

  const changeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    setUsers((prevState) => {
      return [...prevState, user];
    });

    setShowModal(false);
  };

  return (
    <div className="row mx-0 my-2 px-2 justify-content-end">
      <button
        className="btn btn-primary col-md-2"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => setShowModal(true)}
      >
        add
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <form className="modal-content" onSubmit={addUserHandler}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {showModal ? (
                <div
                  className="needs-validation"
                  onSubmit={addUserHandler}
                  noValidate
                >
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={changeInput}
                        className="form-control"
                        id="validationCustom01"
                        placeholder="First name"
                        required
                      />
                      <div className="valid-feedback"></div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom02">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={changeInput}
                        className="form-control"
                        id="validationCustom02"
                        placeholder="Last name"
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustomUsername">Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          name="userName"
                          onChange={changeInput}
                          className="form-control"
                          id="validationCustomUsername"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={changeInput}
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
