import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";

function SortForm() {
  const carBrands = [
    { id: 1, value: "Vont Va Gen" },
    { id: 2, value: "Lamborginhi" },
    { id: 3, value: "Ferrari" },
    { id: 4, value: "Renault" },
    { id: 5, value: "Toyota" },
    { id: 6, value: "Mercedes" },
  ];

  const carColors = [
    { id: "blue", value: "Blue" },
    { id: "yellow", value: "Yellow" },
    { id: "black", value: "Black" },
    { id: "gold", value: "Gold" },
  ];

  const initialValues = {
    price: 100000000,
    brand: "Toyota",
    color: "Blue",
    engine: "Electrical",
    places: "04",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    console.log(formValues);
    onSubmittingProps.resetForm();
  }

  return (
    <>
      <div className="card shadow-sm border-0">
        <div className="card-body border-0">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(formik) => (
              <Form>
                <div className="accordion border-0" id="sortBar">
                  <div className="accordion-item border-0">
                    <h4 className="accordion-header" id="price">
                      <button
                        className="accordion-button text-black border-0 bg-transparent"
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
                      <Field
                        type="range"
                        id="price"
                        name="price"
                        className="form-range"
                        min="300000"
                        max="6000000000"
                        step="500"
                      />
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h4 className="accordion-header" id="brand">
                      <button
                        className="accordion-button text-black border-0 bg-transparent"
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
                        {carBrands.map((brand) => (
                          <div className="mb-3 form-check">
                            <Field
                              type="radio"
                              id={brand.id}
                              name="brand"
                              value={brand.value}
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor={brand.id}
                            >
                              {brand.value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h4 className="accordion-header" id="color">
                      <button
                        className="accordion-button text-black border-0 bg-transparent"
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
                        {carColors.map((color) => (
                          <div className="form-check">
                            <Field
                              type="radio"
                              id={color.id}
                              name="color"
                              value={color.value}
                              className="form-check-input"
                            />
                            <label
                              className="form-check-label"
                              htmlFor={color.id}
                            >
                              {color.value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h4 className="accordion-header" id="engine">
                      <button
                        className="accordion-button text-black border-0 bg-transparent"
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
                          <Field
                            type="radio"
                            id="electrical"
                            name="engine"
                            value="Electrical"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="electrical"
                          >
                            Electrical engine
                          </label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="combustion"
                            name="engine"
                            value="Combustion"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="combustion"
                          >
                            Combustion motor
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h4 className="accordion-header" id="places">
                      <button
                        className="accordion-button text-black border-0 bg-transparent"
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
                          <Field
                            type="radio"
                            id="2"
                            name="places"
                            value="02"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="2">
                            02 places
                          </label>
                        </div>
                        <div className="form-check">
                          <Field
                            type="radio"
                            id="4"
                            name="places"
                            value="04"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="4">
                            04 places
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="col-md-2 col-lg-4 fs-5 fw-normal mt-4 btn bg-black text-white"
                  >
                    <span className="bi bi-arrow-clockwise"></span> Sort
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default SortForm;
