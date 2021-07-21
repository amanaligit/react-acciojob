import React, { Component } from "react";
import ApiData from "./Components/ApiData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <main className="container" style={{ minHeight: "95vh" }}>
          <h1 className="display-1 text-center">LifeCycle API Example</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users/:pageNo" component={ApiData} />
            <Route path="/" component={NotFound} />
            {/* I want to make switches in-place  */}

            {/* <ApiData /> */}
            {/* <Home /> */}
            {/* <About /> */}
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}
