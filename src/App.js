// React
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Background from "./components/Background/Background"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header";
// Routes
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import LED_Matrix from "./components/pages/blog_pages/LED_Matrix/LED_Matrix";


function App() {
  return (
    <div >
      <Background>
        <Container>
          <Router>
            <div>
              <Header />
              <div className="content_div">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/led-matrix" component={LED_Matrix} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </div>
            </div>
          </Router>
        </Container>
      </Background>
    </div>
  );
}

export default App;
