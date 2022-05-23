import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import tasks from "../data/tasks.json";

// const


const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair

  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {/* <Task></Task> */}
        {tasks.map((item) => {
          return(
            <Task key={item.id} {...item}></Task>
          )
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
