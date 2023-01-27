import React from "react";
import styled from "styled-components";
function Todo() {
  const todoData = [
    {
      id: "1",
      title: "청소하기",
      completed: true,
    },
    {
      id: "2",
      title: "공부하기",
      completed: true,
    },
    {
      id: "3",
      title: "운동하기",
      completed: false,
    },
  ];

  return (
    <TodoContainer>
      <TodoBlock>
        <TodoTitle>
          <h1>할 일 목록</h1>
        </TodoTitle>
        {todoData.map((data) => (
          <CheckBoxWaper key={data.id}>
            <CheckBox type="checkbox" defaultChecked={data.completed} />
            {data.title}
            <CheckButton>X</CheckButton>
          </CheckBoxWaper>
        ))}
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
  text-decoration: none;
`;
const CheckBox = styled.input``;
const CheckButton = styled.button`
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
`;
