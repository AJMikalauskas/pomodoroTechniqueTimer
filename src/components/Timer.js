import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";

const Timer = (props) => {
  const { duration } = props;
  const [hms, setHms] = useState("01:00:00");

  setTimeout(() => {
    let hours = duration._data.hours > 0 ? "01:" : "00:";
    let minutes =
    duration._data.minutes > 9 ? `${duration._data.minutes.toString()}:` : `0${duration._data.minutes.toString()}:`;
    let seconds =
    duration._data.seconds > 9 ? `${duration._data.seconds.toString()}` : `0${duration._data.seconds.toString()}`;
   // console.log(hours + minutes + seconds);
    setHms(hours + minutes + seconds);
  }, 1000)
//   const setHmsFn = () => {
//     let hours = duration._data.hours > 0 ? "01:" : "00:";
//     let minutes =
//     duration._data.minutes > 9 ? `${duration._data.minutes.toString()}:` : `0${duration._data.minutes.toString()}:`;
//     let seconds =
//     duration._data.seconds > 9 ? `${duration._data.seconds.toString()}` : `0${duration._data.seconds.toString()}`;
//     console.log(hours + minutes + seconds);
//     setHms(hours + minutes + seconds);
//   };

//   useEffect(() => {
//     console.log(duration._data.hours);
//     console.log(duration._data.minutes);
//     console.log(duration._data.seconds);
//     setHmsFn(
//       duration._data.hours,
//       duration._data.minutes,
//       duration._data.seconds
//     );
//   }, [duration]);

  return (
    <>
      <Button >Test</Button>
      <h2>{hms}</h2>
    </>
  );
};

export default Timer;
