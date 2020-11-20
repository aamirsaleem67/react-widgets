import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const languages = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];
function Translate() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [text, setText] = useState("");

  return (
    <div className="ui segment container">
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={languages}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={selectedLanguage.value} text={text} />
    </div>
  );
}

export default Translate;
