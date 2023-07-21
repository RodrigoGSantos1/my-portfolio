
import { useContext } from "react";
import { UserContext, UserContextData } from "./user";

export function useUser(): UserContextData {
    const context = useContext(UserContext);
    return context;
}
