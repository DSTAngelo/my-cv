// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Separator from './components/Bars/Separator';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
/* import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import References from './components/References' */

function App() {
  return (
    <div className="eader">
      <Header />
      <Menu />
      <Profile />
      <Separator />
    </div>
  );
}

export default App;
