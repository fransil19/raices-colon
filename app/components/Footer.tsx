'use client'
import React, { useState } from 'react';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Send the form data to your server or API
    console.log('Form submitted:', { name, email, message });

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm">
            <p>© 2024 Your Company Name</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="tel:+1234567890" className="hover:text-gray-200">
              <span className="inline-block mr-2"></span>
              (123) 456-7890
            </a>
            <a href="mailto:info@yourcompany.com" className="hover:text-gray-200">
              <span className="inline-block mr-2"></span>
              info@yourcompany.com
            </a>
            <a href="https://www.yourcompany.com" className="hover:text-gray-200">
              <span className="inline-block mr-2"></span>
              yourcompany.com
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-gray-200 font-bold">¡Contáctanos!</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
