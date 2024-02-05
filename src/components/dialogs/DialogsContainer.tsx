
import {DialogState, sendMessage, updateNewMessageText} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
import {AuthRedirect} from "../../hoc/AuthRedirect";

export type MapStateToPropsType = {dialogPage:DialogState, isAuth:boolean}
export type MapDispatchToPropsType = {
    updateNewMessageText:(messageText:string)=> void
    sendMessage:() => void
}
let mapStateToProps = (state:RotState) : MapStateToPropsType=> {
    return {dialogPage:state.dialogPage, isAuth:state.auth.isAuth}
}
let AuthRedirectComponent = AuthRedirect(Dialogs)
 export const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage })(AuthRedirectComponent)