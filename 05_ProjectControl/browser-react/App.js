class ButtonAdd extends React.Component {
    render () {
        return (
            <button 
                className="button-add">+</button>
        )
    }
}




class App extends React.Component {
    render () {
        return (
            <ButtonAdd>Click me</ButtonAdd>
        )
    }
}

const root = document.getElementById("react-app");
ReactDOM.render(<App />, root);