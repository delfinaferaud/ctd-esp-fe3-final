import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from 'axios';
import {theme} from './theme'

export const initialState = { state: { theme: "light" } }
export const ContextGlobal = createContext()


const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(theme, initialState)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true) 

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url)
      .then(res => {
        setData(res.data)
        setIsLoading(false) 
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ContextGlobal.Provider value={{ data, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
  
}
export default ContextProvider

export const useGlobalStates = () => {
return useContext(ContextGlobal)
}
