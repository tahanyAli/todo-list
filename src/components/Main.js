import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import styled from "styled-components";
const Main = () => {
  const [input, setInput] = useState("");
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedItem = localStorage.getItem("complete");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || 0;
  });
  const [todoList, setTodoList] = useState(() => {
    const savedItem = localStorage.getItem("data");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });
  useEffect(() => {
    localStorage.setItem("complete", JSON.stringify(completedTasks));
  }, [completedTasks]);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todoList));
  }, [todoList]);
  const handleClear = () => {
    localStorage.clear();
    setTodoList("");
    setCompletedTasks(0)
  };
  return (
    <MainSection>
      <Form
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        completedTasks={completedTasks}
        setCompletedTasks={setCompletedTasks}
      />
      <Button type="clear" onClick={handleClear}>
        Clear All
      </Button>
    </MainSection>
  );
};

export default Main;
const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  background: white;
  width: 70px;
  color: palevioletred;
  font-size: 10px;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
