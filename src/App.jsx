import React from 'react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import HorizontalMenu from './components/HorizontalMenu/HorizontalMenu';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <HorizontalMenu />
      <Home />
    </div>
  )
}

export default App;