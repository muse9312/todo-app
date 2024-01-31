import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { TbEditCircle } from "react-icons/tb";


const TodoItem = ({ title }) => {

    const [isChecked, setIsChecked] = useState(false);
    const handleChecked = () => {
        setIsChecked(!isChecked);
    };



    return (
        // item checked

        // <div className={isChecked ? "item checked" : "item"}>
        <div className={`item ${isChecked ? 'checked' : ''}`}>
            <div className="todo-list__item--lfcontent">
                <button type="button" className="icon-button" onClick={handleChecked}>
                    {isChecked ? <IoCheckbox size={20} /> : <MdCheckBoxOutlineBlank size={20} />}
                </button>
                <span className={isChecked ? "title checked" : "title"}>{title}</span>
            </div>

            <div className="item-rgcontent">
                <button type="button" className='icon-button'><TbEditCircle size={22} color={isChecked ? 'gray' : ''} disabled={isChecked} /></button>
                <button type="button" className='icon-button'> <IoMdCloseCircleOutline size={22} color={isChecked ? 'gray' : ''} disabled={isChecked} /></button>


            </div>
        </div>

    )
}

export default TodoItem