import { useState } from "react";

const Adder = ({ setList }) => {
  const [formData, setFormData] = useState({
    item: "",
    quantity: 0,
  });

  console.log(formData, "this is formData");
  const handleSubmit = (e) => {
    e.preventDefault();
    setList((currformData) => {
      console.log(currformData, "<--this is curr");
      const newItem = { item: formData.item, quantity: formData.quantity };
      console.log(newItem);
      const copyList = [...currformData];
      copyList.push(newItem);
      return copyList;
    });
    setFormData({
      item: "",
      quantity: 0,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          required
          value={formData.item}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          required
          value={formData.quantity}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Adder;
