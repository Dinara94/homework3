import React from "react";

import {
  neonButton,
  lightButton,
} from "../../services/Styles";

import "./contactItem.css";

export default function ContactItem({ item, onDelete, colorMode }) {
  const delButtonClick = (e) => {
    e.stopPropagation();
    onDelete(item.id);
  };

  return (
    <li className="contactRow">
      <div className="name">{item.name}</div>
      <div className="surname">{item.surname}</div>
      <div className="phone">{item.phone}</div>
      <button
        className="button delete"
        style={colorMode === "light" ? lightButton() : neonButton()}
        onClick={delButtonClick}
      >
        Delete
      </button>
    </li>
  );
}
