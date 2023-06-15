/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../contexts/context";

const MainContainer = ({ children }) => {
  const { preferTheme, lightMain, darkMain } = useContext(ThemeContext);

  return (
    <main className={preferTheme === "light" ? lightMain : darkMain}>
      {children}
    </main>
  );
};

export default MainContainer;
