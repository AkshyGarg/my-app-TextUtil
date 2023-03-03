import React ,{useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('');

    const handleUppercase= ()=>{
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    }

    const handlelowercase= ()=>{
        console.log("Lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        }

    // user text area m type kr para h aur remove krr para h
    const handleonChange = (event)=>{
        console.log("on chnage");
        setText(event.target.value);
    }

    const clearText = ()=>
    {
        setText('');
    }

    const copyToClipboard = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    // const countWords = (event) =>{
    //     let tem = event.target.value;
    //     setCount(text.length);
    // }
    // const [count, setCount] = useState(0);
    // onInput={countWords}
  return (
    <>
    <div>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <label for="myProject" className="form-label">{props.title}</label>
        <textarea className="form-control" id="myProject" value={text} onChange={handleonChange} rows="10" />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlelowercase}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyToClipboard}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove white space</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>You typed {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <h3>Preview Of Your Text</h3>
        <p>{text.length>0?text:"Enter Something to see preview"}</p>
    </div>
    </>
  )
}
