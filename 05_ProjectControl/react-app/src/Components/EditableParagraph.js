import React from "react";

function EditableParagraph ({ title, data }) {

  const [parData, setParData] = React.useState(window.$projekt[data]);
  const [isHover, setHover] = React.useState(false);
  const [isEditing, setEditing] = React.useState(false);

  const styles = {
    div: {
      background: (isHover) ? "#eee" : "transparent",
      padding: "1px 0",
    },
    title: {
      borderBottom: "1px solid #ddd",
      padding: 0,
      margin: "0.2rem 0",
      fontWeight: 500,
    },
    data: {
      padding: 0,
      margin: "0.2rem 0",
    },
    button: {
      display: (isHover) ? "inline" : "none",
      margin: "0 1rem",
      border: "none",
      cursor: "pointer",
    },
    textarea: {
      width: "100%",
      padding: "1rem",
    }
  }
  let btnText = isEditing ? "zapisz" : "Edytuj";

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleClick = () => {
    isEditing ? setEditing(false) : setEditing(true);
  }

  if (isEditing) {
    return (
      <div 
        style={styles.div} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
          <p style={styles.title}>{title}<p
              style={styles.button}
              onClick={handleClick}>({btnText})</p></p>
          <textarea style={styles.textarea}></textarea>
      </div>
    )
  } else {
    return (
      <div 
        style={styles.div} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
          <p 
            style={styles.title}>{title}
            <p 
              style={styles.button}
              onClick={handleClick}>(edytuj)</p></p>
          <p style={styles.data}>{parData}</p>
      </div>
    )
  }
    
}

export default EditableParagraph;