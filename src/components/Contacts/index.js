import {useState, useEffect} from 'react';


import React from 'react';
import List from "./List/";
import Form from "./Form";

function Contacts() {
  const  [contacts, setContact] = useState([
    {
      fullName: "Onur",
      phone_number: "123456"
    },
    {
      fullName: "Burak",
      phone_number: "654321"
    },
    {
      fullName: "Ahmet",
      phone_number: "6789123"
    },
    {
      fullName: "Ecem",
      phone_number: "789546"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  }, [contacts]);

  return <div>
      <List contacts={contacts}/>
      <Form addContact={setContact} contacts= {contacts}/>
  </div>;
}

export default Contacts;
