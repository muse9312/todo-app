import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { IoCheckbox } from 'react-icons/io5';
import { TbEditCircle } from 'react-icons/tb';

const TodoItem = ({ data, id, title, onDelete, onCheck }) => {
  const navigate = useNavigate();
  // const { id, title } = data;

  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  // update 페이지로 이동
  const onEdit = () => {
    navigate('/update');
  };

  // check 되면 true 넘겨주기
  // const onCheck = () => {
  //   if (isChecked) {
  //     return true;
  //   }
  // };

  const colorChange = isChecked ? 'gray' : '';

  return (
    <div className={isChecked ? 'item title checked  ' : 'item' || 'title'}>
      <div className='item-lfcontent'>
        <button type='button' className='icon-button' onClick={handleChecked} checked={() => onCheck(isChecked && true)}>
          {isChecked ? <IoCheckbox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
        </button>
        <span className={'title'}>{title}</span>
      </div>

      <div className='item-rgcontent'>
        <button type='button' className='icon-button' onClick={onEdit}>
          <TbEditCircle size={22} color={colorChange} disabled={isChecked} />
        </button>
        <button type='button' className='icon-button'>
          <IoMdCloseCircleOutline size={22} color={colorChange} onClick={() => onDelete(id)} disabled={isChecked} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
