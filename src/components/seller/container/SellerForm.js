/**
 * Author: Kailash kumar
 */

import React from 'react';
// import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';
import { Panel, Accordion } from 'react-bootstrap';

/**
 * stateless component for login form
 */
const SellerForm = () => {
    return (
        <div id="page-wrapper">
            <h2 className="page-header">Seller Information</h2>

            <div className="row">
                <div className="col-lg-12">
                    <Accordion>
                        <Panel
                            header={
                                <h4 className="panel-title">
                                    Basic Information
                                    </h4>
                            } eventKey="1"
                        >
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="firstname">First Name*	</label>
                                    <input type="text" className="form-control input-sm" name="firstname" id="firstname" placeholder="First name..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="lastname">Last Name*</label>
                                    <input type="text" className="form-control input-sm" name="lastname" id="lastname" placeholder="Last name..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="companyname">Company Name*</label>
                                    <input type="text" className="form-control input-sm" name="companyname" id="companyname" placeholder="Company name..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-5">
                                    <label htmlFor="gender">Gender</label>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="gender" id="gender" value="option3" className="radio-custom" />Male
                                            <input type="radio" name="gender" id="gender" value="option3" className="radio-custom" />Female
                                        </label>
                                    </div>

                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="landline">Landline No.</label>
                                    <input type="text" className="form-control input-sm" name="landline" id="landline" placeholder="Landline number..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="mobileno">Mobile No.</label>
                                    <input type="text" className="form-control input-sm" name="mobileno" id="mobileno" placeholder="Mobile number..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="ccnumber">CC Number</label>
                                    <input type="text" className="form-control input-sm" name="ccnumber" id="ccnumber" placeholder="Credit card number..." />
                                </div>
                            </div>
                        </Panel>
                        <Panel
                            header={
                                <h4 className="panel-title">
                                    Address Information
                                    </h4>
                            } eventKey="2"
                        >
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="addressline1">Address Line 1*	</label>
                                    <input type="text" className="form-control input-sm" name="addressline2" id="addressline1" placeholder="Address line..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="addressline2">Address Line 2</label>
                                    <input type="text" className="form-control input-sm" name="addressline2" id="addressline2" placeholder="Address line..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="addressline3">Address Line 3</label>
                                    <input type="text" className="form-control input-sm" name="addressline3" id="addressline3" placeholder="Address line..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="landmark">Landmark</label>
                                    <input type="text" className="form-control input-sm" name="landmark" id="landmark" placeholder="Landmark..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="state">State</label>
                                    <input type="text" className="form-control input-sm" name="state" id="state" placeholder="State..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control input-sm" name="city" id="city" placeholder="City..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="pincode">Pin Code</label>
                                    <input type="text" className="form-control input-sm" name="pincode" id="pincode" placeholder="Pine code..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" className="form-control input-sm" name="country" id="country" placeholder="Country..." />
                                </div>

                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="phonenumber1">Phone Number 1</label>
                                    <input type="text" className="form-control input-sm" name="phonenumber1" id="phonenumber1" placeholder="Phone number..." />
                                </div>
                                <div className="form-group col-md-6 col-sm-6">
                                    <label htmlFor="phonenumber2">Phone Number 2</label>
                                    <input type="text" className="form-control input-sm" name="phonenumber2" id="phonenumber2" placeholder="Phone number..." />
                                </div>
                            </div>
                        </Panel>

                    </Accordion>
                </div>
            </div>
        </div>
    )
}

SellerForm.PropTypes = {
}

export default SellerForm;