import { createContext, useContext } from "react"

const AppContext = createContext()

export const SprintAppProvider = ({ children }) => {
    return <AppContext.Provider value={`hello baby context`} >
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}