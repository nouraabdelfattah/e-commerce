import React, { useState, useEffect, createContext } from "react";

const TimerContext = createContext();

function useTimer(deadline, interval = 1000) {
  const SECOND = 1_000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((_timespan) => _timespan - interval);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  // Update timespan if the initial deadline value changes
  useEffect(() => {
    setTimespan(new Date(deadline) - Date.now());
  }, [deadline]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60)
  };
}

function TimerProvider({ children }) {
  return (
    <TimerContext.Provider value={{ useTimer }}>
      {children}
    </TimerContext.Provider>
  );
}

export { TimerProvider, TimerContext };
