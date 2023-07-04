import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const [text, setText] = useState('')

    let HandleClick = (event) => {
        setText(event.target.value)
    }

    let MakeLower = () => {
        if(text){
        props.HandleAlert('success', 'Converted to Lowercase')
        }
        else{
            props.HandleAlert('error', 'Write something first')
        }
        setText(text.toLowerCase());
    };
    
    let MakeCapital = () => {
        if(text){
            props.HandleAlert('success', 'Converted to UpperCase')
        }
        else{
            props.HandleAlert('error', 'Write something first')
        }
        return setText(text.toUpperCase());
    };
    
    let ClearText = () => {
        if(text){
            props.HandleAlert('alright', 'Text cleared')
        }
        else{
            props.HandleAlert('error', 'Write something first')
        }
        let newText = '';
        setText(newText)
    }
    
    let HandleCopy = () => {
        if(text){
            props.HandleAlert('success', 'Copied to clipboard')
        }
        else{
            props.HandleAlert('error', 'Write something first')
        }
        return navigator.clipboard.writeText(text)
    }
    
    let TrimMstr = () => {
        if(text){
            props.HandleAlert('success', 'Removed extra spaces')
        }
        else{
            props.HandleAlert('error', 'Write something first')
        }
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }

    return (
        <>
            <div className={`container mb-3 mt-3`}>
                <h1 className={`text-center text-3xl text-${props.mode === `gray-300` ? 'black' : 'white'}`}>Your text analysis here</h1>
                <textarea placeholder={`Enter your text here`} className={`form-control mt-3 ${props.mode === `gray-300` ? 'bg-white' : 'bg-black'} ${props.mode === `gray-300` ? 'text-black' : 'text-white'} text-center`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={HandleClick}></textarea>
            </div>
            <div className="container space-y-4 lg:space-y-0 lg:space-x-5 items-center justify-center flex flex-col lg:flex lg:flex-row font-bold">
                <button onClick={MakeCapital} className={`${props.mode === `gray-300` ? 'bg-slate-400' : 'bg-blue-500'} ${props.mode === 'gray-300' ? 'shadow-black' : 'shadow-none'} shadow-md w-24 rounded-md hover:-translate-y-[0.13rem] active:translate-y-[0.15rem]`}>Capitalize</button>
                <button onClick={MakeLower} className={`${props.mode === `gray-300` ? 'bg-slate-400' : 'bg-blue-500'} ${props.mode === 'gray-300' ? 'shadow-black' : 'shadow-none'} shadow-md w-24 rounded-md hover:-translate-y-[0.13rem] active:translate-y-[0.15rem]`}>LowerCase</button>
                <button onClick={ClearText} className={`${props.mode === `gray-300` ? 'bg-slate-400' : 'bg-blue-500'} ${props.mode === 'gray-300' ? 'shadow-black' : 'shadow-none'} shadow-md w-24 rounded-md hover:-translate-y-[0.13rem] active:translate-y-[0.15rem]`}>Clear Text</button>
                <button onClick={HandleCopy} className={`${props.mode === `gray-300` ? 'bg-slate-400' : 'bg-blue-500'} ${props.mode === 'gray-300' ? 'shadow-black' : 'shadow-none'} shadow-md w-24 rounded-md hover:-translate-y-[0.13rem] active:translate-y-[0.15rem]`}>Copy Text</button>
                <button onClick={TrimMstr} className={`${props.mode === `gray-300` ? 'bg-slate-400' : 'bg-blue-500'} ${props.mode === 'gray-300' ? 'shadow-black' : 'shadow-none'} shadow-md w-24 rounded-md hover:-translate-y-[0.13rem] active:translate-y-[0.15rem]`}>Trim</button>
            </div>

            <div className={`flex flex-col items-center container ${props.mode===`gray-300`? `text-black`: `text-white`}`}>
                <h3 className={`text-2xl text-center mt-4`}>Text summary</h3>
                <p>{text.length<=0? 0: text.split(' ').length} Words and {text.length} Charecters. Estimate reading time : {text.split(' ').length*0.01} minutes</p>
                <h3 className={`text-2xl mt-4`}>Text Preview </h3>
                <p>{text.length<=0? 'Enter text and see preview' :text}</p>
            </div>
            
        </>
    )
}
