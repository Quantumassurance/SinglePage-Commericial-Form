import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './LandingPage.css';

import Logo from './Assets/qaLogo.png';
import Back from './Assets/business.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Axios from 'axios';



class LandingPage extends Component {

 
    constructor (props) {
        super(props);

        // this.state = {
        //     'first_name': '', 
        //     'last_name': '',
        //     'email_address': '',
        //     'phone_home': '',
        //     'legal_business_name': '',
        //     'zip_code': '',
        // }

        this.setFName = this.setFName.bind(this);
        this.setLName = this.setLName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setBusinessName = this.setBusinessName.bind(this);
        this.setZipCode = this.setZipCode.bind(this);
    }

    submitForm = (values) => {   
                       
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const businessName = document.getElementById('businessName').value;
        const zipCode = document.getElementById('zipCode').value;


        this.setFName();
        this.setLName();
        this.setEmail();
        this.setPhone();
        this.setBusinessName();
        this.setZipCode();

        if(firstName.length < 1){
            toast.error('no')
        }

        if(lastName.length < 1){
            toast.error('no')
        }

        if(email.length < 1){
            toast.error('no')
        }

        if(phone.length < 1){
            toast.error('no')
        }

        if(businessName.length < 1){
            toast.error('no')
        }

        if(zipCode.length < 1){
            toast.error('no')
        }

        
       this.setState({
        loading: true 
      }, this.postFBA(this.props.postData));

      this.props.history.push('/thank-you')

 }

 postAll() {

 }

    setFName = (values) => {

        const firstName = document.getElementById('firstName').value;

        if(firstName.length < 1){
            toast.error("Please Enter Your First Name");

            values.preventDefault();
            
                return;
        }

        else{
            this.props.setFname(firstName)
        }

    }

    setLName = (values) => {

        const lastName = document.getElementById('lastName').value;

        if(lastName.length < 1){
            toast.error("Please Enter Your Last Name")

            values.preventDefault();

            return;


        }

        else{
            this.props.setLName(lastName)
        }


    }

    setEmail = (values) => {

        const email = document.getElementById('email').value;

        if(email.length < 1){
            toast.error("Please Enter Your A Valid Email")
            values.preventDefault();


        }

        else{
            this.props.setEmail(email)
        }



    }

    setPhone = (values) => {

        const phone = document.getElementById('phone').value;

        if(phone.length < 1){
            toast.error("Please Enter A Valid Phone Number")
            values.preventDefault();


        }

        else{
            this.props.setPhone(phone)
        }


    }

    setBusinessName = (values) => {

        const businessName = document.getElementById('businessName').value;

        if(businessName.length < 1){
            toast.error("Please Enter Your Business Name")
            values.preventDefault();


        }

        else{
            this.props.setBusinessName(businessName)
        }



    }

    setZipCode = (values) => {

        const zipCode = document.getElementById('zipCode').value;

        if(zipCode.length < 5){
            toast.error("Please Enter Your A Valid Zip Code")
            values.preventDefault();


        }

        else{
            this.props.setZipCode(zipCode)
        }

    }

    


    postFBA = (postData) => {
        console.log(postData);
        Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
          params: postData,
        })

        .then((res) => {
            console.log(res)
            if (res.status === 200) {
              this.setState({
                loading: false,
              },() => {    
                    this.submitForm();
              });
            }
          })
          .catch((err) => {
            if (err) throw err;
          });

    }

    state = {
        error: '',
        loading: false,
        response: ''
    }

    render() {

        const { response, loading } = this.state

        return (
            <div>

<ToastContainer 
          position="top-center"
          autoClose={5000}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
        />

<section>
  <nav className="relative px-6 py-6 flex justify-between items-center py-6 bg-white">
    <a className="text-3xl font-bold leading-none" href="#" data-config-id="brand">
      <img className="h-12" src={Logo} alt="" width="auto" />
    </a>
    <div className="lg:hidden">
    <button className="hidden lg:block py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold text-sm transition duration-200" data-config-id="primary-action-nav">(855) 336-1823</button>
    </div>
   

    <button className=" lg:block py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold text-sm transition duration-200" data-config-id="primary-action-nav">(855) 336-1823</button>
  </nav>
  <div className="relative py-20 int overflow-hidden">
    <img className=" lg:block absolute inset-0 w-full" src={Back} alt="" />
    <div className="relative container mx-auto px-4">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
          <div className="w-full text-center lg:text-left sm:text-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading text-white">
                <span data-config-id="header-p1 text-white">Low Cost Insurance for Your Business </span>
              </h2>
              <p className="lg:text-left text-white sm:text-center"> 
              A business owners policy includes protection for all major property and liability risk in one package. It offers protection to business owners against property damage, peril, business interruption, and liability. <br/> Get a free quote with Quantum today and see if your business qualifies for Business Owners Policy.
              </p>
            </div>
 
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="max-w-full text-center mx-auto">
            <div className="mb-4 px-6 py-8 bg-white rounded-xl">
              
              <form onSubmit={this.submitForm}>
                <div className="flex flex-wrap -mx-2">
                  <div className="mb-4 w-full lg:w-1/2 px-2">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" id="firstName" type="text" placeholder="First Name" onChange={this.setFName} required={true} />
                  </div>
                  <div className="mb-4 w-full lg:w-1/2 px-2">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" id="lastName" type="text" placeholder="Last Name"  onChange={this.setLName } required={true}/>
                  </div>
                </div>
                <div className="mb-4 flex p-2 bg-gray-50 rounded">

                <input className="w-full text-xs bg-gray-50 outline-none rounded" id="email" type="email" placeholder="email.com" onChange={this.setEmail} required={true} />

                  
                  
                </div>

                <div className="mb-4 flex p-4 bg-gray-50 rounded">
                  <input className="w-full text-xs bg-gray-50 outline-none rounded" id="phone" type="tel" placeholder="(123) 456-7890"  onChange={this.setPhone} required={true}/>
                  
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="mb-4 w-full lg:w-1/2 px-2">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" id="businessName" type="text" placeholder="Businness Name"  onChange={this.setBusinessName} required={true}/>
                  </div>
                  <div className="mb-4 w-full lg:w-1/2 px-2">
                    <input className="w-full p-4 text-xs bg-gray-50 outline-none rounded" id="zipCode" type="text" placeholder="Zip Code" onChange={this.setZipCode} required={true} />
                  </div>
                </div>
                

                <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 " type="submit">Get My Free Quote!</button>

                <p className="p text-center text-gray-400 ">By clicking "Get My Free Quote", you provide an electronic signature by which you agree to the following: "I give my express consent to receive emails, notifications, and calls, which may be auto-dialed, use artificial or pre-recorded voices, and/or be text messages, about auto insurance plans or products from Quantum Assurance, <a href="https://www.quotehound.com/partners"> these companies, </a> and their agents and to the email address and or telephone number(s), including wireless phone number(s), I have provided, even if I have previously registered the provided number on the Do Not Call Registry. I understand that my consent to receive calls is not required in order to purchase any property, goods or services. My telephone company may impose additional charges for messages. I may revoke my consent to receiving messages at any time. By submitting my information, I confirm that I have read, understand, and agree to these <a href="https://www.quantumassurance.com/terms-conditions">Terms of Use </a> and <a href="https://www.quantumassurance.com/privacy-policy"> Privacy Policy </a></p>
         
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

                
            </div>
        )
    }
}

export default withRouter(LandingPage)
