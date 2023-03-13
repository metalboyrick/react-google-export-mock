import { ReactNode } from 'react';

export interface StateContextValue {
  currentState: number;
  setCurrentState: (state: number) => void;
}

export interface StateProviderProps {
  currentState: number;
  setCurrentState: (state: number) => void; 
  children: ReactNode;
}