import React, { useState } from "react";
import { Route } from "react-router-dom";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Header from "./Components/Header";
const App = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];
  const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
  ];
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
