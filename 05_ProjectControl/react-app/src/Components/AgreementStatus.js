import React from "react";
import iconNotNeeded from "../Icons/not_needed_black_24dp.svg";
import iconSend from "../Icons/send_black_24dp.svg";
import iconNotSend from "../Icons/not_send_black_24dp.svg";
import iconReceived from "../Icons/received_black_24dp.svg";

const projekt = JSON.parse(localStorage.getItem("projekt"));

function AgreementStatus({ title, data }) {
  
  if (projekt[data] === undefined) {projekt[data] = {status: "notNeeded", date: ""}};

  const [status, setStatus] = React.useState(projekt[data].status);
  const [isDivHover, setDivHover] = React.useState(false);
  const [agreementDate, setAgreementDate] = React.useState(projekt[data].date);

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
      color: "green",
    },
    
  };

  function iconStatus() {
    if (status === "notNeeded") return iconNotNeeded;
    if (status === "notSend") return iconNotSend;
    if (status === "send") return iconSend;
    return iconReceived;
  }

  function textStatus() {
    if (status === "notNeeded") return "Niewymagane";
    if (status === "notSend") return "Nie wysłano";
    if (status === "send") return "Wysłano";
    return "Odebrano";
  }
  

  const ContentOnHover = () => {
    if (isDivHover) {
      return (
        <div style={{margin: "0 0.3rem", display: "flex", flexFlow: "row wrap", justifyContent: "space-around"}}>
          <StatusToChoose 
            topData={data}
            data="received"
            icon={iconReceived} 
            text="Odebrano" 
            changeStatus={setStatus} 
            status={status}
            setDivHover={setDivHover}
            changeDate={setAgreementDate} />
          <StatusToChoose 
            topData={data}
            data="send"
            icon={iconSend} 
            text="Wysłano" 
            changeStatus={setStatus} 
            status={status}
            setDivHover={setDivHover} 
            changeDate={setAgreementDate} />
          <StatusToChoose 
            topData={data}
            data="notSend"
            icon={iconNotSend} 
            text="Nie wysłano" 
            changeStatus={setStatus} 
            status={status}
            setDivHover={setDivHover} 
            changeDate={setAgreementDate} />
          <StatusToChoose 
            topData={data}
            data="notNeeded"
            icon={iconNotNeeded} 
            text="Niewymagane" 
            changeStatus={setStatus} 
            status={status}
            setDivHover={setDivHover} 
            changeDate={setAgreementDate} />
        </div>
      );
    }

    return (
      <div style={{margin: "0.5rem 0.3rem", display: "flex", flexFlow: "row wrap", }}>
        <img 
          alt={status}
          style={styles.img} 
          src={iconStatus()} />
        <p style={{margin: "0 0.3rem", color: "#666"}}>{textStatus()} {agreementDate}</p>
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

function StatusToChoose ({ topData, icon, text , data, changeStatus, status, changeDate, setDivHover }) {

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
    border: "none",
  }

  const handleMouseEnterIcon = () => {
    setIconHover(true);
  }

  const handleMouseLeaveIcon = () => {
    setIconHover(false);
  }

  const handleClick = () => {
    setIconHover(false);
    setDivHover(false);
    if (data === "send" || data === "received") {
      projekt[topData].status = data;
      projekt[topData].date = (prompt("Podaj datę"))};
    if (data === "notSend" || data === "notNeeded") {
      projekt[topData].status = data;
      projekt[topData].date = ""};
    localStorage.setItem("projekt", JSON.stringify(projekt));
    changeStatus(projekt[topData].status);
    changeDate(projekt[topData].date)
  }

  return (
    <button 
    style={style} 
    onMouseEnter={handleMouseEnterIcon} 
    onMouseLeave={handleMouseLeaveIcon}
    onClick={handleClick}>
      <img alt={data} src={icon} />
      <p style={{margin: "0 0.5rem"}}>{text}</p>
    </button>
  )
}

export default AgreementStatus;
