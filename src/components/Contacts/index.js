import {useState, useEffect} from 'react';
import './style.css';


import React from 'react';
import List from "./List/";
import Form from "./Form";

function Contacts() {
  const  [contacts, setContact] = useState([
    {
      fullname: "Onur",
      phone_number: "123456"
    },
    {
      fullname: "Burak",
      phone_number: "654321"
    },
    {
      fullname: "Ahmet",
      phone_number: "6789123"
    },
    {
      fullname: "Ecem",
      phone_number: "789546"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  }, [contacts]);

  return <div id="container">
    <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContact} contacts= {contacts}/>
  </div>;
}

export default Contacts;
