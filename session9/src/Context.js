import { createContext } from "react";

const Context = createContext({ username: "", checklogin: false });
export const LanguageContext = createContext({ code: "vi" });

export default Context;