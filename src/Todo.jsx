import React, { useState } from "react";
import styled from "styled-components";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [check, setCheck] = useState([]);

  const handleClick = (id) => {
    let newTodoData = todo.filter((data) => data.id !== id);
    setTodo(newTodoData);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  const handleCompleChange = (id, index) => {
    let newTodoData = todo.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodo(newTodoData);
    setCheck({ ...check, [id]: todo[index].completed });
    console.log(check);
  };
  return (
    <TodoContainer>
      <TodoBlock>
        <TodoTitle>
          <h1>할 일 목록</h1>
        </TodoTitle>
        {todo.map((data, index) => (
          <CheckBoxWaper check={check[data.id]} key={data.id}>
            <CheckBox
              type="checkbox"
              onChange={() => handleCompleChange(data.id, index)}
              defaultChecked={false}
            />
            {data.title}
            <DeleteButton
              onClick={() => {
                handleClick(data.id);
              }}
            >
              X
            </DeleteButton>
          </CheckBoxWaper>
        ))}
        <TodoInputBox onSubmit={handleSubmit}>
          <TodoInput
            type="text"
            value={inputValue}
            placeholder="해야 할 일을 입력하세요."
            onChange={handleChange}
          />
          <TodoSubmit type="submit" value="입력" onClick={handleSubmit} />
        </TodoInputBox>
      </TodoBlock>
    </TodoContainer>
  );
}
export default Todo;

const TodoContainer = styled.div`
  margin: auto;
  max-width: 600px;
`;

const TodoBlock = styled.div`
  padding: 30px;
  margin-top: 50px;
  background: #fff;
  border-radius: 10px;
  box-shadow: -9px 17px 13px rgb(0 0 0/16%);
`;

const TodoTitle = styled.div``;

const CheckBoxWaper = styled.div`
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  text-decoration: ${(props) => (props.check ? "line-through" : "none")};
`;

const CheckBox = styled.input``;
const DeleteButton = styled.button`
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;
const TodoInputBox = styled.form`
  display: flex;
`;
const TodoInput = styled.input`
  flex: 10;
  padding: 5px;
`;
const TodoSubmit = styled.input`
  flex: 1;
`;
