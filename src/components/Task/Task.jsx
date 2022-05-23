import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";

const Task = (i) => {
  // NOTE: do not delete `data-cy` key value pair
  // const onDelete= (id) => {

  // }
  const {id,text,done,count}=i;


  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />

      <div data-cy="task-text" className={styles.Task}>

          <p>{id}</p>
          <p>{text}</p>
          <p>{done}</p>
          <p>{count}</p>

      </div>

      {/* Counter here */}
      <Counter></Counter>
      <button data-cy="task-remove-button" >X</button>
    </li>
  );
};

export default Task;
