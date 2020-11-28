import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Wrapper from "./components/Wrapper";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      </Wrapper>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
