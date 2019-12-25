import React from 'react';
import { AddDialogActionCreator } from '../../../Redux/history-reducer'
import History from './History'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        history: state.history,
    }
}
let mapDispatchToStore = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(AddDialogActionCreator(text));
        }
    }
}
export const HistoryContainer = connect(mapStateToProps, mapDispatchToStore)(History)