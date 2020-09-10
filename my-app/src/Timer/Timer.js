import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toTimeString()
  );
  useEffect(
    () => {
      //this function will be executed whenever the component is mounted & updated
      const timerId = setInterval(() => {
        setCurrentTime(new Date().toTimeString());
      }, 1000);
      return () => {
        //this function will be executed whenever the component is unmounted
        if (timerId) clearInterval(timerId);
      };
    },
    [] /* list the dependencies which when changed we want the component to updated */
  );
  return <div>{currentTime}</div>;
};

export default Timer;
