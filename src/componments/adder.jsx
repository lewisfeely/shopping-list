import { useState } from "react";

const Adder = ({ setList }) => {
  const [input, setinput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setinput((currList) => {
      const newItem = { item: input, quantity: input };
      const copyList = [...currList];
      copyList.push(newItem);
      return copyList;
    });
    setinput("");
  };
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="number" required />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Adder;
