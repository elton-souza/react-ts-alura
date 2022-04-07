import { Time } from "..";
import style from "./Clock.module.scss";

interface Props {
  time: Time;
}
export default function Clock({ time }: Props) {
  const [startHour, endHour] = time?.hourInSeconds.padStart(2, "0");
  const [startSecond, endSecond] = time?.seconds.padStart(2, "0");
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
