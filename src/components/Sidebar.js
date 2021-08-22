import React from "react";
import SidebarElement from "./SidebarElement";

function Sidebar({ alphabetItem }) {
  function searchLetter(item) {
    if (typeof item == "string") {
      return item[item.indexOf(" ") + 1];
    } else {
      return item[0][item[0].indexOf(" ") + 1];
    }
  }

  return (
    <div className="sidebar">
      {alphabetItem.map((item, index) => (
        <SidebarElement
          key={index}
          name={item}
          letter={searchLetter(item)}
        ></SidebarElement>
      ))}
    </div>
  );
}

export default Sidebar;
