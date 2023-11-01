import React from "react";

/**
 *
 * @param {string} globalBg - is the bootstrap class for bg for the global element
 * @param {string} cardBg - is the bootstrap class for bg for the card element
 * @param {string} textColor - is the bootstrap class for the text color for the card element
 * @param {string} firstIconName - is the bootstrap class for the first icon for the first card element
 * @param {string} firstTitle - is the title of the first card element
 * @param {string} firstTitle - is the description of the first card element
 * @param {string} secondIconName - is the bootstrap class for the first icon for the first card element
 * @param {string} secondTitle - is the title of the first card element
 * @param {string} secondText - is the description of the first card element
 *
 * @returns a jsx element for the features presentation
 */

function FearturesPresentation({
  globalBg,
  cardBg,
  textColor,
  firstIconName,
  firstTitle,
  firstText,
  secondIconName,
  secondTitle,
  secondText,
}) {
  return (
    <section className={`${globalBg}`}>
      <div className="container me-pt-5">
        <div className="row g-1">
          <div className="col-12 col-md-1"></div>
          <div className={`${cardBg} rounded-top-5 p-5 col-lg-4`}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center py-5 ${textColor}`}
            >
              <span className={`display-2 fw-bold ${firstIconName}`}></span>
              <h4 className="fw-bold text-center text-uppercase mt-3 mt-md-5">
                {firstTitle}
              </h4>
              <p className="text-center mt-2 mt-md-3">{firstText}</p>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className={`${cardBg} rounded-top-5 p-5 col-lg-4`}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center py-5 ${textColor}`}
            >
              <span className={`display-2 fw-bold ${secondIconName}`}></span>
              <h4 className="fw-bold text-center text-uppercase mt-3 mt-md-5">
                {secondTitle}
              </h4>
              <p className="text-center mt-2 mt-md-3">{secondText}</p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </section>
  );
}

export default FearturesPresentation;
