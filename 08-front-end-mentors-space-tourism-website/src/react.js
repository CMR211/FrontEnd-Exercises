let lang = 0;

function App() {

  const [lang, setLang] = React.useState(0);

  return (
    <React.Fragment>
      <NavbarMobile setLang={setLang} />
      <FrontPage language={lang} />
      {/* <Destination /> */}
    </React.Fragment>
  )
}

function NavbarMobile ( {setLang} ) {
  return (
    <div className="navbar">
      <img src="./assets/shared/logo.svg" />
      <div>
        <div id="languages">
          <button className="btn-lang" onClick={() => setLang(1)}>PL</button>
          <button className="btn-lang" onClick={() => setLang(0)}>EN</button>
        </div>    
        <img src="./assets/shared/icon-hamburger.svg" />
      </div>
    </div>
  )
}

console.log(typeof DATA);
console.table(DATA);

function FrontPage ( {language} ) {

  return (
    <div className="flex main" id="frontpage">
      <div className="flex">
        <h5>{DATA.headings.frontpage.subheading[language]}</h5>
        <h1>{DATA.headings.frontpage.title[language]}</h1>
        <p className="bodytext">{DATA.headings.frontpage.paragraph[language]}</p>
      </div>
      <button className="big-btn" id="frontpage-btn">{DATA.headings.frontpage.button[language]}</button>
    </div>
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
