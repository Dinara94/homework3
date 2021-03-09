import React, { Component } from "react";
import "./contactItem.css";

export default class ContactItem extends Component {
  delButtonClick = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <li className="contactRow">
        <div className="name">{item.name}</div>
        <div className="surname">{item.surname}</div>
        <div className="phone">{item.phone}</div>
        <div className="buttons">
          <button className="button delete" onClick={this.delButtonClick}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}
