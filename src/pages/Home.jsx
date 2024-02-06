import React, { useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';
import { useEffect } from 'react';

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
            <Text label={'What’s the Plan for Today?'} />
            <Input onClick={() => {}} onSubmit={(val) => setValue(val)} label={'Add'} />
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
