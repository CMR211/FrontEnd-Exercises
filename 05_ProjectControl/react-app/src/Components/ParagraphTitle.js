import React from "react";

function ParagraphTitle( {title} ) {

  const style = {
    borderBottom: "1px solid gray",
  }

  return (
    <div style={style}>
      {title}
    </div>
  )
}

export default ParagraphTitle;
