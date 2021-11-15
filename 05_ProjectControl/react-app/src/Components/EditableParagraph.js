import React from "react";

function EditableParagraph ({ title, data }) {

  const [parData, setParData] = React.useState(window.$projekt[data]);

  const styles = {
    title: {
      borderBottom: "1px solid gray",
    },
    data: {
      
    }
  }

    return (
      <div>
        <p style={styles.title}>{title}</p>
        <p style={styles.data}>{parData}</p>
      </div>
    )
}

export default EditableParagraph;