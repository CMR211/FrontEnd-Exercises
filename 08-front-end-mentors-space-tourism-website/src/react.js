ReactDOM.render(<App />, document.getElementById("react-app"));









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
  
  // Current subpage state
  const [currentPage, setCurrentPage] = React.useState(1);

  // Global state of window size to determine various comonents visibility
  const windowWidth = useWindowDimensions();

  function getBackgroundImage () {
    const pages = ["home", "destination", "crew", "technology"];
    let page = pages[currentPage];
    let media = "desktop";
    if (windowWidth <= 1000) media = "tablet";
    if (windowWidth <= 600) media = "mobile";
    let result = `./assets/${page}/background-${page}-${media}.jpg`
    return result
  }

  return (
    <div style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundSize: "cover", width: "100%", height: "100%"}}>
      <Navbar 
        language={lang} 
        setLang={setLang} 
        windowWidth={windowWidth} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
      {currentPage === 0 ? <FrontPage language={lang} windowWidth={windowWidth} /> : null}
      {currentPage === 1 ? <DestinationPage language={lang} windowWidth={windowWidth} /> : null}
    </div>
  )
}










function Navbar ( {setLang, language, setCurrentPage, currentPage} ) {

  const [isActive, setActive] = React.useState(false);

  function isBigScreen () {
    return (window.innerWidth >= 768)
  }

  function toggleActive () { setActive(!isActive) }

  function goToPage(pagenumber) { setCurrentPage(pagenumber) }
  
  function MobileNavbar () {
    return (
        <div 
        id="mobile-navbar"
        style={{display: isActive ? "flex" : "none" }}>
          <div id="touch-space" onClick={toggleActive}>
            {/* empty space */}
          </div>
          <div onClick={() => goToPage(0)}>
            <p className="navtext">00</p>
            <p style={{color: (currentPage === 0) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.home[language]}</p>
          </div>
          <div onClick={() => goToPage(1)}>
            <p className="navtext">01</p>
            <p style={{color: (currentPage === 1) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.destination[language]}</p>
          </div>
          <div onClick={() => goToPage(2)}>
            <p className="navtext">02</p>
            <p style={{color: (currentPage === 2) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.crew[language]}</p>
          </div>
          <div onClick={() => goToPage(3)}>
            <p className="navtext">03</p>
            <p style={{color: (currentPage === 3) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.technology[language]}</p>
          </div>
        </div>
    )
  }

  function FullscreenNavbar () {
    return (
      <div id="fullscreen-navbar"
           style={{display: isBigScreen() ? "flex" : "none"}}>
        <div 
          onClick={() => setCurrentPage(0)}
          style={{borderBottom: (currentPage === 0) ? "solid 4px white" : "solid 4px transparent"}}>
          <p className="navtext">{DATA.headings.navbar.home[language]}</p>
        </div> 
        <div 
          onClick={() => setCurrentPage(1)}
          style={{borderBottom: (currentPage === 1) ? "solid 4px white" : "solid 4px transparent"}}>
          <p className="navtext">{DATA.headings.navbar.destination[language]}</p>
        </div>  
        <div 
          onClick={() => setCurrentPage(2)}
          style={{borderBottom: (currentPage === 2) ? "solid 4px white" : "solid 4px transparent"}}>
          <p className="navtext">{DATA.headings.navbar.crew[language]}</p>
        </div>  
        <div 
          onClick={() => setCurrentPage(3)}
          style={{borderBottom: (currentPage === 3) ? "solid 4px white" : "solid 4px transparent"}}>
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
      <FullscreenNavbar language={language} />
      <div 
      id="navbar-btn-container" 
      style={{display: isBigScreen() ? "none" : "block"}}>
        <button 
          className="btn-hamburger btn-lang" 
          onClick={toggleActive} 
          style={{
          display: (!isBigScreen() && !isActive) ? "block" : "none"}}>
          <img src="./assets/shared/icon-hamburger.svg" />
        </button>
        <button 
          className="btn-hamburger btn-lang" 
          onClick={toggleActive} 
          style={{
            display: (!isBigScreen() && isActive) ? "block" : "none",
            zIndex: 2}}>
              <img src="./assets/shared/icon-close.svg" />
          </button>
        </div>
    </div>
  )
}









function FrontPage ( {language, windowWidth} ) {
  return (
    <main id="frontpage">
      <div>
        <h5>{DATA.headings.frontpage.subheading[language]}</h5>
        <h1>{DATA.headings.frontpage.title[language]}</h1>
        <p className="bodytext">{DATA.headings.frontpage.paragraph[language]}</p>
      </div>
      <button className="big-btn ripple" id="frontpage-btn">{DATA.headings.frontpage.button[language]}</button>
    </main>
  );
}









function DestinationPage ( {language} ) {

  const [currentPlanet, setCurrentPlanet] = React.useState(0);


  return (
    <div id="destinationpage">
      <h5>
        <span>01</span>
        {DATA.headings.destinationpage.title[language]}
      </h5>
      <div>
        <img src={`./assets/destination/image-${DATA.destinations[currentPlanet].name[0]}.png`} />
        <div id="planet-navbar">
          <p onClick={() => setCurrentPlanet(0)} className="navtext">{DATA.destinations[0].name[language]}</p>
          <p onClick={() => setCurrentPlanet(1)} className="navtext">{DATA.destinations[1].name[language]}</p>
          <p onClick={() => setCurrentPlanet(2)} className="navtext">{DATA.destinations[2].name[language]}</p>
          <p onClick={() => setCurrentPlanet(3)} className="navtext">{DATA.destinations[3].name[language]}</p>
        </div>
        <h2>{DATA.destinations[currentPlanet].name[language]}</h2>
        <p className="bodytext">{DATA.destinations[currentPlanet].description[language]}</p>
        <div id="planet-details">
          <p className="navtext">{DATA.headings.destinationpage.distance[language]}</p>
          <h4>{DATA.destinations[currentPlanet].distance[language]}</h4>
          <p className="navtext">{DATA.headings.destinationpage.traveltime[language]}</p>
          <h4>{DATA.destinations[currentPlanet].travel[language]}</h4>
        </div>
      </div>
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


