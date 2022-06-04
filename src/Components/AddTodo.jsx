import React, { useContext, useReducer } from "react";
import { TodoContext } from "../Context/TodoContext";
import TodoList from "./TodoList";


const reducer = (tasks, action) => {
  switch (action.type) {
    case "Add_Todo": {
      return ([...tasks,action.value]);
    }
    default: {
      return tasks;
    }
  }
};

const AddTodo = () => {
  const { value, handleOnChange } = useContext(TodoContext);
  const [tasks, dispatch] = useReducer(reducer, []);
console.log(tasks)
  return (
    <div>
      <h1>Add Todo</h1>

      <input type="text" name="" id="" onChange={(e) => handleOnChange(e)} />
      <button onClick={() => dispatch({ type: "Add_Todo", value })}>
        Add Todo
      </button>

      <div>
        <TodoList tasks={tasks}></TodoList>
      </div>
    </div>
  );
};

export default AddTodo;
