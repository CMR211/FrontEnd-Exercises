


function App () {

  const COLORS = {
    light: {
      text: "hsl(200, 15%, 8%)",
      background: "hsl(0, 0%, 98%)",
      elements: "hsl(0, 0%, 100%)",
      input: "hsl(0, 0%, 52%)",
    },
    dark: {
      text: "hsl(0, 0%, 100%)",
      background: "hsl(207, 26%, 17%)",
      elements: "hsl(209, 23%, 22%)",
      input: "hsl(0, 0%, 100%)",
    }
  }

  const [colorMode, setColorMode] = React.useState("light");

  const outerStyle = {
    margin: "2rem",
    maxWidth: "40rem",
    background: COLORS[colorMode].background,
  }

  const innerStyle

  return(
    <div style={outerStyle}>
      <header>
        <h1>Where in the world?</h1>
        <div>
          <button>Dark Mode</button>
        </div>
      </header>
      <h1>asd</h1>
      <MainWrapper />
    </div>
  )
}









function MainWrapper () {
  
  const [searchInput, setSearchInput] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  
  async function fetchAPI() {
    try {
      setIsDataLoaded(false);
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountries(data);
      setIsDataLoaded(true);
    } catch (err) {
      console.log(`Couldn't fetch data: "${err}"`);
    }
  }

  React.useEffect(() => {
    fetchAPI();
  }, []);
  
  if (isDataLoaded) console.log(countries);
  if (isDataLoaded) console.log(countries[33]["name"]["common"])

  return (
    <main>
      <div className="searchbar">
        {/* Search bar */}
        <input type="text" />
        <p># List of regions</p>
        {/* <p>{data[1].name}</p> */}
      </div>

      <div className="countries">
        {" "}
        {/* Countries */}
        <div className="country-card">
          <div className="country-flag"></div>
          <div className="country-info">
            <h2>Country name</h2>
            <p>Country population</p>
            <p>Country region</p>
            <p>Country capital</p>
          </div>
        </div>
      </div>
    </main>
  );
}


ReactDOM.render(<App />, document.getElementById("react-app"));