import React, { useState } from 'react';

const Input = ({ label, onChange, onClick }) => {
  const [value, setValue] = useState('');

  const handleChange = (val) => {
    onChange && setValue(val);
  };

  return (
    <div className='input-wrap'>
      <input type='text' className='input' onChange={handleChange} placeholder='Write a new todo'></input>
      <button
        type='button'
        className={label === 'Update' ? 'btn update' : 'btn'}
        onClick={() => {
          onClick();
        }}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Input;
