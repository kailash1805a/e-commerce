/**
 * Main company application module handle all templates
 * Author: Kailash kumar
 */
import React, { PropTypes } from 'react';
// import Header from './common/Header';
import { connect } from 'react-redux';
import LoginPage from '../components/user/LoginPage';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/UserActions';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
     children: PropTypes.object.isRequired
};

//Connecting a React component to the Redux store
export default App;