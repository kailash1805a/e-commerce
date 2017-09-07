/**
 * Author: Kailash kumar
 */
import React from 'react';

class Sidebar extends React.Component {
    render() {

        return (
            <div className="side-menu">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="side-menu-container">
                        <ul className="nav">
                            <br />
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>
                            </li>
                            <br />
                            <li><a href="#"><span className="glyphicon glyphicon-send"></span> Dashbaord</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-plane"></span> Seller</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Sidebar;