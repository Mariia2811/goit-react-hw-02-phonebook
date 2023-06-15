import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };

      onAddContact(newContact);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={styles.input}>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleNumberChange}
        />
      </div>
      <button className={styles.button} type="button" onClick={handleAddContact}>
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
