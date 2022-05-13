import React from "react";
import Modal from "./Modal";

function Cards({ image, title }) {
  return (
    <div>
      <div
        className="card"
        style={{ width: "20vw", float: "left", height: "45vw", margin: "2vw" }}
      >
        <img src={image} className="card-img-top" alt="Poster" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add to List
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default Cards;
