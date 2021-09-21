// import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import React, { useState } from "react";



function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const addRandomContact = () => {
    
    if (contactsJSON.length) {
      const randomIndex = Math.floor(Math.random() * contactsJSON.length)
      const newRandomContact = contactsJSON[randomIndex];
      contactsJSON.splice(randomIndex, 1);
      setContacts(contacts.concat(newRandomContact))
    }
  }

  const sort = (key) => {
    setContacts([...contacts.sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    })])
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id)); 
};



  return (
    <div className="App">
      {contactsJSON.length === 0 && "no more contacts"}

      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={() => sort("name")}>Sort By Name</button>
      <button onClick={() => sort("popularity")}>Sort By Popularity</button>
  

      <table className="table">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {contacts.map((celeb, index) => {
          return <tr key={index}>
                    <td><img src={celeb.pictureUrl} width="100px" alt="fuck you" /></td>
                    <td>{celeb.name}</td>
                    <td>{celeb.popularity.toFixed(2)}</td>
                    <td>{celeb.wonOscar ? "🏆" : ""}</td>
                    <td>{celeb.wonEmmy ? "🏆" : ""}</td>
                    <td><button onClick={() => deleteContact(celeb.id)}>Delete</button></td>
                  </tr>
        })}
        
      </table>
      
    </div>
  );
}

export default App;
