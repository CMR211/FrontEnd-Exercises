const project = new Object();
project.mpzp = "KDW 2.01";
project.nazwa =
  "Przebudowa drogi wojeódzkiej nr 441 polegająca na budowie chodnika wzdłuż ulicy Kaliskiej w miejsocowści Syców";

const layout = new Object();
layout.activePanel = "Projektowanie";

function ChangeableText(props) {
  const divID = props.id;

  const [renameState, setRenameState] = React.useState();
  const [inputText, setInputText] = React.useState();

  const handleInput = (event) => {
    project[divID] = event.target.value;
    setInputText(project[divID]);
    console.log(project);
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
          value={project[divID] || "Enter project name..."}
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

function ButtonSmall(props) {
  const [isHover, setHover] = React.useState();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  let cursorStyle = "default";

  const buttonStyle = {
    cursor: cursorStyle,
  };

  let hoverText;
  isHover ? (hoverText = `${props.type.toUpperCase()}`) : "";
  isHover ? (cursorStyle = "pointer") : (cursorStyle = "default");

  return (
    <div>
      <button
        onClick={props.onClick}
        className="button-small"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <img src={"./Icons/icon_" + props.type + ".svg"} />
          <span>{hoverText}</span>
        </div>
      </button>
    </div>
  );
}

function LabeledContainer(props) {
  return (
    <div id={props.id} className={props.className}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

function EditableText(props) {
  const [value, setValue] = React.useState(project[props.data]);
  const [opacity, setOpacity] = React.useState("20%");
  const [mouseStyle, setMouseStyle] = React.useState("default");

  const divStyle = {
    display: "flex",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    opacity: opacity,
    margin: "0 0 0 0.5em",
    cursor: mouseStyle,
  };

  const handleEdit = () => {
    project[props.data] = prompt(props.prompt) || project[props.data];
    setValue(project[props.data]);
  };

  const handleMouseEnter = () => {
    setOpacity("100%");
    setMouseStyle("pointer");
  };

  const handleMouseLeave = () => {
    setOpacity("20%");
    setMouseStyle("default");
  };

  return (
    <div style={divStyle}>
      <p>
        {props.label}: {value}
      </p>
      <button
        style={buttonStyle}
        onClick={handleEdit}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        (edytuj)
      </button>
    </div>
  );
}

function EditableLink(props) {
  const [mouseStyle, setMouseStyle] = React.useState("default");

  const handleMouseEnter = () => {
    setMouseStyle("pointer");
  };

  const handleMouseLeave = () => {
    setMouseStyle("default");
  };

  const style = {
    cursor: mouseStyle,
    width: "3em",
  };

  return (
    <a href="https://www.youtube.com" target="_blank">
      <img
        src="./Icons/youtube.svg"
        alt="youtube"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </a>
  );
}

function NavBar(props) {

  return (
    <LabeledContainer
      id="container-navbar"
      className="paper"
      title={<ChangeableText id="nazwa"/>}> 
      <div style={{display: "flex", flexFlow: "row", justifyContent: "center"}}>
        <NavItem name="Projektowanie" activePanel={props.activePanel} changePanel={props.changePanel}/>
        <NavItem name="Uzgodnienia" activePanel={props.activePanel}  changePanel={props.changePanel}/>
        <NavItem name="Zgłoszenie" activePanel={props.activePanel}  changePanel={props.changePanel}/>  
      </div>        
    </LabeledContainer>
  )
}

function NavItem(props) {

  let border;
  if (props.activePanel === props.name) {
    border = "2px solid black"
  };
  
  const style = {
    padding: "1em",
    margin: "1em",
    borderRadius: "6px",
    fontSize: "1em",
    border: border,
  }

  return (
    <button style={style} className="btn-navitem" id={`btn-navitem-${props.name}`} onClick={() => props.changePanel(props.name)}>
      {props.name}
    </button>
  )
}

function ProjectContainer (props) {

  const [activePanel, setActivePanel] = React.useState("Uzgodnienia");

  function changePanel(i) {
    setActivePanel(i);
  }

  if (activePanel == "Projektowanie") {
    return (
      <div>
        <NavBar activePanel={activePanel} changePanel={changePanel}/>
        <LabeledContainer title="Wymagania zamawiającego" className="paper">
          <p>asd</p>
        </LabeledContainer>
      </div>
    )
  }

  if (activePanel == "Uzgodnienia") {
    return (
      <div>
        <NavBar activePanel={activePanel} changePanel={changePanel}/>
        <p>zxc</p>
      </div>
    )
  }

  if (activePanel == "Zgłoszenie") {
    return (
      <div>
        <NavBar activePanel={activePanel} changePanel={changePanel}/>
        <p>qwe</p>
      </div>
    )
  }

}

function App() {
  return (
    <React.Fragment>
      <ProjectContainer />    
    </React.Fragment>
  );
}

const root = document.getElementById("react-app");

ReactDOM.render(<App />, root);
