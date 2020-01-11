import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderContainer from './components/header/Header-container';
import Navbar from './components/navbar/Navbar';
import ProfileAPI from './components/profile/ProfileAPI';
import SideBar from './components/SideBar'
import { Route } from 'react-router-dom';
// import { DialogsContainer } from './components/Dialogs/Dialogs'
// import Friends from './components/friends/Friends';
// import { NewsContainer } from './components/News/News';
import { MusicContainer } from './components/Music/Music';
import { SettingsContainer } from './components/Settings/Settings';
import { UserContainer } from './components/Users/UsersApi';
import Login from './components/login/login'
import { connect } from 'react-redux';
import { authUserData } from './Redux/app-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/Preloader'
import { WithSuspence } from './hoc/WithSuspence'

const NewsContainer = lazy(() => import('./components/News/News'));
const DialogContainer = lazy(() => import('./components/Dialogs/Dialogs'));


class App extends React.Component {
  componentDidMount() {
    this.props.authUserData()

  }
  render() {
    if (!this.props.initialize) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper container'>
        <HeaderContainer />
        <div className='container row' id='nav'>
          <Navbar />
          <Route path='/Profile/:UserId?' render={() => <ProfileAPI />} />
          <Route path='/Dialogs' render={
            WithSuspence(DialogContainer)
          } />
          <Route path='/News' render={WithSuspence(NewsContainer)
          } />
          <Route path='/Music' render={() => <MusicContainer />} />
          <Route path='/Settings' render={() => <SettingsContainer />} />
          <Route path='/users' render={() => <UserContainer />} />
          <Route path='/login' render={() => <Login />} />
          <SideBar />
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
