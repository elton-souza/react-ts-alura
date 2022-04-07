const timeFormat = (time: string = "") => {
  const [hour, minute, second] = time.split(":");
  const hourFormated = Number(hour) * 3600;
  const minuteFormated = Number(minute) * 60;
  const secondFormated = Number(second);

  return hourFormated + minuteFormated + secondFormated;
};

export default timeFormat;
