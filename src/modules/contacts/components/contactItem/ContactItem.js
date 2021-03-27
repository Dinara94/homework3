import React from "react";

import {
  neonText,
  neonButton,
  lightText,
  lightButton,
} from "../../services/Styles";

import "./contactItem.css";

export default function ContactItem({item, onDelete, colorMode}) {
  const delButtonClick = (e) => {
    e.stopPropagation();
    onDelete(item.id);
  };

    return (
      <li className="contactRow" style={colorMode === "light" ? lightText() : neonText()}>
        <div className="name" style={colorMode === "light" ? lightText() : neonText()}>{item.name}</div>
        <div className="surname" style={colorMode === "light" ? lightText() : neonText()}>{item.surname}</div>
        <div className="phone" style={colorMode === "light" ? lightText() : neonText()}>{item.phone}</div>
        <div className="buttons">
          <button className="button delete" style={colorMode === "light" ? lightButton() : neonButton()} onClick={delButtonClick}>
            Delete
          </button>
        </div>
      </li>
    );
}
