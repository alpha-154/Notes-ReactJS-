import { createContext, useContext } from "react";

//creating a context & also initialising it with an object which has a variable & two methods
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

//exporting `ThemeContext.Provider` to maintaing the `clean code` principle
export const ThemeProvider = ThemeContext.Provider

//here, useTheme() function can access the values of `ThemeContext` context
export default function useTheme(){
    return useContext(ThemeContext)   
}