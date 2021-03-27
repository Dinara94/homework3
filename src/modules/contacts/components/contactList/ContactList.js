import React from "react";

import {
  neonText,
  neonButton,
  lightText,
  lightButton,
} from "../../services/Styles";


import "./ContactList.css";

import ContactItem from "../contactItem/ContactItem";

export default function ContactList({ list, onDelete, showPopup, colorMode}) {
  return (
    <div className="listContainer" style={colorMode === "light" ? lightText() : neonText()}>
      <h1 className="title" style={colorMode === "light" ? lightText() : neonText()}>My contact List</h1>
      <ul className="list">
        {list.map((item) => (
          <ContactItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            showPopup={showPopup}
          />
        ))}
      </ul>
      <button className="adButton" style={colorMode === "light" ? lightButton() : neonButton()} onClick={showPopup}>
        Add new contact
      </button>
    </div>
  );
}
