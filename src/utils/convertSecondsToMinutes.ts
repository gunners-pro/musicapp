function convertSecondsToMinutes(timeInSeconds: number) {
  const totalSeconds = Math.round(timeInSeconds);
  let seconds = totalSeconds % 60;
  const minutes = (totalSeconds - seconds) / 60;

  return `${minutes}:${seconds < 10 ? String(seconds).padStart(2, '0') : seconds}`;
}

export { convertSecondsToMinutes };
