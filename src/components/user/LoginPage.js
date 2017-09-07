/**
 * Main company application module handle all templates
 * Author: Kailash kumar
 */
import React, { PropTypes } from 'react';
// import Header from './common/Header';
import { connect } from 'react-redux';
import LoginForm from './container/LoginForm';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/UserActions';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        };
        this.loginFormDetails = this.loginFormDetails.bind(this);
        this.loginFormSubmit = this.loginFormSubmit.bind(this);
        console.log(this.props)
    }
    /**
     * login form submit
     */
    loginFormDetails(event) {
        const userKey = event.target.name;
        const userValue = event.target.value;
        this.setState({
            [userKey]: userValue
        });
    }

    /**
     * Authenticate user with form submit
     */
    loginFormSubmit(event) {
        console.log(this.state);
        this.props.actions.authenticate(this.state.username, this.state.password);
        
    }
    componentWillMount(){
        const userDetails = this.props.user;
        if(userDetails != undefined && userDetails.ResponseCode == 200) {
            this.props.history.push("/dashboard");
            alert("login successfully!");
        }
    }

    render() {      

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <div className="account-wall align-center">
                            <h1>E-Commerce</h1>
                            <LoginForm formDetails={this.loginFormDetails} formSubmit={this.loginFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.array
};

//to subscribe to store updates
function mapStateToProps(state, ownProps) {
    return {
        user: state.userReducer
    };
}
//to bind action creators
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    };
}
//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);