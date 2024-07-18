import React, { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      setName('');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='input'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter athlete's name"
        required
      />
      <button className='button' type="submit">Search</button>
    </form>
  );
};

export default UserInput;