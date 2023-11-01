import React from "react";

function Newsletter({ newsletterCar, newsletterMap }) {
  return (
    <div className="container py-5">
      <h1 className="text-white display-4 fw-bolder mb-5">Newsletter</h1>
      <div className="row bg-light rounded-4 p-3">
        <div className="col-lg-5 d-flex gap-2">
          <div className="col-md-6">
            <img src={newsletterCar} alt="Muscle car" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img
              src={newsletterMap}
              alt="Office position map"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2
            className="text-black text-truncate"
            title="Most popular products"
          >
            Subscribe to newsletter to see what's new
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
