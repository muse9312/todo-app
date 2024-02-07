import React from 'react';
import Text from '../components/Text';
import TodoItem from '../components/TodoItem';
import { ItemList } from '../data/common';
import TodoForm from '../components/TodoForm';

const Update = () => {
  return (
    <div className='wrap'>
      <div className='content'>
        <div className='content-wrap'>
          <div className='content-top'>
            <Text label={'What’s the Plan for Today?'} />
            <TodoForm onClick={() => {}} label={'Update'} />
          </div>
          <div className='item-wapper'>
            <div className='itembox'>
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

export default Update;
