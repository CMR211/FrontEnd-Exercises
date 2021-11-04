const project = new Object();


function ChangeableText (props) {

    const divID = props.id;

    const [renameState, setRenameState] = React.useState();
    const [inputText, setInputText] = React.useState();

    const handleInput = (event) => {
        project[divID] = event.target.value;
        setInputText(project[divID]);
        console.log(project);
    }

    const inputSize = {
        display: "block", 
        fontSize: "1.5em",
        fontFamily: "inherit",
        flexGrow: "1",
        padding: "0",
        margin: "auto 0.5em",
        border: "none"
    }

    const divStyle = {
        display: "flex",
        width: "20em",
        backgroundColor: "yellow",
        padding: "0",
        margin: "0",
    }

    if (renameState) {
        return (
            <div id={divID} style={divStyle}>
                <input 
                    value= {project[divID] || "Enter project name..."} 
                    onChange={handleInput}
                    style={inputSize}/>
                <ButtonSmall 
                    type="confirm" 
                    onClick={() => setRenameState(false)}
                />
            </div>
        )
    } else {
        return (
            <div id={divID} style={divStyle}>
                <p style={inputSize}> 
                    {inputText} 
                </p>
                <ButtonSmall 
                    type="rename" 
                    onClick={() => setRenameState(true)} 
                />
            </div>
        )
    }
}

function ButtonSmall (props) {
    
    const [isHover, setHover] = React.useState();

    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }

    let hoverText;
    isHover ? hoverText = `${props.type.toUpperCase()}` : "";

    return (
        <div>
            <button 
            onClick={props.onClick}
            className="button-small"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                    <img src={"./Icons/icon_" + props.type + ".svg"} />
                    <span>{hoverText}</span>
                </div>
            </button>
        </div>
    )
}

function App () {
    return (
            <div className="main-container">
                <div className="second-container" id="header">
                    <h1>Informacje podstawowe</h1>
                    <div className="third-container" id="header-sub-container">
                        <div className="fourth-container">
                            <h2>Inwestor/zamawiający</h2>
                            <ChangeableText id="inwestor" />    
                        </div>
                        <div className="fourth-container">
                            <h2>Nazwa zadania</h2>
                            <ChangeableText id="nazwaZadania" />
                        </div>
                        <div className="fourth-container">
                            <h2>Działki</h2>
                        </div>
                    </div>
                </div>
                <div className="second-container" id="phase1">
                    <h1>Informacje do projektowania</h1>
                    <div className="third-container" id="informacje-do-projektowania">
                    </div>
                    <h1>Zaawansowanie projektu</h1>
                    <div className="third-container" id="zaawansowanie-projektu">

                    </div>
                </div>
                <div className="second-container" id="phase2">
                    DIV Z UGODNIENIAMI
                </div>
                <div className="second-container" id="phase3">
                    DIV ZE ZGŁOSZENIEM
                </div>
                <div className="second-container" id="footer">
                    DIV FOOTER
                </div>
            </div>
    )
}

const root = document.getElementById("react-app");

ReactDOM.render(<App />, root);

