import { useState } from "react";


export default function UserForm1({addContact}) {

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        addContact(contactInfo);
        setcontactInfo({ name: "", email: "", phonenumber: "" });
      };
    const handleChange=(event)=>{
        setcontactInfo({...contactInfo,[event.target.name]:event.target.value});
    }
    const [contactInfo, setcontactInfo]=useState({
        name: "",
        email: "",
        phonenumber: "",
    });


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}