import React, { useState, useRef } from "react";

import { addTask } from "../../services/tasks";

const NewTodo = ({ task, setTask, tasks, setTasks }) => {
  const $toDoInput = useRef(null);

  const handleOnChange = () => {
    setTask($toDoInput?.current?.value || "");
  };

  const handleAddToTask = async () => {
    if (task !== "") {
      await addTask({
        description: task,
        status: "not-completed",
      }).then((res) => {
        setTasks([...tasks, res.data]);
      });

      setTask("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddToTask();
    }
  };

  return (
    <div className="Add">
      <input
        className="Add__input"
        ref={$toDoInput}
        onKeyDown={handleEnter}
        onChange={handleOnChange}
        type="text"
        name="task"
        value={task}
        placeholder="Add task"
      />
      <button className="Add__button" type="button" onClick={handleAddToTask}>
        +
      </button>
    </div>
  );
};

export default NewTodo;
