import React from "react";

function ButtonSmall(props) {
  const [isHover, setHover] = React.useState();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  let cursorStyle = "default";

  const buttonStyle = {
    cursor: cursorStyle,
  };

  let hoverText;
  isHover ? (hoverText = `${props.type.toUpperCase()}`) : "";
  isHover ? (cursorStyle = "pointer") : (cursorStyle = "default");

  return (
    <div>
      <button
        onClick={props.onClick}
        className="button-small"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img src={"./Icons/icon_" + props.type + ".svg"} />
          <span>{hoverText}</span>
        </div>
      </button>
    </div>
  );
}

export default ButtonSmall;
