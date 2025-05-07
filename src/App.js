import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import React from 'react';
import NavigateToExternalUrl from "./components/NavigateToExternalUrl"
import Home from "./home"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path ="/Neshama-app" element={<NavigateToExternalUrl url="https://neshama-app.vercel.app/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
