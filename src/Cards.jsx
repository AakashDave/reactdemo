import React from "react";

const Cards = (props) => {
  return (
    <div className="card m-5" style={{ width: "18rem" }}>
    <img className="card-img-top" src={props.imglink} alt="cards images"/>
      <div className="card-body">
        <h5 className="card-title">{props.my_title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Cards;
