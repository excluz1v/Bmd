import React from 'react';
import './news.css'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux';
import { connect } from 'react-redux';

let News = () => {
    return (

        <div className='content col-7'>
            <div className='NewsHead'>1111</div>
            <div className='NewsBody'>222</div>
            <div className='NewsFooter'>333</div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

let NewsContainer = compose(connect(mapStateToProps, {}), AuthRedirect)(News)

export {NewsContainer as default}