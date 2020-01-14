import { connect } from 'react-redux';
import FriendName from './FriendName'


let mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export const FriendNameContainer = connect(mapStateToProps, {})(FriendName)
