import React, { useState } from 'react';
import Text from '../components/Text';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';

const Home = () => {
  return (
    <div className='wrap'>
      <div className='content'>
        <div className='content-wrap'>
          <div className='content-top'>
            <Text label={'What’s the Plan for Today?'} />
            <Input onClick={() => {}} label={'Update'} />
          </div>
          <div className='item-wapper'>
            <div className='test'>
              {ItemList.map((item) => (
                <TodoItem key={item.id} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
