import React from 'react'

const Input = ({ onClick, btntype }) => {
    return (
        <div className="input-wrap">

            <input type="text" className="input" placeholder="Write a new todo">

            </input>
            <button type="button" className={'btn'} onClick={() => { onClick() }} btntype={btntype} >
                <span>Add</span>
            </button>
        </div>

    )
}

export default Input