import React, {Component} from "react";
import axios from "axios";
class PortfolioForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            url: "",
            category: "",
            position: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post("https://jordan.devcamp.space/portfolio/portfolio_items",
            this.buildForm(),
            {withCredentials: true}
        ).then(response => {
            this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
        }).catch(error => {
            console.log("portfolio form handleSubmit error", error);
        });

        this.buildForm();
        event.preventDefault();
    }

    buildForm() {
        let formData = new FormData();
        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);


        return formData;

    }


    render() { 
        return (
            <div>
                <h1>Portfolio Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Portfolio Item Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <input 
                            type="text"
                            name="url"
                            placeholder="Url"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />  

                        <input 
                            type="text"
                            name="position"
                            placeholder="position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />  

                        <select 
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="">Select Category</option>
                            <option value="eCommerce">eCommerce</option>
                            <option value="Scheduling">Scheduling</option>
                            <option value="Enterprise">Enterprise</option>
                        </select>  

                        <textarea 
                            type="text"
                            name="description"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />  
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>

            </div>
        );
    }
}
 
export default PortfolioForm;