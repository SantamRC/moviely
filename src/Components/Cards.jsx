import React from "react";

function Cards({ image, title }) {
  return (
    <div>
      <div
        class="card"
        style={{ width: "20vw", float: "left", height: "45vw", margin: "2vw" }}
      >
        <img src={image} class="card-img-top" alt="Poster" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
