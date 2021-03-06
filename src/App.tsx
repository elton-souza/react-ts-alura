import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import style from "./App.module.scss";
import StopWatch from "./components/StopWatch";
import { Task } from "./components/types/Task";

function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [selected, setSelected] = useState<Task>();

  const selectTask = (taskSelected: Task) => {
    setSelected(taskSelected);
    if (!selected?.complete) {
      setTask((lastTasks) =>
        lastTasks.map((task) => ({
          ...task,
          selected: task.id === taskSelected.id ? true : false,
        }))
      );
    }
  };
  const handleSelected = () => {
    setTask((lastTasks) =>
      lastTasks.map((task) => ({
        ...task,
        complete: task.id === selected?.id ? true : false,
        selected: false,
      }))
    );
    setSelected(undefined);
  };
  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={task} selectTask={selectTask} />
      <StopWatch selected={selected} handleSelected={handleSelected} />
    </div>
  );
}

export default App;
