import { getData } from "../../services/ContactsSevice";
import { createContact } from "../../services/ContactsSevice";
import { deleteItem } from "../../services/ContactsSevice";
import React, { Component } from "react";
import ContactList from "../contactList/ContactList";
import ContactForm from "../contactForm/ContactForm";



export default class Contacts extends Component {
  state = {
    list: [],
    popupMode: true,
  };

  componentDidMount() {
    getData().then((list) => {
        this.setState({ list });
      });
  }

/*   editContact = (id) => {
    const item = this.state.list.find((i) => i.id);
    const newItem = { ...item, name: "Kate" };

    fetch(URL + id, {
      method: "PUT",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      this.setState({
        list: this.state.list.map((item) => (item.id !== id ? item : newItem)),
      });
    });
  }; */

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

  render() {
    return (
      <>
        <ContactList
          list={this.state.list}
          popup={this.state.showPopup}
          onDelete={this.deleteContact}
          onEdit={this.editContact}
          showPopup={this.showPopup}
        />
        {this.state.popupMode && <ContactForm onSave={this.createItem}/>}
      </>
    );
  }
}
