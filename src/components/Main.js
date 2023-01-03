import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';

const Main = () => {
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    return (
        <main>
            <Form input={input} setInput={setInput} todoList={todoList} setTodoList={setTodoList} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
            {/* <button type='clear'></button> */}
        </main>
    )
}

export default Main