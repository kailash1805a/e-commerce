/**
 * Author: Kailash kumar
 */
import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import SellerPage from '../seller/SellerPage';

class HomePage extends React.Component {
    render() {

        return (

            <div>
                <Header />
                <div className="row">
                    <Sidebar />

                    <div className="container-fluid">
                        <div className="side-body">
                            <SellerPage/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;