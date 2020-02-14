import React from "react";
import { reduxForm, Field } from "redux-form";
import { InputLogin } from "../common/formTypes";
import {
  required,
  maxLengthCreator
} from "../../Utilits/Validators/Validators";
import { connect } from "react-redux";
import { AuthLoginThunk } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "../common/formTypes.module.css";

let maxLenght25 = maxLengthCreator(25);

let LoginForm = props => {
  return (
    <div className="col-9">
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={InputLogin}
            validate={[required, maxLenght25]}
            name="email"
            type="text"
            placeholder="email"
            className={s.input}
          />
        </div>
        <div>
          <Field
            component={InputLogin}
            validate={[required, maxLenght25]}
            name="password"
            type="password"
            placeholder="password"
            className={s.input}
          />
        </div>
        {props.error ? (
          <div className={`${s.formError}`}>{props.error}</div>
        ) : (
          undefined
        )}
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let Login = props => {
  const onSubmit2 = formData => {
    props.AuthLoginThunk(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div
      className="col-9"
      style={{ justifyContent: "center", display: "flex" }}
    >
      <h2 style={{ marginRight: "1rem" }}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit2} />
    </div>
  );
};

let matStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(matStateToProps, { AuthLoginThunk })(Login);
