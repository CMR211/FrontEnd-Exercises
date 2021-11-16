import React from "react";
import editbtn from "../Icons/edit_black_24dp.svg";
import copybtn from "../Icons/content_copy_black_24dp.svg";
import donebtn from "../Icons/done_black_24dp.svg";
import copyToClipboard from "../Functions/CopyToClipboard.js";

function EditText({ id, className, fontSize, data, children }) {

  const projekt = JSON.parse(localStorage.getItem("projekt"));
  if (projekt[data] === undefined) projekt[data] = "";

  const [isHover, setHover] = React.useState(false);
  const [isEditing, setEditing] = React.useState(false);
  const [innerText, setInnerText] = React.useState(projekt[data])

  const inputLines = (data === "inwestor") ? "1" : "3";

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCopy = () => {
    copyToClipboard(projekt[data]);
  };

  const handleDone = () => {
    setEditing(false);
    setHover(false);
  }

  const handleChange = (event) => {
    projekt[data] = event.target.value;
    localStorage.setItem("projekt", JSON.stringify(projekt));
    setInnerText(projekt[data]);
  }

  const titleStyle = {
    padding: "0 1rem",
    color: "white",
    textAlign: "right",
    fontSize: (data === "nazwa") ? "1.5rem" : "1.25rem",
    fontWeight: "bold",
    }

  const divStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
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

  const inputStyle = {
    margin: "0", 
    padding: "5px", 
    width: "80%",
    fontSize: (data === "nazwa") ? "1.25rem" : "1rem",
    fontWeight: "bold",
    borderRadius: "5px",
    resize: "none"
  };

  if (isEditing) {
    return (
      <div
        style={divStyle}>

        <textarea 
          rows={inputLines} 
          onChange={handleChange}
          style={inputStyle}
          spellCheck="true">
        </textarea>
        <button onClick={handleDone} style={btnStyle}>
          <img alt="Zatwierdź" src={donebtn} />
        </button>

      </div>
    )
  } else {
    return (
      <div
        style={divStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>

        {/* Copy and Edit Buttons */}
        <div style={{ position: "absolute", top: "30%", right: "20%", display: "flex" }}>
          <button onClick={handleEdit} style={btnStyle}>
            <img alt="Edytuj" src={editbtn} />
          </button>
          <button onClick={handleCopy} style={btnStyle}>
            <img alt="Kopiuj" src={copybtn} />
          </button>
        </div>
  
        {/* Children visible in non-editing state */}
        <div style={{display: isEditing ? "none" : "block", opacity: isHover ? "20%" : "100%" }}>
          <p style={titleStyle}>{innerText}</p>
        </div>
         
      </div>
    );
  }
  
}

export default EditText;
