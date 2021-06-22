import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container";


export default class App extends Component {


    render() {
    {console.log("Does this display");}

      return (
          <div className='app'>
              <h1>Hayden Carroll Portfolio</h1>
              <div>
                  {moment().format("MMMM Do YYYY, h:mm:ss a")}
              </div>
              <PortfolioContainer />
              
          </div>
      );
    }
}
