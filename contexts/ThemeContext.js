import { createContext } from "react";

/*
    A context that saves the current theme of the layout. 
    This way, users can toggle between dark and light mode.
*/

const CurrentTheme = createContext("light");
export default CurrentTheme;
