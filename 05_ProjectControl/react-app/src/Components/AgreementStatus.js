import React from "react";
import iconNotNeeded from "../Icons/not_needed_black_24dp.svg";
import iconSend from "../Icons/send_black_24dp.svg";
import iconNotSend from "../Icons/not_send_black_24dp.svg";
import iconReceived from "../Icons/received_black_24dp.svg";

function AgreementStatus({ title }) {

  const [status, setStatus] = React.useState("notNeeded");
  const [isDivHover, setDivHover] = React.useState(false);

  const handleMouseEnterDiv = () => {
    setDivHover(true);
  };

  const handleMouseLeaveDiv = () => {
    setDivHover(false);
  };

  const styles = {
    div: {
      background: (isDivHover) ? "#eee" : "transparent",
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
    img: {
      objectPosition: 0,
    },
    
  };

  function iconStatus() {
    if (status === "notNeeded") return iconNotNeeded;
    if (status === "notSend") return iconNotSend;
    if (status === "send") return iconSend;
    return iconReceived;
  }

  const ContentOnHover = () => {
    if (isDivHover) {
      return (
        <div style={{margin: "0 0.3rem", display: "flex", flexFlow: "row wrap", justifyContent: "space-around"}}>
          <StatusToChoose icon={iconReceived} text="Otrzymano" />
          <StatusToChoose icon={iconSend} text="Wysłano" />
          <StatusToChoose icon={iconNotSend} text="Nie wysłano" />
          <StatusToChoose icon={iconNotNeeded} text="Niewymagane" />
        </div>
      );
    }
    return (
      <div style={styles.iconWrapper}>
        <img style={styles.img} src={iconStatus()} /><p>Niewymagane</p>
      </div>
    );
  };

  return (
    <div
    style={styles.div}
    onMouseEnter={handleMouseEnterDiv}
    onMouseLeave={handleMouseLeaveDiv}>
      <p style={styles.title}>{title}</p>
      <ContentOnHover />
    </div>
  )
}

function StatusToChoose ({ icon, text }) {

  const [isIconHover, setIconHover] = React.useState(false);

  const style = {
    display: "flex",
    flexFlow: "row-wrap",
    alignItems: "center",
    margin: "0.1rem 0.3rem",
    borderRadius: "0.3rem",
    padding: "0.3rem",
    background: (isIconHover) ? "white" : "transparent",
    cursor: (isIconHover) ? "pointer" : "default",
  }

  const handleMouseEnterIcon = () => {
    setIconHover(true);
  }

  const handleMouseLeaveIcon = () => {
    setIconHover(false);
  }

  return (
    <div style={style} onMouseEnter={handleMouseEnterIcon} onMouseLeave={handleMouseLeaveIcon}>
      <img src={icon} />
      <p style={{margin: "0 0.5rem"}}>{text}</p>
    </div>
  )
}

export default AgreementStatus;
