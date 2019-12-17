import React from 'react';
import { AddDialogActionCreator, UpgradeHistoryTextActionCreator } from '../../../Redux/history-reducer'
import History from './History'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        history: state.history
    }
}
let mapDispatchToStore = (dispatch) => {
    return {
        UpgradeHistoryText: (body) => {
            dispatch(UpgradeHistoryTextActionCreator(body))
        },
        TextOut: () => {
            dispatch(AddDialogActionCreator());
            dispatch(UpgradeHistoryTextActionCreator(''))
        }
    }
}
export const HistoryContainer = connect(mapStateToProps, mapDispatchToStore)(History)