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
      <NavbarMobile setLang={setLang} windowWidth={windowWidth}/>
      <FrontPage language={lang} />
      {/* <Destination /> */}
    </React.Fragment>
  )
}

function NavbarMobile ( {setLang} ) {

  const [fullwidth, setFullwidth] = React.useState(true);

  const displayStyle = {
    display: fullwidth ? "none" : "block",
  }

  function isBigScreen () {
    return (window.innerWidth >= 768)
  }

  function toggleFullwidth () { setFullwidth(!fullwidth) };
  
  function Fullnavbar () {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className="navbar">
      <div>
      <img src="./assets/shared/logo.svg" />
        <div id="languages">
          <button className="btn-lang" onClick={() => setLang(1)}>PL</button>
          <button className="btn-lang" onClick={() => setLang(0)}>EN</button>
        </div>    
      </div>
      <button className="btn-hamburger btn-lang" onClick={toggleFullwidth} style={{display: isBigScreen() ? "none" : "block"}}>
        <img src="./assets/shared/icon-hamburger.svg" />
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
