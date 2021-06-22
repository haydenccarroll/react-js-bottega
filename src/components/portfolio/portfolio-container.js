import React, { Component } from "react";

import PortfolioItem from "./portfolio-item.js";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered.");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip"},
                {title: "Eventbrite"},
                {title: "Ministry Safe"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title}/>;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "something Else"
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }


}