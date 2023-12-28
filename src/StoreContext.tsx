import React, {ReactNode} from 'react';
import { store} from "./redux/Redux-Store";
import {Store} from "redux";
 type ProviderPropsType = { children:ReactNode, store: Store}
export const StoreContext = React.createContext(store)
export const Provider:React.FC<ProviderPropsType> = (props:ProviderPropsType)=> {
   return ( <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
   )}