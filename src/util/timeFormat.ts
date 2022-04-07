const timeFormat = (time: string = "") => {
  const [hour, minute, second] = time.split(":");
  const hourFormated = Number(hour) * 3600;
  const minuteFormated = Number(minute) * 60;
  const secondFormated = Number(second);

  const hourInSeconds = String(Math.floor((hourFormated + minuteFormated + secondFormated) / 60)) ;
  const seconds = String((hourFormated + minuteFormated + secondFormated) % 60)

  return { hourInSeconds, seconds}
  
};

export default timeFormat;
