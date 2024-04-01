import React, { useState } from "react";
import myArray from "../Data/Information";
import Button from "./Button";

const Task1 = () => {
  const [data, setData] = useState(myArray);
  const [display, setDisplay] = useState(10);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const showIncrement = () => {
    if (display < data.length) setDisplay(display + 2);
  };
  const addValue = () => {
    setData([...data, value1]);
    setValue1("");
  };

  const delValue = () => {
    const indexToDelete = parseInt(value2, 10) - 1;
    if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < data.length) {
      const newArr = data.filter((item, index) => index !== indexToDelete);
      setData(newArr);
      setValue2("");
    }
  };

  return (
    <>
      {data &&
        data.length > 0 &&
        data
          .slice(0, display)
          .map((item, index) => <div key={index}>{item}</div>)}

      <Button func={showIncrement} color="primary" />
      <br />
      <input
        style={{ margin: "10px" }}
        value={value1}
        type="number"
        onChange={(event) => setValue1(event.target.value)}
      />
      <br />
      <Button func={addValue} color="success" />

      <br />
      <input
        style={{ margin: "10px" }}
        value={value2}
        type="number"
        onChange={(event) => setValue2(event.target.value)}
      />
      <Button func={delValue} color="danger" />
    </>
  );
};

export default Task1;
