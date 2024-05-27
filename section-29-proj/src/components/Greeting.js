import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChanged] = useState(false);
  const changeTextHandler = () => {
    setChanged(true);
  };
  return (
    <div>
      <h2> Test h2</h2>
      {!changedText ? <Output>Test para</Output> : <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
