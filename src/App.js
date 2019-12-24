import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HeaderContainer from './components/header/Header-container';
import Navbar from './components/navbar/Navbar';
import ProfileAPI from './components/profile/ProfileAPI';
import SideBar from './components/SideBar'
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import { SettingsContainer } from './components/Settings/Settings';
import { UserContainer } from './components/Users/UsersApi';
import Login from './components/login/login'

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper container'>
        <HeaderContainer />
        <div className='container row' id='nav'>
          <Navbar />
          <Route path='/Profile/:UserId?' render={() => <ProfileAPI />} />
          <Route path='/Dialogs' render={() => <Dialogs  />} />
          <Route path='/Friends' render={() => <Friends />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <SettingsContainer />} />
          <Route path='/users' render={() => <UserContainer />} />
          <Route path='/login' render={() => <Login />} />
          <SideBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
