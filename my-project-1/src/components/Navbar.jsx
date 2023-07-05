import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`bg-${props.mode} text-${props.mode === 'black' ? 'white' : 'black'} font-bold`}>
                <ul className={`h-12 flex space-x-5 items-center`}>
                    <li className={` translate-x-10 hover:cursor-pointer hover:-translate-y-[0.13rem] active:translate-y-[0.13rem] shadow-md shadow-${props.mode==='gray-300'? 'red-400' : 'blue-500'}`}> <Link to="/">TextUtils</Link></li>
                    <li className={` translate-x-10 hover:cursor-pointer hover:-translate-y-[0.13rem] active:translate-y-[0.13rem] shadow-md shadow-${props.mode==='gray-300'? 'red-400' : 'blue-500'}`}> <Link to="/user_guide">User-Guide</Link> </li>
                    <li className={` translate-x-10 hover:cursor-pointer hover:-translate-y-[0.13rem] active:translate-y-[0.13rem] shadow-md shadow-${props.mode==='gray-300'? 'red-400' : 'blue-500'}`}> <Link to="/about">About</Link></li>
                    <div className="form-check form-switch absolute right-0 lg:right-10 flex items-center space-x-3">
                        <input className="form-check-input hover:cursor-pointer bg-indigo-700 rounded-md " type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <span className='hidden lg:flex'>Toggle Mode</span>
                    </div>
                </ul>
            </nav>
        </div>
    )
}
