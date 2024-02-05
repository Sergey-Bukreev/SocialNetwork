
import {DialogState, sendMessage, updateNewMessageText} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {dialogPage:DialogState, isAuth:boolean}
export type MapDispatchToPropsType = {
    updateNewMessageText:(messageText:string)=> void
    sendMessage:() => void
}

let mapStateToProps = (state:RotState) : MapStateToPropsType=> {
    return {dialogPage:state.dialogPage, isAuth:state.auth.isAuth}
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {updateNewMessageText, sendMessage }),
    AuthRedirect
)(Dialogs)
