function App() {
  return (
    <React.Fragment>
      <NavbarMobile />
      <FrontPage />
    </React.Fragment>
  )
}

function FrontPage () {
  return (
    <div className="flex main" id="frontpage">
      <div className="flex">
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p className="bodytext">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <button className="big-btn" id="frontpage-btn">Explore</button>
    </div>
  );
}

function NavbarMobile () {
  return (
    <div className="navbar">
      <img src="./assets/shared/logo.svg" />
      <div>
        <div id="languages">
          <p className="bodytext lang">PL</p>
          <p className="bodytext lang">EN</p>
        </div>    
        <img src="./assets/shared/icon-hamburger.svg" />
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

ReactDOM.render(<App />, document.getElementById("react-app"));
