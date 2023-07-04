import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");

  let HandleChange = (event) => {
    setText(event.target.value);
  };

  let MakeLower = () => {
    setText(text.toLowerCase());
    props.HandleAlert('Converted to lowerCase', 'success')
  };
  
  let MakeCapital = () => {
    props.HandleAlert('Converted to uppercase', 'success')
    return setText(text.toUpperCase());
  };
  
  let ClearText = () => {
    let newText = '';
    setText(newText)
    props.HandleAlert('Text Cleared', 'success')
  }
  
  let HandleCopy = () => {
    props.HandleAlert('Text copied', 'success')
    return navigator.clipboard.writeText(text)
  }
  
  let TrimMstr = () => {
    props.HandleAlert('Removed extra spaces from text', 'success')
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
  }

  return (
    <>
      <div className="container mb-3">
        <h1 className="text-center">Your text analysis here</h1>
        <textarea
          className={`form-control text-center bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={HandleChange}
          placeholder="Enter your text here"
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={MakeCapital}>
          Capitalize
        </button>
        <button className="btn btn-primary mt-3 mx-2" onClick={MakeLower}>
          LowerCase
        </button>
        <button className="btn btn-primary mt-3 mx-2" onClick={ClearText}>
          ClearText
        </button>
        <button className="btn btn-primary mt-3 mx-2" onClick={HandleCopy}>
          Copytext
        </button>
        <button className="btn btn-primary mt-3 mx-2" onClick={TrimMstr}>
          Trim
        </button>
      </div>

      <div className="container">
        <h3>Your text summary</h3>
        <p>
          {text.length<=0? 0 : text.split(" ").length} words and {text.length} Charecters{" "}
          <span>
            Probably you can read the texts in {text.split(" ").length * 0.009}{" "}
            minutes
          </span>{" "}
        </p>
      </div>


      <div className="container">
        <h3>Text Preview</h3>
        <p>{text.length > 0 ? text : 'Enter your text and see preview here'}</p>
      </div>
    </>
  );
}
