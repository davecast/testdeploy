import React, { useState } from "react";

import TaskEdit from "../TaskEdit";
import TaskItem from "../TaskItem";

const Task = ({ information, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      {!edit ? (
        <TaskItem
          information={information}
          tasks={tasks}
          setTasks={setTasks}
          handleEdit={handleEdit}
        />
      ) : (
        <TaskEdit
          _id={information._id || ""}
          description={information.description || ""}
          tasks={tasks}
          setTasks={setTasks}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default Task;
