import React from 'react';
import './App.css';
import ItemBar, { IItemBar } from "./ItemBar/ItemBar"

function App() {

  const itemBars: IItemBar[] = [
    {
      title: "Bar",
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  ]

  let itemElements = itemBars.map((itemBar: IItemBar, index: React.Key | null | undefined) => {
    return (
      <ItemBar {...itemBar} key={index} />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        {itemElements}
      </header>
    </div>
  );
}

export default App;
