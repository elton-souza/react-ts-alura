import { Task } from "../types/Task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: Task[];
  selectTask: (taskSelected: Task) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tasks.length > 0 ? (
        <ul>
        {tasks?.map( task => (
          <Item key={task.id} {...task} selectTask={selectTask}/>
        ))}
      </ul>
      ) : (
        <span>Sem estudos adicionados :(</span>
      )}
    </aside>
  );
}

export default List;
