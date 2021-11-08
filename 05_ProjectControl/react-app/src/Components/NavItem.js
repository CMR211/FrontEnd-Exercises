import React from "react";

function NavItem({id, className, name, activePanel, setActivePanel}) {

  let boxShadow;
  if (activePanel === name) {
    boxShadow = "-6px 0 red";
  } else {
    boxShadow = "none";
  }

  const style = {
    padding: "1em",
    margin: "1em",
    fontSize: "1em",
    border: "none",
    boxShadow: boxShadow,
  };

  return (
    <button
      style={style}
      className={className}
      id={id}
      onClick={() => setActivePanel(name)}>
      {name}
    </button>
  );
}

export default NavItem;