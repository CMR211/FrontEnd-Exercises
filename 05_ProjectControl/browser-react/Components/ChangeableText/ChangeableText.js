class ChangeableText extends React.Component {

    constructor (props) {
        super();
        this.state = {edit: false, projectName: "asd"};
        this.handleClickRename = this.handleClickRename.bind(this);
        this.handleClickConfirm = this.handleClickConfirm.bind(this);
    }

    handleClickRename() {
        this.setState({edit: true});
    }

    handleClickConfirm() {
        this.setState({projectName: this.props.children, edit: false});
    }

    render () {
        if (this.state.edit) {
            return (
                <div className={this.props.className + " " + "changeabletext-div"}>
                    <Input />
                    <ButtonSmall onClick={this.handleClickConfirm} type="confirm" />
                </div>
            )
        } else {
            return (
                <div className={this.props.className + " " + "changeabletext-div"}>
                    <p>{this.state.projectName}</p>
                    <ButtonSmall onClick={this.handleClickRename} type="rename" />
                </div>
            )
        }
    }
    
}