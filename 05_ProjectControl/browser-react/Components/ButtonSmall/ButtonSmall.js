class ButtonSmall extends React.Component {
    constructor () {
        super();
    }
    render () {
        return (
            <button onClick={this.props.onClick}
                className="button-add"
            >
            <img src={"./Icons/icon_" + this.props.type + ".svg"} />
            </button>
        )
    }
}

