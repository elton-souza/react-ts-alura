import style from "./Clock.module.scss";

interface Props {
  time: number;
}
export default function Clock({ time }: Props) {
  const [startHour, endHour] = String(Math.floor(time / 60)).padStart(2, "0");
  const [startSecond, endSecond] = String(time % 60).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{startHour}</span>
      <span className={style.relogioNumero}>{endHour}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{startSecond}</span>
      <span className={style.relogioNumero}>{endSecond}</span>
    </>
  );
}
