import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import './container.css'


function Container() {
  return (
    <Router>
      <div className="container_div fade_in">
        <Header />
        <div className="content_div">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/blog" component={Blog} /> */}
          <Route exact path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default Container;
