import React, { useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';

const Home = () => {
  const [value, setValue] = useState('');
  console.log(value);

  const [items, setItems] = useState(ItemList);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className='wrap'>
      <div className='content'>
        <div className='content-wrap'>
          <div className='content-top'>
            <Text label={'What’s the Plan for Today?'} />
            <Input onClick={() => {}} onSubmit={(val) => setValue(val)} label={'Add'} />
          </div>
          <ul className='item-wapper'>
            <li className='itembox'>
              {items.map((item) => (
                <TodoItem key={item.id} id={item.id} title={item.title} onDelete={handleDelete} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
