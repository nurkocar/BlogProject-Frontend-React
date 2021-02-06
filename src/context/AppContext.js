import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const appContext = createContext();

const { Provider } = appContext;

export const AppContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    return <Provider value={{ token, setToken }}>{children}</Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}