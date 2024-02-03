import React, { useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';

const Home = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <div className='wrap'>
      <div className='content'>
        <div className='content-wrap'>
          <div className='content-top'>
            <Text label={'What’s the Plan for Today?'} />
            <Input onClick={() => {}} onChange={(val) => setValue(val)} label={'Add'} />
          </div>
          <ul className='item-wapper'>
            <li className='test'>
              {ItemList.map((item) => (
                <TodoItem key={item.id} title={item.title} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
