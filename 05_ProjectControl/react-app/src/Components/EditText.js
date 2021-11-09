import React from "react";
import editbtn from "../Icons/edit_black_24dp.svg";
import copybtn from "../Icons/content_copy_black_24dp.svg";

function EditText({ id, className, fontSize, children }) {
  const [isHover, setHover] = React.useState(false);

  const handleEdit = () => {

  }

  const handleCopy = () => {
    
  }

  const divStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative" ,

  };

  const btnStyle = {
    border: "none",
    fontSize: "2em",
    fontFamily: "inherit",
    cursor: isHover ? "pointer" : "default",
    display: isHover ? "block" : "none",
    zIndex: "1",
    margin: "0.25em",
  };

  return (
    <div
      style={divStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
        <div style={{position: "absolute", right: "5rem", display: "flex"}}>
          <button onClick={handleEdit} style={btnStyle}><img alt="Edytuj" src={editbtn}/></button>
          <button onClick={handleCopy} style={btnStyle}><img alt="Kopiuj" src={copybtn}/></button>
        </div>
      <div style={{opacity: isHover ? "20%" : "100%"}}>{children}</div>
    </div>
  );
}

export default EditText;
