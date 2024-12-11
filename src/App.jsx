import React from "react";
import "./index.css";
import ColorGenerator from "./components/ColorGenerator/ColorGenerator";
import "react-toastify/dist/ReactToastify.css";
import ToggleMode from "./components/ToggleMode/ToggleMode";
import useLocalStorage from "use-local-storage";

function App() {
  const preferredTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDark, setIsDark] = useLocalStorage("isDark", preferredTheme);

  return (
    <div data-theme={isDark ? "dark" : "light"} className="App">
      <ToggleMode handleChange={() => setIsDark(!isDark)} isChecked={isDark} />

      <ColorGenerator />
    </div>
  );
}

export default App;
