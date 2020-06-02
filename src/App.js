import React, { useState, useEffect } from "react";
import "./globals.css";
import Header from "./header.js";
import Switch from "./darkModeSwitch.js";
import ControlSwitch from "./controlSwitch.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);
  return (
    <main className={mainClass}>
      <Header />
      <Switch
        setDarkMode={setDarkMode}
        checked={checked}
        setChecked={setChecked}
      />
      <ControlSwitch
        title={"Luces 1"}
        title1={"Luces 2"}
        title2={"Aire Acondicionado"}
        id={"checkbox"}
        id1={"checkbox1"}
        id2={"checkbox2"}
      />
    </main>
  );
}

export default App;
