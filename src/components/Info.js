import React from "react";

//the info for the card module
function Info(props) {
  return (
    <div className="bottom">
      <p className="info">{props.tel}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Info;
