class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="project-info">
                    {/* <h1>Nazwa zadania</h1> */}
                    {/* <ButtonSmall type="add"/><br /> */}
                    <ChangeableText projectName="pracownia"/>
                    {/* <Input placeholder="Write sth."/> */}
                </div>
            </React.Fragment>
        )
    }
}

const root = document.getElementById("react-app");
ReactDOM.render(<App />, root);