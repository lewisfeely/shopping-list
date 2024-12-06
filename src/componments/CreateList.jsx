import { useState } from "react";
import Adder from "./adder";

const Createlist = () => {
  const [list, setList] = useState([
    {
      item: "rice",
      quantity: 300,
    },
    {
      item: "bread",
      quantity: 100,
    },
    {
      item: "popcorn",
      quantity: 200,
    },
  ]);

  return (
    <>
      <ol>
        {list.map((listItem, index) => {
          return (
            <li key={index}>
              {listItem.item}: {listItem.quantity}
            </li>
          );
        })}
      </ol>
      <Adder setList={setList} />
    </>
  );
};

export default Createlist;
