import { createContext } from "react";
import { JWTContextType } from "src/auth/types";

const AuthContext = createContext({} as JWTContextType);

export default AuthContext;
