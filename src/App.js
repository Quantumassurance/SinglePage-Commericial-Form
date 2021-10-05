import React, { Component } from 'react';
import LandingPage from './LandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

 class App extends Component {

state = {
  route: '/',
  routes: [
    '/thank-you'
  ],

  postData: {

    lp_campaign_id: '60355565ce6e2',
    lp_campaign_key: 'xZQ9wFCmjzykLgT2Pfp4',
    first_name: '',
    last_name: '',
    phone_home: '',
    zip_code: '',
    email_address: '',
    TCPA_Language: '',
    landing_page: 'fba.quantumassurance.com',
    legal_business_name: '',
    useragent: navigator.userAgent,
    jornaya_lead_id: '',
    trusted_form_cert_id: '',
  }


}
  render() {
    return (
      <BrowserRouter> 
      
      <div> 

      <Switch> 

        <Route path='/' exact>
          <LandingPage

            setFname = {(firstName) => {


              this.setState({
                postData: {
                  ...this.state.postData,
                  jornaya_lead_id: document.getElementById('leadid_token').value,
                      trusted_form_cert_id: document.getElementById('xxTrustedFormToken_0').value,
                  first_name: firstName,
                }
              }) 
            }}

            setLName = {(lName) => {
              this.setState({
                postData: {
                  ...this.state.postData,
                  last_name: lName,
                }
              }) 
            }}

            setEmail = {(email) => {
              this.setState({
                postData: {
                  ...this.state.postData,
                  email_address: email,
                }
              }) 
            }}

            setPhone = {(phone) => {
              this.setState({
                postData: {
                  ...this.state.postData,
                  phone_home: phone,
                }
              }) 
            }}

            setBusinessName = {(businessName) => {
              this.setState({
                postData: {
                  ...this.state.postData,
                  legal_business_name: businessName,
                }
              }) 
            }}

            setZipCode = {(zipCode) => {
              this.setState({
                postData: {
                  ...this.state.postData,
                  zip_code: zipCode,
                }
              }) 

            }}

            postData={this.state.postData}
          
          />
        </Route>
        
      </Switch>


      </div>
      
      </BrowserRouter>
    )
  }
}

export default App;
