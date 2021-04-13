import React, { useState, useEffect, useRef } from "react";
import { updateTask } from "../../services/tasks";

const TaskEdit = ({ _id, description, tasks, setTasks, handleEdit }) => {
  const $editTask = useRef(null);

  const [editTask, setEditTask] = useState(description);

  useEffect(() => {
    if ($editTask) {
      $editTask?.current?.focus();
    }
  }, []);

  const handleChange = () => {
    setEditTask($editTask?.current?.value || "");
  };

  const handleSave = async () => {
    await updateTask(_id, { description: editTask });
    setTasks(
      tasks.map((item) => {
        if (item._id === _id) {
          return {
            ...item,
            description: editTask,
          };
        } else {
          return item;
        }
      })
    );
    handleEdit();
  };
  const handleCancel = () => {
    handleEdit();
  };

  return (
    <div className="Task">
      <input
        className="Edit__input"
        ref={$editTask}
        type="text"
        value={editTask}
        onChange={handleChange}
      />
      <div className="Task__actions">
        <button
          className="Task__button"
          onClick={handleSave}
          disabled={description === editTask}
        >
          <i className="far fa-save"></i>
        </button>
        <button className="Task__button" onClick={handleCancel}>
          <i className="far fa-window-close"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskEdit;
