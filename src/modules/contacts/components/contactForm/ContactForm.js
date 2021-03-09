import React, { Component } from "react";
import "./contactForm.css";

export default class ContactForm extends Component {
  state = {
    contact: {
      name: "",
      surname: "",
      phone: "",
    },
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.contact);
    this.setState({
      contact: {
        name: "",
        surname: "",
        phone: "",
      },
    });
    this.props.closePopup();
  };

  editContact = (e) => {
    this.setState({
      contact: { ...this.state.contact, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="popup">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Please enter name"
            name="name"
            defaultValue={this.state.contact.name}
            onChange={this.editContact}
          />
          <input
            type="text"
            placeholder="Please enter lastname"
            name="surname"
            defaultValue={this.state.contact.surname}
            onChange={this.editContact}
          />
          <input
            type="text"
            placeholder="Please enter phone number"
            name="phone"
            defaultValue={this.state.contact.phone}
            onChange={this.editContact}
          />
          <div className="options">
            <button className="option save" onClick={this.onFormSubmit}>
              Save
            </button>
            <button className="option cancel" onClick={this.props.closePopup}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
