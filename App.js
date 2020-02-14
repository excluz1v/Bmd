import React, { lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderContainer from './components/header/Header-container';
import Navbar from './components/navbar/Navbar';
import ProfileAPI from './components/profile/ProfileAPI';
import { Route } from 'react-router-dom';
import { UserContainer } from './components/Users/UsersApi';
import Login from './components/login/login'
import { connect } from 'react-redux';
import { authUserData } from './Redux/app-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { WithSuspence } from './hoc/WithSuspence'
import Helper from './components/helper/helper';

const DialogContainer = lazy(() => import('./components/Dialogs/Dialogs'));


class App extends React.Component {
  componentDidMount() {
    this.props.authUserData()
  }
  render() {

    return (
      <div className='app-wrapper container-fluid'>
        <HeaderContainer />
        <div className='container-fluid row' >
          <Navbar />
          <Route path='/Profile/:UserId?' render={() => <ProfileAPI />} />
          <Route path='/Dialogs' render={
            WithSuspence(DialogContainer)
          } />
          <Route path='/users' render={() => <UserContainer />} />
          <Route path='/login' render={() => <div className='col-9'>
            <div className='container-fluid row'> <Login /> <Helper /> </div>
          </div>} />

        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialize: state.appred.initialize
  }
}

export default compose(withRouter, (connect(mapStateToProps, { authUserData })))(App);
