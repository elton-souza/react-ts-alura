import { FormEvent, useState } from "react";
import Button from "../Button";
import { Task } from "../types/Task";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";
interface Props {
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
}
function Form({ setTask }: Props) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00");
  const [complete, setComplete] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();
    setTask((task) => [
      ...task,
      {
        id: uuidv4(),
        title: title,
        time: time,
        selected: selected,
        complete: complete,
      },
    ]);
    setTitle("");
    setTime("00:00");
  };
  return (
    <form className={style.novaTarefa} onSubmit={handleCreateTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo:</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar? "
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
