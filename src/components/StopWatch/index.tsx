import { useEffect, useState } from "react";
import timeFormat from "../../util/timeFormat";
import Button from "../Button";
import { Task } from "../types/Task";
import Clock from "./Clock";
import style from "./StopWatch.module.scss";

interface Props {
  selected: Task | undefined;
  handleSelected: () => void;
}

export default function StopWatch({ selected, handleSelected }: Props) {
  const [time, setTime] = useState<number>(0);
  const [enableButton, setEnableButton] = useState<boolean>(false);

  const startStopWatch = (stateTime: number) => {
    setTimeout(() => {
      if (stateTime > 0) {
        setTime(stateTime - 1);
        startStopWatch(stateTime - 1);
      } else {
        handleSelected();
        setEnableButton(false);
      }
    }, 1000);
  };

  useEffect(() => {
    if (selected) {
      setTime(timeFormat(selected.time));
    }
  }, [selected]);

  useEffect(() => {
    setEnableButton(true);
  }, [time]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button handleTime={() => enableButton && startStopWatch(time)}>
        Começar!
      </Button>
    </div>
  );
}
