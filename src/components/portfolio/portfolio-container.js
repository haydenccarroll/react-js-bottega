import React, { Component } from "react";

import PortfolioItem from "./portfolio-item.js";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered.");
        this.state = {
            pageTitle: "Welcome to my portfolio",

            data: [
                {title: "Quip", category: "ecommerce"},
                {title: "Eventbrite", category: "scheduling"},
                {title: "Ministry Safe", category: "ecommerce"},
                {title: "SomethingNew", category: "enterprise"}
            ],

            isLoading: false
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title}/>;
        });
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                    return item.category === filter;
                }
            )
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    loading...
                </div>);
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handleFilter("ecommerce")}>eCommerce</button>
                <button onClick={() => this.handleFilter("scheduling")}>Scheduling</button>
                <button onClick={() => this.handleFilter("enterprise")}>Enterprise</button>
                {this.portfolioItems()}
                
            </div>
        );
    }


}