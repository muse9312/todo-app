import React, { useState } from 'react';

const Input = ({ label, onSubmit }) => {
  const [value, setValue] = useState('');

  console.log(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue('');
  };

  return (
    <div className='input-wrap'>
      <input type='text' className={'input'} value={value} onChange={handleChange} placeholder='Write a new todo'></input>
      <button type='button' className={label === 'Update' ? 'btn update' : 'btn'} onClick={handleSubmit}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Input;
