
import {DialogState, sendMessage} from "../../redux/dialog-reducer/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RotState} from "../../redux/Redux-Store";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {getIsAuth} from "../../redux/selectors/auth-seletor";
import {getDialogPage} from "../../redux/selectors/dialog-selectors";

export type MapStateToPropsType = {dialogPage:DialogState, isAuth:boolean}
export type MapDispatchToPropsType = {
    sendMessage:(messageBody:string) => void
}

let mapStateToProps = (state:RotState) : MapStateToPropsType=> {
    return {dialogPage:getDialogPage(state), isAuth:getIsAuth(state)}
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { sendMessage }),
    AuthRedirect
)(Dialogs)
