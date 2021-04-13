import React, { useState } from "react";

// import TaskEdit from '@components/TaskEdit'
// import TaskItem from '@components/TaskItem'

const Task = ({ information, tasks, setTasks }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <p>Task List</p>
    // <p>
    //   {!edit ? (
    //     <TaskItem
    //       information={information}
    //       tasks={tasks}
    //       setTasks={setTasks}
    //       handleEdit={handleEdit}
    //     />
    //   ) : (
    //     <TaskEdit
    //       _id={information._id || ''}
    //       description={information.description || ''}
    //       tasks={tasks}
    //       setTasks={setTasks}
    //       handleEdit={handleEdit}
    //     />
    //   )}
    // </p>
  );
};

export default Task;
