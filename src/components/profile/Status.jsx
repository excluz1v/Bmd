import React from 'react';


class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    Deactivatemode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                <div>{
                    !this.state.editMode ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Empty status'}</span>
                    </div> : undefined}
                    {this.state.editMode ? <div>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.Deactivatemode} value={this.state.status}></input>
                    </div> : undefined}
                </div>
                <p></p>
                <p></p>
                <div><img src={this.props.profile.profile.photos.small} alt='img' /></div>
                <span>Ищу работу?: {this.props.profile.profile.lookingForAJobDescription}</span>
                <br />
                <span>О себе?: {this.props.profile.profile.aboutMe}</span>
            </div>
        )
    }
}
export default Status