import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';
import { useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
  // input value
  const [value, setValue] = useState('');

  // check true
  const [checkValue, setCheckValue] = useState('');

  console.log(checkValue);

  const [items, setItems] = useState(ItemList);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className='wrap'>
      <div className='content'>
        <div className='content-wrap'>
          <div className='content-top'>
            <Header title={'What’s the Plan for Today?'} />
            <TodoForm onClick={() => {}} onSubmit={(val) => setValue(val)} label={'Add'} />
          </div>
          <ul className='item-wapper'>
            <li className='itembox'>
              {items.map((item) => (
                <TodoItem key={item.id} id={item.id} title={item.title} onCheck={(check) => setCheckValue(check)} onDelete={handleDelete} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
