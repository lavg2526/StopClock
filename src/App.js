import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [hrs, setHrs] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [startFlag, setStartFlag] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if (startFlag) {
        setSec((sec) => sec + 1);
      }
    }, 1000);

    if (sec > 59) {
      setSec(0);
      setMin((min) => min + 1);
    }
    if (min > 59) {
      setMin(0);
      setHrs((hrs) => hrs + 1);
    }
    return () => clearInterval(timer);
  }, [sec, min, hrs, startFlag]);

  const handleStart = () => {
    setStartFlag(true);
  };
  const handleStop = () => {
    setStartFlag(false);
  };
  return (
    <div className="App">
      <h1>Stop Clock</h1>
      <div>
        {hrs} : {min}: {sec}
      </div>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  );
}
