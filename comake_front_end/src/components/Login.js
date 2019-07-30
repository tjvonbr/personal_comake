import React from 'react'
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from "yup";
import axios from 'axios';
// import {Redirect} from 'react-router-dom';

function Login( {touched, errors, history, message}) {

    return (
        <div>

         <h4>{message}</h4>
            <p>Login</p>

            <Form className="form">
      <div className="form-group">
        <label className="label">Email:</label>
        <Field
          className="input"
          name="email"
          type="text"
          autoComplete="off"
        />
        <p>{touched.email && errors.email}</p>
      </div>
      <div className="form-group">
        <label className="label">Password:</label>
        <Field
          className="input"
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button type="submit" className="btn">Log In </button>
      <button className="btn" onClick={()=> history.push('/register')}>Register </button>
    </Form>
        </div>
    )
}

export default withFormik({

    mapPropsToValues() {
      return {
        email: "",
        password: ""

      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        // .min(6)
        .required()
    }),
    handleSubmit(values, formikBag) {
      console.log(values)
      const url =
        "https://co-make.herokuapp.com/auth/login";
      axios
        .post(url, values)
        .then( res => {

          formikBag.props.setMessage('')
          console.log("Success!", res)
          formikBag.props.setToken(res.data.token)
          formikBag.props.setLocalId(res.data.id)
          formikBag.props.history.push("/");
        })

        .catch(err => {
          console.log(err);
        });
    }
  })(Login);