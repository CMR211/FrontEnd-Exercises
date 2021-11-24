// New hook to get current viewport dimensions

function getWindowWidth() {
  return window.innerWidth;
}

function useWindowDimensions() {

  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    function handleResize() { setWindowWidth(getWindowWidth()); }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

function App() {

  // Global language state: 0 is english, 1 is polish
  const [lang, setLang] = React.useState(0);

  // Global state of window size to determine various comonents visibility
  const windowWidth = useWindowDimensions();

  return (
    <React.Fragment>
      <Navbar language={lang} setLang={setLang} windowWidth={windowWidth}/>
      <FrontPage language={lang} />
      {/* <Destination /> */}
    </React.Fragment>
  )
}

function Navbar ( {setLang, language} ) {

  const [isActive, setActive] = React.useState(false);

  function isBigScreen () {
    return (window.innerWidth >= 768)
  }

  function toggleActive () { setActive(!isActive) };
  
  function MobileNavbar () {
    return (
      <div 
      id="mobile-navbar"
      style={{display: isActive ? "flex" : "none" }}>
        <div>
          <p className="navtext">00</p>
          <p className="navtext">{DATA.headings.navbar.home[language]}</p>
        </div>
        <div>
          <p className="navtext">01</p>
          <p className="navtext">{DATA.headings.navbar.destination[language]}</p>
        </div>
        <div>
          <p className="navtext">02</p>
          <p className="navtext">{DATA.headings.navbar.crew[language]}</p>
        </div>
        <div>
          <p className="navtext">03</p>
          <p className="navtext">{DATA.headings.navbar.technology[language]}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="navbar">
      <MobileNavbar language={language} />
      <div>
      <img src="./assets/shared/logo.svg" />
        <div id="languages">
          <button className="btn-lang" onClick={() => setLang(1)}>PL</button>
          <button className="btn-lang" onClick={() => setLang(0)}>EN</button>
        </div>    
      </div>
      <button 
        className="btn-hamburger btn-lang" 
        onClick={toggleActive} 
        style={{
         display: isBigScreen() ? "none" : "block",
         display: isActive ? "none" : "block"}}>
        <img src="./assets/shared/icon-hamburger.svg" />
      </button>
      <button 
        className="btn-hamburger btn-lang" 
        onClick={toggleActive} 
        style={{
          display: isBigScreen() ? "none" : "block",
          display: isActive ? "block" : "none",
          zIndex: 2}}>
            <img src="./assets/shared/icon-close.svg" />
        </button>
    </div>
  )
}

function FrontPage ( {language} ) {

  return (
    <main id="frontpage">
      <div>
        <h5>{DATA.headings.frontpage.subheading[language]}</h5>
        <h1>{DATA.headings.frontpage.title[language]}</h1>
        <p className="bodytext">{DATA.headings.frontpage.paragraph[language]}</p>
      </div>
      <button className="big-btn" id="frontpage-btn">{DATA.headings.frontpage.button[language]}</button>
    </main>
  );
}

function Destination () {
  return (
    <div>

    </div>
  )
}

function DesignPage() {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <p class="subheading1">Subheading 1</p>
      <p class="subheading2">Subheading 1</p>
      <p class="navtext">Nav text</p>
      <p class="bodytext">Body text</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("react-app"));
