import './App.css';
import { useEffect, useState } from 'react';

const url = "https://contactify-api.herokuapp.com/api/contacts";

function App() {
  const [contacts, addContacts] = useState(null);
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    addContacts(data);
  }, [])
  return (
    <div>
      {contacts===null? <div>loading</div>: <ContactTable contacts = {contacts}/>}
    </div>
  );
}

function ContactTable(props) {
  return (
    <div>
      <div>
        <span>Name</span>
        <span>City</span>
        <span></span>
        <span>Email</span>
        <span>Phone</span>
        {props.contacts.map(contact=> <ContactListItem contact = {contact}/>)}
      </div>
      <Contact/>
    </div>
  );
}

function ContactListItem(props) {
  return (
    <div>
      <span>{props.contact.name} {props.contact.surname[0]}. </span>
      <span>{props.contact.city}</span>
      <span>{props.contact.isActive?"Active": "Offline"}</span>
      <span>{props.contact.email}</span>
      <span>{props.contact.phone}</span>
    </div>
  );
}

function Contact() {
  return (
    <div>
      Single Contact
    </div>
  );
}

export default App;
