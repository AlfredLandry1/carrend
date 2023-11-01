import React from "react";

function SortForm() {
  return (
    <>
      <div className="card shadow-sm border-0">
        <div className="card-body border-0">
          <div className="accordion border-0" id="sortBar">
            <div className="accordion-item border-0">
              <h4 className="accordion-header" id="price">
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePrice"
                  aria-expanded="true"
                  aria-controls="collapsePrice"
                >
                  Price
                </button>
              </h4>
              <div
                id="collapsePrice"
                className="accordion-collapse collapse show py-4"
                aria-labelledby="price"
                data-bs-parent="#sortBar"
              >
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10"
                  step="0.5"
                />
              </div>
            </div>

            <div className="accordion-item border-0">
              <h4 className="accordion-header" id="brand">
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseBrand"
                  aria-expanded="true"
                  aria-controls="collapseBrand"
                >
                  Brand
                </button>
              </h4>
              <div
                id="collapseBrand"
                className="accordion-collapse collapse show py-4"
                aria-labelledby="brand"
                data-bs-parent="#sortBar"
              >
                <div className="d-flex flex-wrap gap-3 align-items-center px-3">
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="vagen"
                    />
                    <label className="form-check-label" htmlFor="vagen">
                      Vont Va Gen
                    </label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="lamborginhi"
                    />
                    <label className="form-check-label" htmlFor="lamborginhi">
                      Lamborginhi
                    </label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="ferrari"
                    />
                    <label className="form-check-label" htmlFor="ferrari">
                      Ferrari
                    </label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="renault"
                    />
                    <label className="form-check-label" htmlFor="renault">
                      Renault
                    </label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="toyota"
                    />
                    <label className="form-check-label" htmlFor="toyota">
                      Toyoya
                    </label>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="mercedes"
                    />
                    <label className="form-check-label" htmlFor="mercedes">
                      Mercedes
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h4 className="accordion-header" id="color">
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseColor"
                  aria-expanded="true"
                  aria-controls="collapseColor"
                >
                  Color
                </button>
              </h4>
              <div
                id="collapseColor"
                className="accordion-collapse collapse show py-4"
                aria-labelledby="color"
                data-bs-parent="#sortBar"
              >
                <div className="d-flex flex-wrap align-items-center px-3 gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="color"
                      className="form-check-input"
                      id="blue"
                    />
                    <label className="form-check-label" htmlFor="blue">
                      Blue
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="color"
                      className="form-check-input"
                      id="red"
                    />
                    <label className="form-check-label" htmlFor="red">
                      Red
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="color"
                      className="form-check-input"
                      id="yellow"
                    />
                    <label className="form-check-label" htmlFor="yellow">
                      Yellow
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="color"
                      className="form-check-input"
                      id="black"
                    />
                    <label className="form-check-label" htmlFor="black">
                      Black
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="color"
                      className="form-check-input"
                      id="gold"
                    />
                    <label className="form-check-label" htmlFor="gold">
                      Gold
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h4 className="accordion-header" id="engine">
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEngine"
                  aria-expanded="true"
                  aria-controls="collapseEngine"
                >
                  Type of engine
                </button>
              </h4>
              <div
                id="collapseEngine"
                className="accordion-collapse collapse show py-4"
                aria-labelledby="engine"
                data-bs-parent="#sortBar"
              >
                <div className="d-flex flex-wrap align-items-center px-3 gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="engine"
                      className="form-check-input"
                      id="electronical"
                    />
                    <label className="form-check-label" htmlFor="electronical">
                      Electronical engine
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="engine"
                      className="form-check-input"
                      id="combustion"
                    />
                    <label className="form-check-label" htmlFor="combustion">
                      Combustion motor
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h4 className="accordion-header" id="places">
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePlaces"
                  aria-expanded="true"
                  aria-controls="collapsePlaces"
                >
                  Numbers of places
                </button>
              </h4>
              <div
                id="collapsePlaces"
                className="accordion-collapse collapse show py-4"
                aria-labelledby="places"
                data-bs-parent="#sortBar"
              >
                <div className="d-flex flex-wrap align-items-center px-3 gap-3">
                  <div className="form-check">
                    <input
                      type="radio"
                      name="places"
                      className="form-check-input"
                      id="2"
                    />
                    <label className="form-check-label" htmlFor="2">
                      02 places
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      name="places"
                      className="form-check-input"
                      id="4"
                    />
                    <label className="form-check-label" htmlFor="4">
                      04 places
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortForm;
