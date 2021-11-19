const TOKEN = {
    name: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    price: 0.041,
    daysleft: 3,
    author: "Jules Wyvern",
    image: "./images/image-equilibrium.jpg",
    avatar: "./images/image-avatar.png",
}

const ICON = {
    ethereum: "./images/icon-ethereum.svg",
    view: "./images/icon-view.svg",
    clock: "./images/icon-clock.svg"
}

function App () {return(
    <div className="main-container">
        <Img src={TOKEN.image} name={TOKEN.name} />
        <Title title={TOKEN.name} description={TOKEN.description} />
        <Details price={TOKEN.price} daysleft={TOKEN.daysleft} />
        <Line />
        <Author author={TOKEN.author} avatar={TOKEN.avatar} />
    </div>
)}

function Img ({ src, name }) {
    const [isHover, setHover] = React.useState(false);
    const styles = {
        display: isHover ? "block" : "none",
        background: isHover ? "var(--colorcyan)" : "none",
        cursor: isHover ? "pointer" : "default",
    }
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <div 
        className="container-img" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <div id="overlay" style={styles}>
                <img src={ICON.view} alt="view" style={styles} />
            </div>
            <img id="img-token" src={src} alt={name} />
        </div>
    )
}

function Title ({ title, description }) {
    const [isHover, setHover] = React.useState(false);
    const styles = {
        color: isHover ? "var(--colorcyan)" : "inherit",
        cursor: isHover ? "pointer" : "default",
    }
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    return (
        <div>
            <h1 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={styles}>
                {title}
            </h1>
            <p>{description}</p>
        </div>
    )
}

function Details ({ price, daysleft }) {
    return (
        <div className="inrow details">
            <div className="inrow">
                <img src={ICON.ethereum} alt="ethereum" />
                <p id="price">{price} ETH</p>
            </div>
            <div className="inrow">
                <img src={ICON.clock} alt="timer" />
                <p>{daysleft} days left</p>
            </div>
        </div>
    )
}

function Line () {
    return (
        <div style={{margin: "0.5rem 0", borderBottom: "2px solid var(--colorline)", }} />
    )
}

function Author ({ avatar, author }) {
    const [isHover, setHover] = React.useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const imgstyle = {
        border: isHover ? "2px var(--colorsoftblue) solid" : "none",
        cursor: isHover ? "pointer" : "default",
    }
    const spanstyle = {
        color: isHover ? "var(--colorcyan)" : "var(--colorwhite)",
        cursor: isHover ? "pointer" : "default",
    }
    return (
        <div 
        className="inrow author" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <img src={avatar} alt={author} style={imgstyle}/>
            <p>Creation of <span style={spanstyle}>{author}</span></p>
        </div>
    )
}




ReactDOM.render (<App />, document.getElementById("react"));