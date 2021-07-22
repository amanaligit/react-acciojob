import React, { Component } from "react";
import ApiData from "./Components/ApiData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className="container" style={{ minHeight: "95vh" }}>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/users/:pageNo" component={ApiData} />
            <Route exact path="/home" component={Home} />
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
