import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; 
import linkedinLogo from '../projets/linkedin.avif'; 

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Erreur lors de l\'envoi du message, veuillez réessayer.');
      });

    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-section">
      <h1>CONTACTEZ-MOI</h1>
      <p className="contact-description">
        N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
      </p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        <div className="contact-info">
          <p><strong>Téléphone :</strong> 06 09 53 22 12</p>
          <div className="email-section">
            <strong>Email :</strong>
            <p>adrienantunes05@gmail.com</p>
          </div>
          <p><strong>Code postal :</strong> 77860</p>
          <a href="https://www.linkedin.com/in/adrien-antunes-8308312a5/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
