import React from "react";

function EditText({ id, className, children }) {

  const [isHover, setHover] = React.useState(false);

  const style = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "90%",
  }

  if (isHover) {
    return (
      <div style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <button>edit</button>
        {children}
      </div>
    );
  } else {
    return (
        <div style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          {children}
        </div>
      );
  }
}

export default EditText;
