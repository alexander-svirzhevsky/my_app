import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        add one
      </button>
    </>
  );
};
