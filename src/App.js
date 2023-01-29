import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserForm1 from './components/cform.jsx';
import UserForm2 from './components/contactlist.jsx';

function App() {

  const [contacts, updateContacts] = useState([]);
  
  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  console.log(contacts)

  return (
    <div className="App">
      
      <UserForm1 addContact={addContact} />
      <UserForm2 contacts={contacts} />
    </div>
  );
}

export default App;
