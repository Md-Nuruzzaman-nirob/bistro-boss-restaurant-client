import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const authentication = {};
  return (
    <AuthContext.Provider value={authentication}>
      {children}
    </AuthContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
