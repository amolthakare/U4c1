import React from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";
// import Tasks from "../Tasks/Tasks";

const AddTask = (todo) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button">+</button>
      <Tasks></Tasks>
    </div>
  );
};

export default AddTask;
