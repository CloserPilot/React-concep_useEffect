import { useState, useEffect } from "react";

export default function ProgressBar({timer}) {

  const [remainingTime, setRemainingTime] = useState(timer);

  //Se usa en el useEffect para que solo se ejecute una vez, si no en cada renderizado de useState, se estaria volviendo a crear
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval')
      setRemainingTime((prevTime) => {
        return prevTime - 10
      })
    }, 10);

    return () => {
      clearInterval(interval);
      console.log('Interval Clean')
    }
  }, []);


  return (
    <progress value={remainingTime} max={timer} />
  )
}