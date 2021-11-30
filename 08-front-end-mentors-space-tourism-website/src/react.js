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
  const [currentPage, setCurrentPage] = React.useState(0);

  // Global state of window size to determine various comonents visibility
  const windowWidth = useWindowDimensions();

  // Background image depending on image resolution and current page
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
      {currentPage === 2 ? <CrewPage language={lang} windowWidth={windowWidth} /> : null}
      {currentPage === 3 ? <TechnologyPage language={lang} windowWidth={windowWidth} /> : null}
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
          <div onClick={() => {goToPage(0); setActive(false)}}>
            <p className="navtext">00</p>
            <p style={{color: (currentPage === 0) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.home[language]}</p>
          </div>
          <div onClick={() => {goToPage(1); setActive(false)}}>
            <p className="navtext">01</p>
            <p style={{color: (currentPage === 1) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.destination[language]}</p>
          </div>
          <div onClick={() => {goToPage(2); setActive(false)}}>
            <p className="navtext">02</p>
            <p style={{color: (currentPage === 2) ? "gray" : "white"}}
              className="navtext">{DATA.headings.navbar.crew[language]}</p>
          </div>
          <div onClick={() => {goToPage(3); setActive(false)}}>
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









function FrontPage ( {language} ) {
  return (
    <main id="frontpage">
      <div>
        <h5>{DATA.headings.frontpage.subheading[language]}</h5>
        <h1>{DATA.headings.frontpage.title[language]}</h1>
        <p className="bodytext">{DATA.headings.frontpage.paragraph[language]}</p>
      </div>
      <button className="big-btn ripple" id="frontpage-btn">{DATA.headings.frontpage.button[language]}</button>
      <footer>
        <p className="bodytext">A challenge by <a href="https://www.frontendmentor.io/challenges">Frontend Mentor.io</a></p>
        <p className="bodytext">Completed by <a href="https://www.cmr211.github.com">Bartosz Surma</a></p>
      </footer>
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
        <img src={`./assets/destination/image-${DATA.destinations[currentPlanet].name[0].toLowerCase()}.png`} />
        <div>
          <div id="planet-navbar">
            <p 
              onClick={() => setCurrentPlanet(0)} 
              className="navtext"
              style={{
                borderBottom: (currentPlanet === 0) ? "2px solid white" : "var(--border-style)",
                color: (currentPlanet === 0) ? "white" : "rgba(255, 255, 255, 0.6)"}}
              >{DATA.destinations[0].name[language]}
            </p>
            <p 
              onClick={() => setCurrentPlanet(1)} 
              className="navtext"
              style={{
                borderBottom: (currentPlanet === 1) ? "2px solid white" : "var(--border-style)",
                color: (currentPlanet === 1) ? "white" : "rgba(255, 255, 255, 0.6)"}}
              >{DATA.destinations[1].name[language]}
            </p>
            <p 
              onClick={() => setCurrentPlanet(2)} 
              className="navtext"
              style={{
                borderBottom: (currentPlanet === 2) ? "2px solid white" : "var(--border-style)",
                color: (currentPlanet === 2) ? "white" : "rgba(255, 255, 255, 0.6)"}}
              >{DATA.destinations[2].name[language]}
            </p>
            <p 
              onClick={() => setCurrentPlanet(3)} 
              className="navtext"
              style={{
                borderBottom: (currentPlanet === 3) ? "2px solid white" : "var(--border-style)",
                color: (currentPlanet === 3) ? "white" : "rgba(255, 255, 255, 0.6)"}}
              >{DATA.destinations[3].name[language]}
            </p>
          </div>
          <h2>{DATA.destinations[currentPlanet].name[language]}</h2>
          <p className="bodytext">{DATA.destinations[currentPlanet].description[language]}</p>
          <div className="border-bottom"></div>
          <div id="planet-details">
            <div>
              <p className="navtext">{DATA.headings.destinationpage.distance[language]}</p>
              <h4>{DATA.destinations[currentPlanet].distance[language]}</h4>
            </div>
            <div>
              <p className="navtext">{DATA.headings.destinationpage.traveltime[language]}</p>
              <h4>{DATA.destinations[currentPlanet].travel[language]}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}










function CrewPage ( {language} ) {

  const [currentCrew, setCurrentCrew] = React.useState(0);

  return(
    <div id="crewpage">
      <h5>
        <span>02</span>
        {DATA.headings.crewpage.title[language]}
      </h5>
      <div id="crewpage-img-div">
        <img src={DATA.crew[currentCrew].images.png} />
      </div>
      <div id="crewpage-btn-div">
        <button style={{background: (currentCrew === 0) ? "white" : "rgba(255,255,255,0.4"}} onClick={() => setCurrentCrew(0)} className="btn-circle"></button>
        <button style={{background: (currentCrew === 1) ? "white" : "rgba(255,255,255,0.4"}} onClick={() => setCurrentCrew(1)} className="btn-circle"></button>
        <button style={{background: (currentCrew === 2) ? "white" : "rgba(255,255,255,0.4"}} onClick={() => setCurrentCrew(2)} className="btn-circle"></button>
        <button style={{background: (currentCrew === 3) ? "white" : "rgba(255,255,255,0.4"}} onClick={() => setCurrentCrew(3)} className="btn-circle"></button>
      </div>
      <div id="crewpage-bio-div">
        <h4>{DATA.crew[currentCrew].role[language]}</h4>
        <h3>{DATA.crew[currentCrew].name}</h3>
        <p className="bodytext">{DATA.crew[currentCrew].bio[language]}</p>
      </div>
    </div>
  )
}









function TechnologyPage ( {language, windowWidth} ) {

  const [currentTech, setCurrentTech] = React.useState(0); 

  return (
    <div id="technologypage">
      <h5>
        <span>03</span>
        {DATA.headings.technologypage.title[language]}
      </h5>
      <div id="tech-div">
        {(windowWidth >= 1300) ? 
          <img src={DATA.technology[currentTech].images.portrait} /> : 
          <img src={DATA.technology[currentTech].images.landscape} /> }
        <div id="tech-nav-div">
          <button className="tech-nav-btn" onClick={() => setCurrentTech(0)}><h4>1</h4></button>
          <button className="tech-nav-btn" onClick={() => setCurrentTech(1)}><h4>2</h4></button>
          <button className="tech-nav-btn" onClick={() => setCurrentTech(2)}><h4>3</h4></button>
        </div>
        <div id="tech-text">
          <h5>{DATA.headings.technologypage.terminology[language]}</h5>
          <h3>{DATA.technology[currentTech].name[language]}</h3>
          <p className="bodytext">{DATA.technology[currentTech].description[language]}</p>
        </div>
      </div>
    </div>
  )
}
  
  
  






// CSS Styles 

// function DesignPage() {
//   return (
//     <div>
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading 3</h3>
//       <h4>Heading 4</h4>
//       <h5>Heading 5</h5>
//       <p class="subheading1">Subheading 1</p>
//       <p class="subheading2">Subheading 1</p>
//       <p class="navtext">Nav text</p>
//       <p class="bodytext">Body text</p>
//     </div>
//   );
// }