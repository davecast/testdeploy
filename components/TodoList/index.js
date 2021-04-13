import React, { useState, useEffect } from "react";

import Task from "../Task";

import { getTasks } from "../../services/tasks";

const TodoList = ({ tasks, setTasks, loadingTasks, setLoadingTasks }) => {
  // useEffect(() => {
  //   setLoadingTasks(true)
  //   getTasks().then((res) => {
  //     setTasks([...res.data.tasks] as any)
  //     setLoadingTasks(false)
  //   })
  // }, [])

  // if (loadingTasks) {
  //   return <div>Loading...</div>
  // }

  return (
    <section className="TaskList">
      Todo List
      {/* {tasks.length > 0 &&
        tasks
          .map(({ _id, description, status }: TTask) => {
            return (
              <Task
                key={_id}
                information={{ _id, description, status }}
                tasks={tasks}
                setTasks={setTasks}
              />
            )
          })
          .reverse()} */}
    </section>
  );
};

export default TodoList;
