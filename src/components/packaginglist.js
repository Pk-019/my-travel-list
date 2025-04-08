import { useState } from "react";
import Item from "./item";

export default function PackagingList({
  items,
  onDeleteItems,
  OnToggleItem,
  OnClearItem,
}) {
  const [sortitem, setSortItem] = useState("input");

  let sorteditem;

  if ("input" === sortitem) sorteditem = items;
  if ("description" === sortitem)
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if ("packed" === sortitem)
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={onDeleteItems}
            toggleitem={OnToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value="" onChange={(e) => setSortItem(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button
          onClick={() => {
            const confirmed = window.confirm(
              "Are You Sure You Want To Delete All Itesm!?"
            );
            if (confirmed) OnClearItem([]);
          }}
        >
          Clear the list
        </button>
      </div>
    </div>
  );
}
