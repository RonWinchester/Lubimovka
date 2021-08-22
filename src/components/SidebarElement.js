import React from "react";

function SidebarElement({ letter, name }) {
  return (
    <div className="sidebar__element">
      <h2 className="sidebar__title">{letter}</h2>
      {typeof name == "string" ? (
        <p className="sidebar__subtitle">{name}</p>
      ) : (
        name.map((item,index) => <p className="sidebar__subtitle" key={index}>{item}</p>)
      )}
    </div>
  );
}

export default SidebarElement;
