import React, { useState } from "react";
import styled from "styled-components";


const TodoList = ({ todoList, setTodoList }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const handleDelete = ({ id, complete }) => {
    const updatedTodo = [...todoList].filter((task) => task.id !== id);
    setTodoList(updatedTodo);
    if (complete === true) {
      setCompletedTasks(completedTasks - 1);
    }
  };
  const handleCompletedTasks = (e, todo) => {
    const updatedTodo = [...todoList].map((task) => {
      if (task.id === todo.id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTodoList(updatedTodo);
    if (e.target.checked === true) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  };
  return (
    <Container>
      {todoList.length === 0 ? (
        <p style={{fontSize: '10px'}}>Looks Like You're absolutely free today!</p>
      ) : (
        todoList.map((todo, index) => (
          <div key={index}>
            <Input type="checkbox" id="task" name="task" onChange={(e) => handleCompletedTasks(e, todo)} checked={todo.complete} />
            
            <Label style={{textDecoration: todo.complete ? 'line-through': 'none'}} htmlFor="task">{todo.task}</Label>
            <Button onClick={() => handleDelete(todo)}><Image src={require('../delete.png')} /></Button>
          </div>
        ))
      )}
      <p style={{fontSize: '10px', fontWeight: 'bold'}}>DONE:{completedTasks}</p>
    </Container>
  );
};

export default TodoList;
const Input = styled.input`
  width: 14px;
  height: 14px;
  border: 1px solid #808080;
  content: "";
  background-color: #FFF;
  &:hover {
    border-color: #00b3ee;
  }
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Button = styled.button`
background-color: white;
border: none;
border-radius: 5px;
&:hover{
    cursor: pointer;
}
`
const Image = styled.img`
width: 10px;
height: 10px;
background-color: white;
`
const Label = styled.label`
  align-items: center;
  margin: 5px;
`;