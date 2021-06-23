import React, { Component } from 'react';
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";

export default class App extends Component {


    render() {
    {console.log("Does this display");}

        return (
            <div className='app'>
                <h1>Hayden Carroll Portfolio</h1>

                <Router>
                    <div>
                        <NavigationContainer />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about-me" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/portfolio/:slug" component={PortfolioDetail} />
                        </Switch>
                    </div>
                </Router>

                <div>
                    {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </div>
              
          </div>
      );
    }
}
