import React, { useState, useEffect } from "react";
// We can use more than 1 useEffects on our component
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  // useEffect(() => {
  //   if (value > 0) {
  //     document.title = `New Messages (${value})`;
  //   }
  // }, );

  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={increaseValue}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
