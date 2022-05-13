import React, { useState } from "react";

function Modal() {
  const [lists, setLists] = useState([]);
  const [name, setName] = useState("");

  const addNewList = (event) => {
    event.preventDefault();
    setLists((old) => [...old, { Name: name, Movies: [] }]);
    setName("");
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add to List
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {lists &&
              lists.map((item) => (
                <React.Fragment>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="option"
                    value="something"
                    style={{ float: "left" }}
                  />
                  <h2 style={{ textAlign: "left", marginLeft: "2rem" }}>
                    {item.Name}
                  </h2>
                </React.Fragment>
              ))}
            <form onSubmit={(e) => addNewList(e)} style={{ display: "flex" }}>
              <input
                class="form-control"
                type="text"
                value={name}
                placeholder="Add New List"
                aria-label=".form-control-lg example"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit">
                <i
                  class="bi bi-plus-circle-fill"
                  style={{ fontSize: "2rem", marginLeft: "2rem" }}
                ></i>
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
