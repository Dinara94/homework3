import React, { useState } from "react";

import {
  neonText,
  neonButton,
  lightText,
  lightButton,
} from "../../services/Styles";

import "./contactForm.css";

export default function ContactForm({ onSave, closePopup, colorMode}) {
  const [newContact, setNewContact] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSave(newContact);

    setNewContact({
      name: "",
      surname: "",
      phone: "",
    });

    closePopup();
  };

  const editContact = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  return (
    <div className="popup" style={colorMode === "light" ? lightText() : neonText()}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Please enter name"
          name="name"
          defaultValue={newContact.name}
          onChange={editContact}
        />
        <input
          type="text"
          placeholder="Please enter lastname"
          name="surname"
          defaultValue={newContact.surname}
          onChange={editContact}
        />
        <input
          type="text"
          placeholder="Please enter phone number"
          name="phone"
          defaultValue={newContact.phone}
          onChange={editContact}
        />
        <div className="options">
          <button className="option save" style={colorMode === "light" ? lightButton() : neonButton()} onClick={onFormSubmit}>
            Save
          </button>
          <button className="option cancel" style={colorMode === "light" ? lightButton() : neonButton()} onClick={closePopup}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
