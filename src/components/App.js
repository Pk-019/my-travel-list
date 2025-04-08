import { useState } from "react";
import Header from "./header";
import Form from "./form";
import PackagingList from "./packaginglist";
import Item from "./item";
import Footer from "./footer";
export default App;

function App() {
  const [items, setItem] = useState([]);
  // const [showlist, setShowList] = useState(false);

  function HandleAddItems(item) {
    setItem((items) => [...items, item]);
    // console.log(item);
  }

  function HandleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id != id));
  }

  function HandleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={HandleAddItems} />
      <PackagingList
        items={items}
        onDeleteItems={HandleDeleteItem}
        OnToggleItem={HandleToggleItem}
        OnClearItem={setItem}
      />
      <Footer totalitems={items} />
    </div>
  );
}
