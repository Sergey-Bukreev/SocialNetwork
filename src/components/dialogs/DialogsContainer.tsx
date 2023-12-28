
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RotState, store} from "../../redux/Redux-Store";


let mapStateToProps = (state:RotState)=> {
    return {dialogPage:state.dialogPage}
}
let mapDispatchToProps= ()=> {
    return {updateNewMessageText:(messageText:string)=>{store.dispatch(updateNewMessageTextActionCreator(messageText))}, sendMessage:()=> {store.dispatch(sendMessageActionCreator())}}
}
 export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)