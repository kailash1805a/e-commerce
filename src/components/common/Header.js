/**
 * Author: Kailash kumar
 */
import React,{Component} from 'react';

class HeaderPage extends Component {
    render() {

        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="../" className="navbar-brand">Bootswatch</a>
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="http://builtwithbootstrap.com/" target="_blank" rel="noopener noreferrer">Built With Bootstrap</a></li>
                            <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank" rel="noopener noreferrer">WrapBootstrap</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderPage;