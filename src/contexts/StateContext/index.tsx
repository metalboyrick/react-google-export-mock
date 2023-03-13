import React, {createContext, useContext} from 'react';

import type { StateContextValue, StateProviderProps } from './StateContext.types';

const StateContext = createContext<StateContextValue | null>(null);

const StateProvider = ({children, currentState, setCurrentState} : StateProviderProps) => {
    return (
        <StateContext.Provider value={{currentState, setCurrentState}}>
            {children}
        </StateContext.Provider>
    );
}

const useStateContext = () => {
    const context = useContext(StateContext);
    if(!context) throw new Error(`"useStateContext" must be used with "StateProvider"`);

    return context;
};

export { StateProvider, useStateContext };