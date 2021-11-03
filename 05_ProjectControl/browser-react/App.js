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
        display: "inline", 
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
    return (
        <button 
        onClick={props.onClick}
        className="button-small">
            <img 
            src={"./Icons/icon_" + props.type + ".svg"} />
        </button>
    )
}

function App () {
    return (
        <React.Fragment>
            <div className="project-info">
                <ChangeableText id="nazwaZadania" />
                <ChangeableText id="inwestor" />
            </div>
        </React.Fragment>
    )
}

const root = document.getElementById("react-app");

ReactDOM.render(<App />, root);

