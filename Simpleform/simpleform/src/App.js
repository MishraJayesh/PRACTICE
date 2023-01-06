import React, { useState } from 'react';

import './App.css';

function App() {

  const [form, setForm] = useState({
    Name: " ",
    Mobile: "91",
    Emails: " ",
    Password: " ",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    let p = form.Password;

    if (p.length < 6) {
      alert("Password Should Be Of Maximum 6 Characters.")
      return false;
    }
  }

  return (
    <div className="container">
      <div className="brand-title">JUST BLOGS...</div>
      <div className="inputs">
        <label>Name</label>
        <input value={form.Name} name="Name" onChange={(e) => handleChange(e)} type="text" required />
        <label>Mobile No.</label>
        <input value={form.Mobile} name="Mobile" onChange={(e) => handleChange(e)} type="number" required />
        <label>Email</label>
        <input value={form.Emails} name="Emails" onChange={(e) => handleChange(e)} type="email" required />
        <label>Password</label>
        <input value={form.Password} name="Password" onChange={(e) => handleChange(e)} type="password" required />
        <button type="submit">LOGIN</button>
      </div>
    </div>
  );
}

export default App;