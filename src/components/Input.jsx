import React from 'react';

const Input = ({ label, onClick }) => {
  return (
    <div className='input-wrap'>
      <input type='text' className='input' placeholder='Write a new todo'></input>
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
