import React, { Component } from "react";
import "./ContactList.css";

import ContactItem from "../contactItem/ContactItem";

export default class ContactList extends Component {
  render() {
    return (
      <>
        <h1 className="title">My contact List</h1>
        <ul className="list">
          {this.props.list.map((item) => (
            <ContactItem
              key={item.id}
              item={item}
              onDelete={this.props.onDelete}
              showPopup={this.props.showPopup}
            />
          ))}
        </ul>
        <button className="adButton" onClick={this.props.showPopup}>
          Add new contact
        </button>
      </>
    );
  }
}
