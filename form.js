import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    htmlCssProficiency: '',
    reactJsProficiency: '',
    wordpressProficiency: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to local storage
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    localStorage.setItem('userData', JSON.stringify([...storedData, formData]));

    // Clear form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      university: '',
      htmlCssProficiency: '',
      reactJsProficiency: '',
      wordpressProficiency: '',
    });
  };
  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        {/* ... Form fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;