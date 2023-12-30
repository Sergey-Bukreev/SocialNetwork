
import {DialogState, sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
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
let mapDispatchToProps= () : MapDispatchToPropsType=> {
    return {updateNewMessageText:(messageText:string)=>{store.dispatch(updateNewMessageTextActionCreator(messageText))}, sendMessage:()=> {store.dispatch(sendMessageActionCreator())}}
}
 export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)