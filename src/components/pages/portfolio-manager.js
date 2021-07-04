import React, {Component} from "react";
import axios from "axios";

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

class PortfolioManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    getPortfolioItems() {
        axios.get("https://haydenccarroll.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials:true})
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("Error in getPortfolioItems for portfolio-manager", error);
        });
    }


    handleSuccessfulFormSubmission(portfolioItem) {
        console.log("this printed")
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
    }

    handleFormSubmissionError(error) {
        console.log("There was an error submitting the form", error);
    }


    componentDidMount() {
        this.getPortfolioItems();
    }
    render() { 
        return ( 
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>
                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
         );
    }
}
 
export default PortfolioManager;