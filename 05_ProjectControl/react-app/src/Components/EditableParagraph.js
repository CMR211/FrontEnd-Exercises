import React from "react";

function EditableParagraph ({ title, data }) {

  const projekt = JSON.parse(localStorage.getItem("projekt"));

  const [parData, setParData] = React.useState(projekt[data]);
  const [isHover, setHover] = React.useState(false);
  const [isEditing, setEditing] = React.useState(false);
  
  const styles = {
    div: {
      background: (isHover) ? "#eee" : "transparent",
      padding: "1px 0",
    },
    title: {
      fontSize: "1.05rem",
      borderBottom: "1px solid #ddd",
      padding: 0,
      margin: "0.2rem 0",
      fontWeight: 500,
    },
    data: {
      padding: "0 0.5rem",
      margin: "0.2rem 0",
      color: "#666",
    },
    button: {
      display: (isHover) ? "inline" : "none",
      margin: "0 1rem",
      border: "none",
      cursor: "pointer",
    },
    textarea: {
      width: "100%",
      padding: "0.2rem",
    }
  }
  let btnText = isEditing ? "zapisz" : "edytuj";

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const handleClick = () => {
    isEditing ? setEditing(false) : setEditing(true);
  }

  const handleChange = (e) => {
    projekt[data] = e.target.value;
    localStorage.setItem("projekt", JSON.stringify(projekt));
    setParData(projekt[data]);
  }

  if (isEditing) {
    return (
      <div 
        style={styles.div} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
          <p style={styles.title}>{title}
            <span style={styles.button}
               onClick={handleClick}>
              ({btnText})
            </span>
          </p>
          <textarea 
            style={styles.textarea} 
            onChange={handleChange}
            defaultValue={parData}>
          </textarea>
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
            <span 
              style={styles.button}
              onClick={handleClick}>(edytuj)</span></p>
          <p style={styles.data}>{parData}</p>
      </div>
    )
  }
    
}

export default EditableParagraph;