







function App () {

  const [countries, setCountries] = React.useState([]);
  
  async function fetchAPI() {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await response.json();
      setCountries((data));
    } catch (err) {
      alert(err);
    }
  }

  React.useEffect(() => {
    fetchAPI();
  }, []);
  
  return(
    <React.Fragment>
      <header>
        <h1>Where in the world?</h1>
        <div>
          <button>Dark Mode</button>
        </div>
      </header>
      <h1>asd</h1>
      <MainWrapper />
    </React.Fragment>
  )
}









function MainWrapper( {data} ) {
  
  const [searchInput, setSearchInput] = React.useState("");
  
  return (
    <main>
      <div>
        {" "}
        {/* Search bar */}
        <input type="text" />
        <p># List of regions</p>
        {/* <p>{data[1].name}</p> */}
      </div>

      <div>
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