import React from 'react';


class Status extends React.Component {

    state = {
        editMode: false
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
    }
    render() {

        return (
            <div>
                <div>{
                    !this.state.editMode && <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>}

                    {this.state.editMode && <div>
                        <input autoFocus onBlur={this.Deactivatemode} value={this.props.status}></input>
                    </div>}
                </div>
                <p></p>
                <p></p>
                <div><img onclick={this.props.getStatusThunk} src={this.props.profile.profile.photos.small} /></div>
                <span>Ищу работу?: {this.props.profile.profile.lookingForAJobDescription}</span>
                <br />
                <span>О себе?: {this.props.profile.profile.aboutMe}</span>
            </div>
        )
    }
}
export default Status