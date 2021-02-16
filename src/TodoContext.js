import { createContext } from 'react'
 
export const TodoContext = createContext()
export const ContextProvider = TodoContext.Provider
export const ContextConsumer = TodoContext.Consumer