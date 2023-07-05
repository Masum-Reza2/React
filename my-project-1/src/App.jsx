import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PropTypes from 'prop-types'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'
import User_guide from './components/User_guide'

// react router
// npm i react-router-dom
// then import the following
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import Error from './components/Error'


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
          <Route exact path='/user_guide' element={<User_guide mode={mode}/>} />
          <Route path='/*' element={<Error mode={mode}/>} />
        </Routes>

      </Main>
    </>
  )
}

export default App
