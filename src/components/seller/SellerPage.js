/**
 * Main company application module handle all templates
 * Author: Kailash kumar
 */
import React, { PropTypes } from 'react';
// import Header from './common/Header';
import { connect } from 'react-redux';
import SellerForm from './container/SellerForm';
import { bindActionCreators } from 'redux';
import * as SellerActions from '../../actions/SellerActions';

class SellerPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SellerForm />
        );
    }
}

SellerPage.propTypes = {
};

//Connecting a React component to the Redux store
export default SellerPage;