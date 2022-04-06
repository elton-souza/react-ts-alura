import { Task } from "../../types/Task";
import style from "./item.module.scss";

interface Props extends Task {
  selectTask: (taskSelected: Task) => void;
}

function Item({ title, time, id, complete, selected, selectTask }: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
        selectTask({
          title,
          time,
          complete,
          selected: true,
          id,
        })
      }
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </li>
  );
}
export default Item;
