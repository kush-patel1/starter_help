import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import TestingImage from "./dudetesting.webp";
import LogoImage from "./reactlogo.png";


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [pageVal, setPageVal] = useState<number>(0);

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function basicClick() {
    setPageVal(1);
  }

  function detailedClick() {
    setPageVal(2);
  }
  
  if (pageVal === 0){
    return (
      <div className="App">
        <div style={{
          backgroundColor: "green", 
          border: "3px solid black", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "15px",
          position: "fixed",
          width: "100%"
        }}> 
          <img src={LogoImage} alt="a logo image" style={{width: "75px", height: "auto"}}></img>
          <h1 style={{ flex: 1, textAlign: "center", marginRight: "20px"}}>Home Page</h1>
          <button style={{ borderRadius: "5px" }}>Log In</button>
        </div>
        <div style={{wordWrap: "break-word", width: "500px", position: "fixed", left: "220px", bottom: "500px", padding: "20px", float: "left", display: "inline-block", backgroundColor: "yellow", border: "2px solid black", borderRadius: "15px"}}>
          <h4 style={{marginBottom: "20px"}}>Basic Questions</h4>
          <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicClick}>BASIC</button>
          <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
        </div>
        <div style={{wordWrap: "break-word", width: "500px", position: "fixed", bottom: "500px", right: "220px", padding: "20px", float: "right", display: "inline-block", backgroundColor: "orange", border: "2px solid black", borderRadius: "15px"}}>
          <h4 style={{marginBottom: "20px"}}>Detailed Questions</h4>
          <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={detailedClick}>DETAILED</button>
          <p>A thorough evaluation offering personalized career recommendations based on skills, interests, and values</p>
        </div>
        <div  style={{textAlign: "center", bottom: "225px", left: "0px", position: "fixed", width: "50%"}}>
          <img src={TestingImage} alt="a testing image" style={{width: "200px", height: "auto"}}></img>
        </div>
        <div style={{textAlign: "center", bottom: "215px", left: "485px", position: "fixed", width: "50%"}}>
          <h3>This is a header to explain whats going on down below</h3>
          <p>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text </p>
        </div>
        <div style={{border: "3px solid black", padding: "15px", backgroundColor: "green", textAlign: "center", bottom: "0", left: "0", position: "fixed", width: "100%"}}>
          <h4>Footer</h4>
        </div>
        {
          /*
          <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <br></br>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form> 
          */
        }
      </div>
    );
  } else if (pageVal === 1){
    return (
      <div className="App">
        <p>testing123</p>
      </div>
    )
  } else {
    return (
      <div className="App">
        <p>yoyoyo</p>
      </div>
    )
  }

}

export default App;
