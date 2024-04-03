import { createContext } from "react";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const AuthInfo = { name: 'Hello' }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;