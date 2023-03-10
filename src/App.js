// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Separator from './components/Bars/Separator';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import Skill from './components/Skill/Skill';
import Hobbies from "./components/Hobbies/Hobbies";
import Education from './components/Education/Education';
import Educationtwo from "./components/Education/Educationtwo";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import WorkExperienceTwo from "./components/WorkExperience/WorkExperienceTwo";
import WorkExperienceComplet from "./components/WorkExperience/WorkExperienceComplet";
import ContactForm from "./components/Contact/Contact";

function App() {
  return (
    <div className="eader">
      <Header />
      <Menu />
      <Profile />
      <Skill />
      <Hobbies />
      <Education />
      <Educationtwo />
      <WorkExperience />
      <WorkExperienceTwo />
      <WorkExperienceComplet />
      <ContactForm />
      <Separator />
    </div>
  );
}

export default App;
