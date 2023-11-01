import React from "react";

function ProductBanner({ productBannerImage, title, description }) {
  return (
    <section
      className="mw-100 section-product-banner"
      style={{
        backgroundImage: `url(${productBannerImage})`
      }}
    >
      <div className="container">
        <div className="py-5 text-center text-white">
          <h1 className="mt-5 display-3 fw-bolder text-uppercase text-break">
            {title}
          </h1>
          <p className="mt-3 mb-5 text-break">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductBanner;
