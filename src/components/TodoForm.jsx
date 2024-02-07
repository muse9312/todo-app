import React, { useState } from 'react';

const TodoForm = ({ label, onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('오똑하지', value);
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='input-wrap'>
      <input type='text' className={'input'} value={value} onChange={handleChange} placeholder='Write a new todo'></input>
      <button type='submit' className={label === 'Update' ? 'btn update' : 'btn'}>
        <span>{label}</span>
      </button>
    </form>
  );
};

export default TodoForm;
