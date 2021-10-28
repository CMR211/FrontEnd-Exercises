class ButtonSmall extends React.Component {
    render () {
        return (
            <button 
                className="button-add"
            >
            <img src={"./Icons/icon_" + this.props.type + ".svg"} />
            </button>
        )
    }
}

