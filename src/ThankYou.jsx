import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Logo from './Assets/qaLogo.png'

class ThankYou extends Component {
    render() {
        return (
            <div>
                <section data-config-id="background">

                <nav className="relative px-6 py-6 flex justify-between items-center py-6 bg-white">
    <a className="text-3xl font-bold leading-none" href="#" data-config-id="brand">
      <img className="h-12" src={Logo} alt="" width="auto" />
    </a>
    <div className="lg:hidden">
    <button className="hidden lg:block py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold text-sm transition duration-200" data-config-id="primary-action-nav">(855) 336-1823</button>
    </div>
   

    <button className=" lg:block py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold text-sm transition duration-200" data-config-id="primary-action-nav">(855) 336-1823</button>
  </nav>

  <div className="skew skew-top ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 10 10 0 10 10" />
    </svg>
  </div>
  <div className="py-20 bg-gray-50 radius-for-skewed">
    <div className="container mx-auto px-4">
      <div className="mb-16 mx-auto max-w-md text-center">
        <span className="text-blue-600 font-bold" data-config-id="caption">Thank You!</span>
        <h2 className="text-2xl lg:text-2xl font-bold font-heading" data-config-id="header">One of our Agents will be calling you shortly. Please have your phone ready.</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
          <div className="py-10 px-6 bg-white  rounded text-center">
            <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-blue-100 rounded text-2xl text-blue-600 font-bold">1</span>
            <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header1">Submit Your Information</h3>
            <p className="text-gray-500 leading-loose" data-config-id="desc1">With just a few questions you can start saving money!</p>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
            
          <div className="py-10 px-6 bg-white shadow-lg rounded text-center">

         
            <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-blue-100 rounded text-2xl text-blue-600 font-bold">2</span>

            <div className="text-center">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                       You Are Here
                                    </span>
                                </div>
            <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header2">Get In Contact With An Agent</h3>
            <p className="text-gray-500 leading-loose" data-config-id="desc2">Speak with one of our Agents who can help you save hundreds on your isurance!</p>

            <a className="inline-block py-2 px-6 leading-loose bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="tel:8553361823" data-config-id="04_button">(855) 336-1823</a>

          </div>
        </div>
        <div className="w-full md:w-full lg:w-1/3 px-4">
          <div className="py-10 px-6 bg-white  rounded text-center">
            <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-blue-100 rounded text-2xl text-blue-600 font-bold">3</span>
            <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">Start Saving</h3>
            <p className="text-gray-500 leading-loose" data-config-id="desc3">With the savings you get with Quantum Assurance, you can focus on what matters most!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="skew skew-bottom mr-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 0 10" />
    </svg>
  </div>
  <div className="skew skew-bottom ml-for-radius">
    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 0 10 0 10 10" />
    </svg>
  </div>
</section>


            </div>
        )
    }
}

export default withRouter(ThankYou)
