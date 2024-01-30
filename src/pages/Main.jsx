import React from 'react'
import Text from '../components/Text'
import Input from '../components/Input'
import TodoItem from '../components/TodoItem'

const Main = () => {
    return (
        <div className="content">
            <div className="content-wrap">
                <Text label={'What’s the Plan for Today?'} />

                <Input onClick={() => { }} label={'Add'} />
                <div className="item-wapper">
                    <TodoItem title={'Buy milk'} />
                    <TodoItem title={'Call katherine about the Trip'} />
                </div>
            </div>


        </div>
    )
}

export default Main