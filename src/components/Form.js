import React from 'react'
import styled from 'styled-components';
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
        <FormSection onSubmit={handleSubmit}>
            <Input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter new task" required />
            <Button primary type="submit">Add Task</Button>
        </FormSection>
    )
}

export default Form;
const FormSection = styled.form`
text-align: center;
`;
const Input = styled.input`
   &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor:pointer;
`;
