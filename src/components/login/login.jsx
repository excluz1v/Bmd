import React from 'react';
import { reduxForm, Field } from 'redux-form';



let LoginForm = (props) => {
    console.log('rerender')
    return (
        <form onSubmit={props.handleSubmit} >
            <div><Field component={'input'} name='login' type="text" placeholder='login' /></div>
            <div><Field component={'input'} name='password' type="password" placeholder='password' /></div>
            <div><Field component={'input'} name='remember me' type="checkbox" /></div>Remember me
        <div><button>Submit</button></div>
        </form>
    )
}
let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const onSubmit2 = (formData) => {
    console.log(formData)
}
let Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit2} />

        </div>

    )
}

export default Login