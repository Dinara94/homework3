import React, { useEffect, useState } from "react";

import {
  getData,
  createContact,
  deleteItem,
} from "../../services/ContactsSevice";

import ThemeFilter from "../themeFilter/ThemeFilter";
import ContactList from "../contactList/ContactList";
import ContactForm from "../contactForm/ContactForm";

export default function Contacts() {
  const [list, setList] = useState([]);
  const [popupMode, setPopupMode] = useState(false);
  const [colorMode, setcolorMode] = useState("light");


  useEffect(() => {
    getData().then((list) => setList(list));
  }, [list]);

  const deleteContact = (id) => {
    deleteItem(id);
    setList(list.filter((item) => item.id !== id));
  };

  const createItem = (newItem) => {
    createContact(newItem).then((data) => {
      setList([...list, data]);
    });
  };

  const showPopup = () => {
    setPopupMode(true);
  };

  const closePopup = () => {
    setPopupMode(false);
  };

  return (
    <>
      <ThemeFilter
        colorMode={colorMode}
        setcolorMode={setcolorMode}
      />
      <ContactList
        list={list}
        onDelete={deleteContact}
        showPopup={showPopup}
        colorMode={colorMode}
      />
      {popupMode && (
        <ContactForm
          onSave={createItem}
          closePopup={closePopup}
          colorMode={colorMode}
        />
      )}
    </>
  );
}
