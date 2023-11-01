import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Enter your first name")
    .min(4, "Your first name may be have 04 minimum characters")
    .max(30, "You have the limit of characters number"),
  lastName: Yup.string()
    .required("Enter your last name")
    .min(4, "Your last name may be have 04 minimum characters")
    .max(30, "You have the limit of characters number"),
  email: Yup.string()
    .required("Enter your vaalid email address")
    .email("Please enter a valid email address"),
});

function Newsletter({ newsletterCar, newsletterMap }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  function handleSubmit(formValues, onSubmittingProps) {
    console.log(formValues);
    onSubmittingProps.resetForm();
  }

  return (
    <div className="container py-5">
      <h1 className="text-white display-4 fw-bolder mb-5">Newsletter</h1>
      <div className="row d-flex bg-light rounded-4 p-3">
        <div className="col-md-12 col-lg-5 d-flex gap-2 h-100">
          <div className="col-md-6">
            <img src={newsletterCar} alt="Muscle car" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img
              src={newsletterMap}
              alt="Office position map"
              className="img-fluid h-100"
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-6 h-100 mt-4 mt-lg-0">
          <h2
            className="text-black text-truncate"
            title="Most popular products"
          >
            Subscribe to newsletter to see what's new
          </h2>
          <div className="">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="row g-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="firstName"
                      className="form-label fw-medium text-dark"
                    >
                      Nom
                    </label>
                    <Field
                      id="firstName"
                      type="text"
                      name="firstName"
                      maxLength="30"
                      spellCheck
                      placeholder="Ex: Doe"
                      className={`form-control border-0 rounded-2 border-bottom bg-white ${
                        formik.errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      className="invalid-feedback text-danger"
                      name="firstName"
                      component="span"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="lastName"
                      className="form-label fw-medium text-dark"
                    >
                      P&eacute;nom
                    </label>
                    <Field
                      id="lastName"
                      type="text"
                      name="lastName"
                      maxLength="30"
                      spellCheck
                      placeholder="Ex: Landry"
                      className={`form-control border-0 rounded-2 border-bottom bg-white ${
                        formik.errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      className="invalid-feedback text-danger"
                      name="lastName"
                      component="span"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="email"
                      className="form-label fw-medium text-dark"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      spellCheck
                      placeholder="Ex: landry@gmail.com"
                      className={`form-control border-0 rounded-2 border-bottom bg-white  ${
                        formik.errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      className="invalid-feedback text-danger"
                      name="email"
                      component="span"
                    />
                  </div>
                  <motion.button
                  whileHover={{scale: 0.9}}
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="col-md-3 fs-5 fw-normal btn bg-black py-2 text-white"
                  >
                    <span className="bi bi-person-plus"></span> Sing in
                  </motion.button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
