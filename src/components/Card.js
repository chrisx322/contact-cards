import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

//the card module compined with the Avatar and Info props
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} alt={props.alt} />
      </div>
      <Info tel={props.tel} email={props.email} />
    </div>
  );
}

export default Card;
