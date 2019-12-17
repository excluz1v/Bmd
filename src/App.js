import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { ProfileContainer } from './components/profile/Profile-container';
import SideBar from './components/SideBar'
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users'


function App(props) {


  return (
    <BrowserRouter>
      <div className='app-wrapper container'>
        <Header />
        <div className='container row' id='nav'>
          <Navbar />
          <Route path='/profile' render={() => <ProfileContainer profile={props.store.getState().profile} />} />
          <Route path='/Dialogs' render={() => <Dialogs post={props.store.getState().history} />} />
          <Route path='/Friends' render={() => <Friends />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/users' render={() => <Users />} />
          <SideBar />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
