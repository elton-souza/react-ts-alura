import style from "../List.module.scss";
function Item({ titulo, tempo }: { titulo: string; tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{titulo}</h3>
      <span>{tempo}</span>
    </li>
  );
}
export default Item;
