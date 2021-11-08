import React from "react";
import ButtonSmall from "./ButtonSmall";


function ChangeableText(props) {
  const divID = props.id;

  const [renameState, setRenameState] = React.useState();
  const [inputText, setInputText] = React.useState();

  const handleInput = (event) => {
    window.$projekt[divID] = event.target.value;
    setInputText(window.$projekt[divID]);
  };

  const inputSize = {
    display: "block",
    fontSize: "1em",
    flexGrow: "1",
    padding: "0",
    margin: "auto 0.5em",
    border: "none",
  };

  const divStyle = {
    display: "flex",
    width: "20em",
    padding: "0",
    margin: "0",
  };

  if (renameState) {
    return (
      <div id={divID} style={divStyle}>
        <input
          value={window.$projekt[divID] || "Enter project name..."}
          onChange={handleInput}
          style={inputSize}
        />
        <ButtonSmall type="confirm" onClick={() => setRenameState(false)} />
      </div>
    );
  } else {
    return (
      <div id={divID} style={divStyle}>
        <p style={inputSize}>{inputText}</p>
        <ButtonSmall type="rename" onClick={() => setRenameState(true)} />
      </div>
    );
  }
}

export default ChangeableText;