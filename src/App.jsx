import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav'
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Skill/>
      <Contacts/>
      <Footer/>
 
    </>
  )
}

export default App
