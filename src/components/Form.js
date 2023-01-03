import React from 'react'

const Form = ({ input, setInput, todoList, setTodoList }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = todoList.length + 1;
        let todo = {
            id: id,
            task: input,
            complete: false,
        }
        setTodoList([...todoList, todo])
        setInput("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter new task" required />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Form