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
            <p>© 2024 Raíces de Colon</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="https://wa.me/541166768895" className="hover:text-gray-200">
              <span className="inline-block mr-2"></span>
              (123) 456-7890
            </a>
            <a href="mailto:info@yourcompany.com" className="hover:text-gray-200">
              <span className="inline-block mr-2"></span>
              info@yourcompany.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
