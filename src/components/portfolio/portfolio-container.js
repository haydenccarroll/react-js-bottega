import React, { Component } from "react";

import PortfolioItem from "./portfolio-item.js";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered.");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip", category: "ecommerce", slug: "quip"},
                {title: "Eventbrite", category: "scheduling", slug: "eventbrite"},
                {title: "Ministry Safe", category: "ecommerce", slug: "ministry-safe"},
                {title: "SomethingNew", category: "enterprise", slug: "something-new"}
            ],

            isLoading: false
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/>;
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