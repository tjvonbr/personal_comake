import React from 'react'
import { withFormik, Form, Field, setNestedObjectValues } from "formik";
import * as Yup from "yup";
import axios from 'axios';
// import {Redirect} from 'react-router-dom';

function Register({touched, errors, history }, ) {

    return (
        <div>
            <p>Register</p>

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
        <label className="label">Username:</label>
        <Field
          className="input"
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
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
      <div className="form-group">
        <label className="label">Zip Code:</label>
        <Field
          className="input"
          name="zipCode"
          type="zipCode"
          autoComplete="off"
        />
      </div>
      <p>{touched.zipCode && errors.zipCode}</p>
      <button type="submit" className="btn">Submit </button>
      <button className="btn" onClick={()=> history.push('/login')}> Log In </button>
    </Form>
        </div>
    )
}

export default withFormik({

    mapPropsToValues() {
      return {
        email: "",
        username: "",
        password: "",
        zipCode: ""

      };
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string()
        .required(),
      password: Yup.string()
        // .min(6)
        .required(),
       zipCode: Yup.number()
        // .min(6)
        .required("You Need a Zip Code to Register")
    }),
    handleSubmit(values, formikBag) {
      console.log(values)
      const url =
        "https://co-make.herokuapp.com/auth/register";
      axios
        .post(url, values)
        .then( res => {

          formikBag.props.setMessage("Successfully Registered!")

          formikBag.props.history.push("/login");
        console.log("Success!", res)
        })

        .catch(err => {
          console.log("Error", err);
        });
    }
  })(Register);