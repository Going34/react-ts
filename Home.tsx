import './styles.css';
import NavBar from './page/NavBar';
import React from 'react';
import SideBar from './page/sideBar';
import HomeVideoPage from './page/HomeVideoPage';
export default function App() {
  return (
    <div className="App">
      <SideBar />
      <HomeVideoPage />
    </div>
  );
}
