
import {DialogState, sendMessage, updateNewMessageText} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RotState, store} from "../../redux/Redux-Store";

export type MapStateToPropsType = {dialogPage:DialogState}
export type MapDispatchToPropsType = {
    updateNewMessageText:(messageText:string)=> void
    sendMessage:() => void
}
let mapStateToProps = (state:RotState) : MapStateToPropsType=> {
    return {dialogPage:state.dialogPage}
}

 export const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage })(Dialogs)