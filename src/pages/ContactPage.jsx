import React, { Component } from 'react';
import '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './ContactPage.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA44xKQMYBRBLoegj0x2pqsOkesqz9glfE",
    authDomain: "contact-form-43439.firebaseapp.com",
    databaseURL: "https://contact-form-43439.firebaseio.com",
    projectId: "contact-form-43439",
    storageBucket: "contact-form-43439.appspot.com",
    messagingSenderId: "339137053802"
  };
  firebase.initializeApp(config);

class ContactPage extends Component {

  constructor(props){
    super(props)
    this.state ={
      newName:'',
      newCompany:'',
    }
  }

  
  addContact = (event) =>{
    event.preventDefault();
    const name = this.state.newName;
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleCompanyChange = (event) => {
    console.log(event.target.value)
    this.setState({ newCompany: event.target.value }) 
  }

  render() {
    return (
      <div className="container">

        <h1 className="brand"> <span>My</span> Company </h1>
        <div className="wrapper">
          <div className="company-info">
            <h3>My Company</h3>
            <ul>
              <li><FontAwesomeIcon icon="road"/> Munkka</li>
              <li><FontAwesomeIcon icon="phone"/> +358 123455</li>
              <li><FontAwesomeIcon icon="envelope"/> test@test.com</li>
            </ul>

          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <form onSubmit={this.addContact}>
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" 
              value={this.state.newName}
              onChange={this.handleNameChange} />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" id="company"
              value={this.state.newCompany}
              onChange={this.handleCompanyChange} />
            </p>
            <p>
              <label>Email address</label>
              <input type="text" name="email" id="email"/>
            </p>
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone"/>
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message"></textarea>
            </p>
            <p className="full">
              <button type="submit">Submit</button>
            </p>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default ContactPage;