import { useState } from "react";
import trash from "../assets/trash.png";
import styled from "styled-components";
import { addTodo, clearTodo, deleteTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todo.todos);
  const [newTodo, setNewTodo] = useState("");
  // console.log(newTodo);
  const handleNewTodo = () => {
    if (newTodo) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      setNewTodo("");
    }
  };
  const handleClearTodos = () =>{
    dispatch(clearTodo());
  }
  return (
    <Container>
      <h1>Todo App</h1>
      <Wrapper>
        <input
          type="text"
          placeholder="Enter your thoughts..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleNewTodo}>Add Todo</button>
      </Wrapper>
      {selector.map((todo) => (
        <TodoItem key={todo.id}>
          <div className="todoText">{todo.text}</div>
          <div
            className="deleteIcon"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            <img src={trash} alt="delete" />
          </div>
        </TodoItem>
      ))}

      <ClearButton onClick={handleClearTodos}>Clear All</ClearButton>
    </Container>
  );
};

export default TodoApp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 20px;
  border-radius: 40px;
  background: transparent;
  box-shadow: 0 4px 20px -2px #e9e9e9;

  input {
    width: 330px;
    height: 40px;
    margin: 10px 4px 0 0;
    padding: 10px;
    font: bold 13px "lucida sans", "trebuchet MS", "Tahoma";
    border: 0;
    background: #fff;
    border-radius: 40px;
    border-top-style: none;
    box-shadow: 2px 3px 4px 2px #aaa;
  }

  input:focus {
    outline: 0;
  }

  input::-webkit-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    padding-left: 20px;
  }

  input:-moz-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
  }

  input:-ms-input-placeholder {
    color: #999;
    font-weight: normal;
    font-style: italic;
    border-style: none;
  }

  button {
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    margin-top: 10px;
    height: 40px;
    width: 110px;
    font: 13px/40px "lucida sans", "trebuchet MS", "Tahoma";
    color: #fff;
    text-transform: uppercase;
    background: #198cff;
    border-radius: 40px;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
  }
  button:active,
  button:focus {
    background: #198cff;
    outline: 0;
  }

  button:focus:before,
  button:active:before {
    border-right-color: #c42f2f;
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 400px;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  background-color: rgba(25, 140, 255, 0.09);

  .todoText {
    width: 50%;
    text-align: left;
  }
  .deleteIcon {
    width: 50%;
    text-align: right;
    background: transparent;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;

    img {
      width: 25px;
    }
  }
`;

const ClearButton = styled.button`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  text-align: right;
`;
