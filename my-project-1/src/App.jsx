import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PropTypes from 'prop-types'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'

import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState(`gray-300`)
  let ToggleMode = () => {
    if (mode === 'black') {
      setMode('gray-300')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('black')
      document.body.style.backgroundColor = '#282857'
    }
  }

  const [alert, setAlerte] = useState(null)
  let HandleAlert = (type, message) => {
    setAlerte({
      type: type,
      message: message,
    })

    setTimeout(() => {
      setAlerte(null)
    }, 2500);
  }

  return (
    <>
      <Main>

        <Navbar mode={mode} toggleMode={ToggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm mode={mode} HandleAlert={HandleAlert} />} />
          <Route exact path='/about' element={<About mode={mode}/>} />

        </Routes>

      </Main>
    </>
  )
}

export default App
