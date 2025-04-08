import { useState } from "react";
export default function Footer({ totalitems }) {
  if (totalitems.length === 0) {
    return <p className="stats">Let Pack The Bag And Explore The world ✈️</p>;
  }
  const itemtotal = totalitems.length;
  const itempacked = totalitems.filter((item) => item.packed).length;
  const packedpercentage = Math.round((itempacked / itemtotal) * 100);

  return (
    <footer className="stats">
      <em>
        {100 !== packedpercentage ? (
          <p>
            You have packed {itemtotal} items on your list , and you already
            packed {itempacked} ({packedpercentage}%){" "}
          </p>
        ) : (
          "Hey , you have got everything , now let's Go!!! 🚀"
        )}
      </em>
    </footer>
  );
}
