import { Task } from "../../types/Task";
import style from "./item.module.scss";

interface Props extends Task {
  selectTask: (taskSelected: Task) => void;
}

function Item({ title, time, id, complete, selected, selectTask }: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${ complete ? style.itemCompletado : ""}`}
      onClick={() => !complete && selectTask({
        title,
        time,
        complete,
        selected: true,
        id,
      })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
export default Item;
