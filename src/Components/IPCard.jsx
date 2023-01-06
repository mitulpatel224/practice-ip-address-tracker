import React from "react";

function IPCard(props) {
  const { label, children } = props;
  return (
    <div className="card-content">
      <h6 className="card-label">{label}</h6>
      <span className="card-detail">{children}</span>
    </div>
  );
}

export default IPCard;
