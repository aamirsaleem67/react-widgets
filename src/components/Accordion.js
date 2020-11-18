import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onSelect = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };

  const isActive = (index) => {
    return index === activeIndex;
  };

  const accordionList = items.map((item, index) => (
    <React.Fragment key={index}>
      <div
        onClick={() => onSelect(index)}
        className={`title ${isActive(index) && "active"}`}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${isActive(index) && "active"}`}>
        <div className={`transition ${isActive(index) ? "visible" : "hidden"}`}>
          {item.content}
        </div>
      </div>
    </React.Fragment>
  ));

  return <div className="ui styled accordion">{accordionList}</div>;
}

export default Accordion;
