import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbEditCircle } from "react-icons/tb";

const TodoItem = ({ title }) => {
    return (
        <div className="item">
            <div className="item-lfcontent">
                <input type="checkbox" ></input>
                <span>{title}</span>
            </div>

            <div className="item-rgcontent">
                <button type="button" className='icon-button'><TbEditCircle size={22} /></button>
                <button type="button" className='icon-button'> <IoMdCloseCircleOutline size={22} /></button>


            </div>
        </div>
    )
}

export default TodoItem