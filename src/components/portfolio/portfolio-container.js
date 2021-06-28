import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item.js";


export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container has rendered.");
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [],
            isLoading: false
        };

        this.handleFilter = this.handleFilter.bind(this);


    }

    getPortfolioItems() {
        console.log("Something got printed");
        const axios = require('axios');

        // Make a request for a user with a given ID
        axios.get("https://jordan.devcamp.space/portfolio/portfolio_items")
        .then(response => {
            // handle success
            // console.log(response); // PRINTS THE JSON from the GET call
            this.setState({
                data: response.data.portfolio_items
            })
        })
        .catch( error => {
            // handle error
            console.log(error);
        });
    }

    portfolioItems() {
        // data that we will need
        /*
            background image - thumb-image-url
            logo
            description
            id

        */
        return this.state.data.map(item => {
            return (
                <PortfolioItem key={item.id} item={item}/>
            );
        });
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                    console.log(item.category);
                    return item.category === filter;
                }
            )
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    loading...
    
                </div>);
        }
        return (

            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
                <button className="btn" onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
                <button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>

                {this.portfolioItems()}

            </div>

        );
    }


}