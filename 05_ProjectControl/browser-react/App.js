const project = new Object();
project.mpzp = "KDW 2.01";

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
        fontSize: "1em",
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

function LabeledContainer (props) {
    return(
        <div id={props.id} className={props.className}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

function EditableText (props) {

    const [value, setValue] = React.useState(project[props.data]);
    const [opacity, setOpacity] = React.useState("20%");
    const [mouseStyle, setMouseStyle] = React.useState("default");

    const divStyle = {
        display: "flex",
        width: "100%",
    }

    const buttonStyle = {
        opacity: opacity,
        margin: "0 0 0 0.5em",
        cursor: mouseStyle,
    }

    const handleEdit = () => {
        project[props.data] = prompt(props.prompt) || project[props.data];
        setValue(project[props.data]);
    }

    const handleMouseEnter = () => {
        setOpacity("100%");
        setMouseStyle("pointer");
    }

    const handleMouseLeave = () => {
        setOpacity("20%");
        setMouseStyle("default");
    }

    return (
        <div style={divStyle}>
            <p>{props.label}: {value}</p>
            <button 
                style={buttonStyle} 
                onClick={handleEdit} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                (edytuj)
            </button>
        </div>
    )
}

function EditableLink (props) {

    const [mouseStyle, setMouseStyle] = React.useState("default");

    const handleMouseEnter = () => {
        setMouseStyle("pointer");
    }

    const handleMouseLeave = () => {
        setMouseStyle("default");
    }

    const style = {
        cursor: mouseStyle,
        width: "3em"
    }

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
    )
}


function App () {
    return (
            <div className="main-container">
                <LabeledContainer id="container-top" className="paper" title="Informacje podstawowe">
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
                </LabeledContainer>

                <LabeledContainer id="container-left-up" className="paper" title="Informacje do projektowania">
                    <EditableText 
                        label="Link do YT" 
                        data="youtube"
                        prompt="Podaj link do filmu na youtube.com:"
                    />
                    <EditableText 
                        label="MPZP" 
                        data="mpzp"
                        prompt="Podaj zagospodarowanie przestrzenne dla tej drogi:"
                    />
                    <EditableText 
                        label="Publiczna" 
                        data="czyPubliczna"
                        prompt="Czy droga jest drogą publiczną? (tak/nie) Jeśli tak możesz podać jej nadany numer."
                    />
                    <EditableText 
                        label="Szerokość jezdni" 
                        data="szerokoscJezdni"
                        prompt="Podaj wymaganą przez zamawiającego szerokość jezdni."
                    />
                
                </LabeledContainer>

                <LabeledContainer id="container-left-middle" className="paper" title="Linki">
                    <EditableLink />
                </LabeledContainer>

                <LabeledContainer id="container-left-down" className="paper" title="Progres w rysunkach">
                    <input type="checkbox" name="mpzp"/>
                    <label for="mpzp">Mapa poglądowa</label>
                </LabeledContainer>

                <LabeledContainer id="container-middle" className="paper" title="Uzgodnienia">

                </LabeledContainer>

                <LabeledContainer id="container-right" className="paper" title="Zgłoszenie">

                </LabeledContainer>

                <LabeledContainer id="container-bottom" className="paper" title="Nawigacja">

                </LabeledContainer>

            </div>
    )
}

const root = document.getElementById("react-app");

ReactDOM.render(<App />, root);

