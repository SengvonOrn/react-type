import { useState, useRef, useEffect } from "react";

export const Mutableref = () => {
  const [timer, setTime] = useState(0);
  const interValRef = useRef<number | null>(null);
  const stopTime = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTime((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTime();
    };
  }, []);
  return (
    <>
      <h1>HookTimer - {timer} -</h1>
      <button onClick={() => stopTime()}>Click me</button>
    </>
  );
};
