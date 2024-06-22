import React, { useState } from 'react';
import './Contact_view.scss'
import emailjs from 'emailjs-com';
import { validate } from './validation';
        
export default function Contact_view({color}) {

  const initialState = {
    from_name: '',
    email: '',
    message: ''
}
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  

  const handleChange = (e) => {
      const { name, value } = e.target;
      const updatedData = {
        ...formData,
        [name]: value
      };
    
      setFormData(updatedData);
    
      const validationErrors = validate(updatedData);
      setErrors(validationErrors);
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

      setErrors(validate(formData))
  };

  return (
      <section className='contact_view' id='contacto'>
        <h1 className='title' >CONTACTAME</h1>
        <form onSubmit={handleSubmit} className='formulary' >
          <div className='label'>
              <label>NOMBRE<span className='resalt'>*</span></label>
              <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
              <span className='error'>{errors.from_name}</span>
          </div>
          <div className='label'>
              <label>CORREO<span className='resalt'>*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <span className='error'>{errors.email}</span>
          </div>
          <div className='label'>
              <label>MENSAJE<span className='resalt'>*</span></label>
              <textarea name="message" value={formData.message} onChange={handleChange} required cols="20" />
              <span className='error'>{errors.message}</span>
          </div>
          <button 
          type="submit"
          className='send_button'
          disabled={
            errors.from_name ||
            errors.email ||
            errors.message ||
            formData.from_name === '' ||
            formData.email === '' ||
            formData.message === ''
            ? true : false}
          >ENVIAR</button>
      </form>
      </section>
  );
}