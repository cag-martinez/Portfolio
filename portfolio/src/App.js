import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Projects" component={Projects} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
