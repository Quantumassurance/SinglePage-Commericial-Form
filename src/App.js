import React, { Component } from 'react';
import LandingPage from './LandingPage';
import ThankYou from './ThankYou';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

 class App extends Component {

state = {
  route: '/',
  routes: [
    '/',
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
    TCPA_Language: 'By clicking "Get My Instant Quote", you provide an electronic signature by which you agree to the following: "I give my express consent to receive emails, notifications, and calls, which may be auto-dialed, use artificial or pre-recorded voices, and/or be text messages, about auto insurance plans or products from Quantum Assurance, these companies, and their agents and to the email address and or telephone number(s), including wireless phone number(s), I have provided, even if I have previously registered the provided number on the Do Not Call Registry. I understand that my consent to receive calls is not required in order to purchase any property, goods or services. My telephone company may impose additional charges for messages. I may revoke my consent to receiving messages at any time. By submitting my information, I confirm that I have read, understand, and agree to these Terms of Use and Privacy Policy',
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

        <Route path='/thank-you' component={ThankYou} exact />


        
      </Switch>


      </div>
      
      </BrowserRouter>
    )
  }
}

export default App;
