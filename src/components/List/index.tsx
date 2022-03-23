import Item from "./Item";
import style from "./List.module.scss";
function List() {
  const tarefas = [
    {
      titulo: "React",
      tempo: "02:00:00",
    },
    {
      titulo: "JavaScript",
      tempo: "01:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <Item key={index} {...tarefa}/>
        ))}
      </ul>
    </aside>
  );
}

export default List;
