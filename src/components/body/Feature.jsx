import React from "react";

function Feature({ regular, title, description }) {
  return (
    <div className="col-12 col-sm-6 col-md-5 col-lg-3">
      <div className="card h-100 border-0">
        <div className="p-5 car-body bg-transparent">
          <img
            src={regular}
            loading="lazy"
            alt="regular cars"
            className="img-fluid"
          />
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
