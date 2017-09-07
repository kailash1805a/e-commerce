/**
 * Author: Kailash kumar
 */

import React, { PropTypes } from 'react';

/**
 * stateless component for login form
 */
const LoginForm = ({ formDetails, formSubmit }) => {
    return (
        <form className="form-signin">
            <input onChange={formDetails} name="username" type="email" className="form-control" placeholder="Username" required />
            <input onChange={formDetails} name="password" type="password" className="form-control" placeholder="Password" required />
            <button onClick={formSubmit} className="btn btn-md btn-primary btn-block" type="button">
                Sign in</button>
            <label className="checkbox pull-center">
                <input type="checkbox" value="remember-me" />
                Remember me
            </label>
        </form>
    )
}

LoginForm.PropTypes = {
    fromSubmit: React.PropTypes.func.isRequired,
    formDetails: React.PropTypes.func.isRequired
}

export default LoginForm;