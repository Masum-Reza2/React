import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar ItemOne={"TextUtils"} ItemTwo={"Home"} ItemThree={"User Guide"} />
     <TextForm/>
    </>
  );
}

export default App;
