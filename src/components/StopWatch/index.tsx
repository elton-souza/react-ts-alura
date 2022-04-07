import { useEffect, useState } from "react";
import timeFormat from "../../util/timeFormat";
import Button from "../Button";
import { Task } from "../types/Task";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";

interface Props {
  selected: Task | undefined;
}
export interface Time {
  hourInSeconds: string;
  seconds: string;
}

export default function StopWatch({ selected }: Props) {
  const [time, setTime] = useState<Time>({ hourInSeconds: "00", seconds: "00" });

  useEffect(() => {
    if (selected) {
      setTime(timeFormat(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
