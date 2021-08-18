import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
const App = () => {
  const items = [
    { title: "t1", content: "c1" },
    {
      title: "t2",
      content: "c2",
    },
    {
      title: "t3",
      content: "c3",
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
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
