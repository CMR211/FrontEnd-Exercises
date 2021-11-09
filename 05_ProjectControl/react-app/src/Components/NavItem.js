import React from "react";
import {useSpring, animated} from "react-spring";

function NavItem({id, className, name, activePanel, setActivePanel}) {

  const [isHover, setHover] = React.useState(false);
  
  const myAnimation = useSpring({
    boxShadow: (activePanel === name) ? "-10px 0px 0 -2px white" : "0 0px 0 -2px white"
  });

  const style = {
    padding: "1em",
    margin: "1em",
    fontSize: "1em",
    color: (isHover) ? ("black") : ("white"),
    fontWeight: "bold",
    border: "none",
    background: (isHover) ? ("white") : ("none"),
    cursor: (isHover) ? ("pointer") : ("default"),
    // boxShadow: (activePanel === name) ? "-10px 0px 0 -2px white" : "none",
    // myAnimation,
  };

  return (
    <animated.button
      style={Object.assign(style, myAnimation)}
      className={className}
      id={id}
      onClick={() => setActivePanel(name)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {name}
    </animated.button>
  );
}

export default NavItem;