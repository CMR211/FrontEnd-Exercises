import React from "react";

function LabeledContainer({ id, className, title, children, }) {
  return (
    <div id={id} className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default LabeledContainer;
