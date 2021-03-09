import { getData } from "../../services/ContactsSevice";
import { createContact } from "../../services/ContactsSevice";
import { deleteItem } from "../../services/ContactsSevice";
import React, { Component } from "react";
import ContactList from "../contactList/ContactList";
import ContactForm from "../contactForm/ContactForm";



export default class Contacts extends Component {
  state = {
    list: [],
    popupMode: false,
  };

  componentDidMount() {
    getData().then((list) => {
        this.setState({ list });
      });
  }

  deleteContact = (id) => {
    deleteItem(id);

    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  createItem = (newItem) => {
    createContact(newItem).then((data) => (
      this.setState({list: [...this.state.list, data] })
    ));
  };

  showPopup = () => {
    this.setState({ popupMode: true });
  };

  closePopup = () => {
    this.setState({ popupMode: false });
  };

  render() {
    return (
      <>
        <ContactList
          list={this.state.list}
          popup={this.state.showPopup}
          onDelete={this.deleteContact}
          showPopup={this.showPopup}
        />
        {this.state.popupMode && <ContactForm onSave={this.createItem} closePopup={this.closePopup}/>}
      </>
    );
  }
}
