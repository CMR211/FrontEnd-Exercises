import React from "react";

function NavItem({id, className, name, activePanel, setActivePanel}) {

  const [isHover, setHover] = React.useState(false);
  
  const style = {
    padding: "1em",
    margin: "1em",
    fontSize: "1em",
    color: (isHover) ? ("black") : ("white"),
    fontWeight: "bold",
    border: "none",
    background: (isHover) ? ("white") : ("none"),
    cursor: (isHover) ? ("pointer") : ("default"),
    boxShadow: (activePanel === name) ? "-10px 0px 0 -2px white" : "none",
    transition: "box-shadow 500ms 500ms ease, background 500ms ease, color 500ms ease",
  };

  return (
    <button
      style={style}
      className={className}
      id={id}
      onClick={() => setActivePanel(name)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {name}
    </button>
  );
}

export default NavItem;