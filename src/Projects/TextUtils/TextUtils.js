import { useState } from "react";
import "./TextUtils.css";

function TextUtils() {
  let [text, setText] = useState("");
  let [copyBtn, setCopyBtn] = useState("Copy");
  function setTextFunc(event) {
    setText(event.target.value);
    setCopyBtn("Copy");
  }
  function copy() {
    navigator.clipboard.writeText(text);
    setCopyBtn("Coppied");
  }
  function uppercase() {
    setText(text.toUpperCase());
    
  }
  function lowercase() {
    setText(text.toLowerCase());
  }
  function trim() {
    setText(text.trim());
  }
  function clear() {
    setText("");
  }
  return (
    <>
      <div className="textutils">
        <div className="input-group">
          <button disabled={text.length===0} className="copy-btn" onClick={copy}>
            {copyBtn}
          </button>
          <textarea className="form-control" placeholder="Enter text here . . ." value={text} onChange={setTextFunc}></textarea>
        </div>
        <div>
          <button disabled={text.length===0} className="btn btn-dark my-2" onClick={uppercase}>
            UPPERCASE
          </button>
          <button disabled={text.length===0} className="btn btn-dark m-2" onClick={lowercase}>
            lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-dark m-2" onClick={trim}>
            trim
          </button>
          <button disabled={text.length===0} className="btn btn-danger m-2" onClick={clear}>
            clear
          </button>
        </div>
        <p>Total words : {text.split(/\s+/).filter((txt) => {return txt.length!==0 }).length}</p>
        <p>Total chars : {text.length}</p>
      </div>
    </>
  );
}
export default TextUtils;
