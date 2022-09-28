import React from "react";

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee",
	},
	dark: {
		foreground: "#ffffff",
		background: "#16181D",
	},
};

export const ThemeContext = React.createContext(themes);

export const ThemeProvider = ({ children }) => {
	return (
		<ThemeContext.Provider value={themes.dark}>
			{children}
		</ThemeContext.Provider>
	);
};
