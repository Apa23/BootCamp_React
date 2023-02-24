import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { Card } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import "../../styles/loginPage.css";

export const LoginPage = () => {
  const form = useRef();

  const formValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login-form">
      <Card
        actions={[
          <button
            type="submit"
            onClick={() => {
              form.current.submitForm();
              console.log(
                "🚀 ~ file: LoginPage.jsx:16 ~ LoginPage ~ form:",
                form.current.values.email,
                "-",
                form.current.values.password
              );
            }}
          >
            Login
          </button>,
          <div className="form-footer">
            <div id="remember-me-field">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>,
        ]}
      >
        <div className="login-form-header">
          <span>Have an acount?</span>
          <h1>Login</h1>
        </div>

        <Formik innerRef={form} initialValues={formValues} onSubmit={() => {}}>
          <Form>
            <div className="form-group" id="email-field">
              <Field name="email" type="email" placeholder="Email" />
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="form-group" id="password-field">
              <Field name="password" type="password" placeholder="Password" />
              <FontAwesomeIcon icon={faKey} />
            </div>
          </Form>
        </Formik>
      </Card>
    </div>
  );
};
