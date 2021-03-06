import React, {Component} from "react";

import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/login.jpg";

class Auth extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);

    }


    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push("/"); // navigates them to home page
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }
    render() { 
        return (
            <div className="auth-page-wrapper">
                <div className="left-column" 
                    style={{backgroundImage: `url(${loginImg})`}}
                />

                <div className="right-column">
                    <Login 
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}
 
export default Auth;