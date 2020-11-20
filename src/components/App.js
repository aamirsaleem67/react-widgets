import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is a dog?",
    content: `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`,
  },
  {
    title: "What kinds of dogs are there?",
    content: `There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.`,
  },
  {
    title: "How do you acquire a dog?",
    content: `
      Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
      `,
  },
];
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <div>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Toggle Dropdown
          </button>
          {showDropdown ? (
            <React.Fragment>
              <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              />
              <p style={{ color: `${selected.value}` }} className="text">
                The color is {selected.value}
              </p>
            </React.Fragment>
          ) : null}
        </div>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
