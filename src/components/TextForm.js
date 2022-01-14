import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = 'new text' // wrong way to change the state
  // setText('new text') // right way to change the state
  const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text converted into uppercase", "success");
  };

  const handleLowerCaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text converted into lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = (event) => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied", "success");
  };

  const removeExtraSpace = () => {
    const newText = text.split(/[  ]+/);
    setText(newText.join(" ").trim());
    props.showAlert("Removed extra space", "success");
  };

  const lightMode = {
    color: "black",
    backgroundColor: "white",
  };
  const darkMode = {
    color: "white",
    backgroundColor: "black",
  };
  const myStyle = props.mode === "dark" ? darkMode : lightMode;
  const wordCount = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  return (
    <>
      <div className="container" style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={myStyle}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseClick}
          disabled={!text}
        >
          Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseClick}
          disabled={!text}
        >
          Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
          disabled={!text}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={!text}
        >
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpace}
          disabled={!text}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={myStyle}>
        <h2>Your Summary</h2>
        <p>
          {wordCount} words and {text.length} charactors
        </p>
        <p>{0.008 * wordCount} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview here"}</p>
      </div>
    </>
  );
}
