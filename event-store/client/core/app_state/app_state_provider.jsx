
import React, { createContext , useReducer , useContext} from "react";
import reducer ,{initialState} from './app_reducer'

// This is the data layer
const StateContext = createContext();

// Build a provider
export const StateProvider = ({children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//export action name as app
export {default as app} from './app_actions'
//access the appState inside component by calling userAppState 
export const useAppState = () => useContext(StateContext);
