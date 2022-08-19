import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import moment from "moment";
import Timer from "./components/Timer";

// let duration = moment.duration(1, "hours");
// let hours = "01:";
// let minutes = "00:";
// let seconds = "00";
//let hms = hours + minutes + seconds;

function App() {
  const [duration, setDuration] = useState(moment.duration(1,"hours"));
  // const [hms, setHms]= useState("01:00:00");
  setInterval(() => {
    setDuration(duration.subtract(1,'s'));
  }, 1000);
  //const [hmsStr, setHmsStr] = useState('01:00:00');

  // useEffect(() => {
  //   console.log(duration);
  
  //   setHmsStr(hours + minutes + seconds);
  // }, [duration])

  // const setTime = () => {
  //   // this will be the prev state of the duration
  //   // console.log(duration);
  // }
  //console.log(duration);


  // let [hmsStr, setHmsStr] = useState(hours + minutes + seconds);

  // setTimeout(() => {
  //   duration = duration.subtract(moment.duration(1, "s"));
  //   hours = '00:';
  //   minutes = duration._data.minutes > 9 ? `${duration._data.minutes.toString()}:` : `0${duration._data.minutes.toString()}:`;
  //   seconds = duration._data.seconds > 9 ? duration._data.seconds.toString() : `0${duration._data.seconds.toString()}`;
  // }, 1000);

  // to use for this
  
  // useEffect(() => {
  //   console.log(duration._data);
  //   setHmsStr(hours + minutes + seconds);
  //   console.log(hmsStr);
  // }, []);
  //const [hms, setHms] = useState(hmsStr);
  // 1 hour and 10 minutes converted to miliseconds
  // const oneHour = 3600000;
  // const tenMinutes = 600000;
  //   const setTime = () => {
  //     //console.log(hms);
  //   //useEffect(() => {},[])
  //   duration.subtract(moment.duration(1,'s'));
  //   hours = '00:'
  //   minutes = duration._data.minutes > 9 ? `${duration._data.minutes.toString()}:` : `0${duration._data.minutes.toString()}:`;
  //   seconds = duration._data.seconds > 9 ? duration._data.seconds.toString() : `0${duration._data.seconds.toString()}`;
  //   //console.log(moment(duration).format('LTS'))
  //   //console.log(duration);
  //   //setHmsStr(hours+minutes+seconds);

  //   //setHms(hmsStr)
  //   //console.log(hmsStr);

  //   return
  // }
  //   // useEffect(() => {

  //   // },[hmsStr])
  //   setTimeout(() => {
  //     setTime();
  //   },1000);

  // called 2x on start as it's called on creation and in useEffect below
  //   const showTime = () => {
  //     // let tstMoment = moment().format();
  //     // console.log(tstMoment);

  //     // let tstEndOfHour = tstMoment + oneHour;
  //     // console.log(tstEndOfHour);

  //     // let currentTime = new Date();
  //     // console.log(currentTime);

  //     // let futureTime = Date(currentTime.getMilliseconds() + oneHour)
  //     // console.log(futureTime)

  // //    let duration = moment.duration(1, 'hours');
  //    // console.log(duration);
  //   //  console.log(duration._milliseconds);
  // //    duration.get('minutes');
  //     //let hms = { hours: duration._data.hours, minutes: duration._data.minutes, seconds: duration._data.seconds}
  //     //let timeInHms = Date.format("%02d:%02d:%02d",hms.hours, hms.minutes, hms.seconds);
  //     console.log(hms);
  //     let subtractSecond = moment.duration(1,'s');
  //   }

  // useEffect(() => {
  //   showTime()
  // }, [])

  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <Timer duration={duration} />
        <p>1 hour work | 10 minutes break</p>
      </header>
    </div>
  );
}

export default App;
