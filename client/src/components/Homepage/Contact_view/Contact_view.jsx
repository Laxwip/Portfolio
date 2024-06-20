import React, { useState } from 'react';
import './Contact_view.scss'
import emailjs from 'emailjs-com';
        
export default function Contact_view({color}) {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.send(
          '135583',  // Reemplaza con tu Service ID
          'template_665zwlr',  // Reemplaza con tu Template ID
          formData,
          '45cTQ8mEVJN0kMn7u'    // Reemplaza con tu Public Key
      ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
      }).catch((err) => {
          console.log('FAILED...', err);
      });

      setFormData({
          from_name: '',
          email: '',
          message: ''
      });
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label>Name</label>
              <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
          </div>
          <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit">Send</button>
      </form>
  );
}