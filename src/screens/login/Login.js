import axios from "axios";
import "./Login.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { Formik } from "formik";

function Login() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push({
        pathname: "/",
      });
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password too short";
    }

    return errors;
  };

  const submitForm = (values) => {
    axios({
      method: "POST",
      data: {
        email: values.email,
        password: values.password,
      },
      url: "http://challenge-react.alkemy.org",
    })
      .then((res) => localStorage.setItem("token", res.data.token))
      .then(() =>
        history.push({
          pathname: "/",
        })
      )
      .catch((error) => {
        swal("Login Failed.", "Try Again", "error");
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          } = formik;
          return (
            <div className="container login-container">
              <div className="row justify-content-center">
                <div className="col-md-6 login-form">
                  <h1>Sign in</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Write the Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      {errors.email && touched.email && (
                        <span className="error text-danger">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Write the Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.password && touched.password && (
                        <span className="error text-danger">
                          {errors.password}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btnSubmit btn btn-info">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default Login;