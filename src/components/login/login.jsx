import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { InputLogin } from '../common/formTypes';
import { required, maxLengthCreator } from '../../Utilits/Validators/Validators'
import { connect } from 'react-redux'
import { AuthLoginThunk } from '../../Redux/auth-reducer'

let maxLenght25 = maxLengthCreator(25)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field component={InputLogin} validate={[required, maxLenght25]} name='email' type="text" placeholder='email' /></div>
            <div><Field component={InputLogin} validate={[required, maxLenght25]} name='password' type="password" placeholder='password' /></div>
            <div><Field component={'input'} name='rememberMe' type="checkbox" /></div>Remember me
        <div><button>Submit</button></div>
        </form>
    )
}
let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

let Login = (props) => {

    const onSubmit2 = (formData) => {
        console.log(formData.email,formData.password,formData.rememberMe)
        props.AuthLoginThunk(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit2} />
        </div>

    )
}

export default connect(null, { AuthLoginThunk })(Login)