import React from "react";

const TodoList = ({ tasks }) => {
  // console.log(tasks)
  return (
    <div>
      {/* TodoList */}
      {tasks?.map((el) => (
        <h3>{el}</h3>
      ))}
      {/* <h3>{tasks}</h3> */}
    </div>
  );
};

export default TodoList;
