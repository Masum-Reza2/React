import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  // dynamically changing of title

  // setInterval(() => {
  //   document.title = 'textutils the masterpiece'
  // }, 1000);
  // setInterval(() => {
  //   document.title = 'install textutils'
  // }, 2000);


  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      HandleAlert('Light mode has been enabled', 'success')

    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#173a56'
      document.body.style.color = 'white'
      HandleAlert('Dark mode has been enabled', 'success')
    }
  };

  const [alert, setAlert] = useState(null);
  let HandleAlert = (message, type) => {
    setAlert({
      message : message,
      type : type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  return (
    <>
      <Navbar
        ItemOne={"TextUtils"}
        ItemTwo={"Home"}
        ItemThree={"User Guide"}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm HandleAlert={HandleAlert} mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
