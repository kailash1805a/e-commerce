/**
 * Main company application module handle all templates
 * Author: Kailash kumar
 */
import React, { Component } from 'react';
// import Header from './common/Header';
import LoginPage from '../components/user/LoginPage';
import HomePage from '../components/dashboard/HomePage';
import { connect } from 'react-redux';

// import { bindActionCreators } from 'redux';
// import {authenticate} from '../actions/UserActions';

class App extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {this.props.isUserLoggedIn ? <HomePage /> : <LoginPage />}
            </div>
        );
    }
}

// App.propTypes = {
//      children: PropTypes.object.isRequired
// };

//Connecting a React component to the Redux store

function mapStateToProps(state, ownProps) {
    return {
        isUserLoggedIn: state.userReducer.isLoggedIn,

    };
}
//to bind action creators
function mapDispatchToProps(dispatch) {
    return {

    };
}
//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);