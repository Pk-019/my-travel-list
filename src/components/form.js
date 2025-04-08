import { useState } from "react";
export default function Form({ onAddItems }) {
  const [itemno, setItemNo] = useState(1);
  const [itemName, setItemname] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    if (!itemName) return;

    const newdata = {
      description: itemName,
      quantity: itemno,
      id: Date.now(),
      packed: false,
    };

    console.log(newdata);
    onAddItems(newdata);

    setItemNo(1);
    setItemname("");
  }

  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What does you need for your trip?</h3>

      <select
        value={itemno}
        onChange={(e) => setItemNo(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (
            num //This is for creating the select type option range.
          ) => (
            <option value={Number(num)} key={num}>
              {num}
            </option>
          )
        )}
      </select>

      <input
        type="text"
        value={itemName}
        onChange={(e) => {
          setItemname(e.target.value);
        }}
      />

      <button onClick={HandleSubmit}>Add</button>
    </form>
  );
}
