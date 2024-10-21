/* eslint-disable jsx-a11y/img-redundant-alt */
import TestingImage from "./dudetesting.webp";
import LogoImage from "./reactlogo.png";
import './HomePage.css';
import { useState, createContext, SetStateAction } from "react";
import ReactDOM from "react-dom/client";
import { Button, Form } from "react-bootstrap";
import { ChangeEvent } from "react";

export let x: string[] = [];

interface QuestionProps {
    basicQuestions: () => void;
    detailedQuestions: () => void;
    loggedPage: () => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
  }

function HomePage({basicQuestions,detailedQuestions, loggedPage, handleSubmit, changeKey}:QuestionProps){

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Both username and password are required.");
      return; // Prevent login if either field is empty
    }
    x.push(username)
    // If both fields are filled, call loggedPage and close the popup
    loggedPage(); // Navigate to the loggedPage component
    setIsPopupOpen(false); // Close the popup after login
  };

  const setUsernameHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  return <div className="App">
      <div className="homeHeader"> 
        <img src={LogoImage} alt="a logo image" style={{width: "75px", height: "auto"}}></img>
        <h1 style={{ flex: 1, textAlign: "center", marginRight: "20px"}}>Home Page</h1>
        {!isPopupOpen && (
          <button style={{ borderRadius: "5px" }} onClick={togglePopup}>Log In</button>
        )}
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Login</h2>

              {/* Username Input */}
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={setUsernameHandler}
                placeholder="Enter Username"
              />

              {/* Password Input */}
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />

              {/* Login and Close Buttons */}
              <button onClick={handleLogin}>Login</button>
              <button onClick={togglePopup}>Close Popup</button>
            </div>
          </div>
        )}
      </div>
      <div className="homeBasicQuestions">
        <h4 style={{marginBottom: "20px"}}>Basic Questions</h4>
        <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicQuestions}>BASIC</button>
        <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
      </div>
      <div className="homeDetailedQuestions">
        <h4 style={{marginBottom: "20px"}}>Detailed Questions</h4>
        <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={detailedQuestions}>DETAILED</button>
        <p>A thorough personalized career evaluation based on skills, interests, and values</p>
      </div>
      <div className="description">
      <div className="picture">
        <img src={TestingImage} alt="a testing image" style={{width: "200px", height: "auto"}}></img>
      </div>
      <div className="text">
        <h3>This is a header to explain whats going on down below</h3>
        <p>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text </p>
      </div>
      </div>
      <div className="footer">
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
        </div>
    </div>
}
// function HomePage({basicQuestions,detailedQuestions,handleSubmit,changeKey}:QuestionProps){
//     return <div className="App">
//         <div className="homeHeader"> 
//           <img src={LogoImage} alt="a logo image" style={{width: "75px", height: "auto"}}></img>
//           <h1 style={{ flex: 1, textAlign: "center", marginRight: "20px"}}>Home Page</h1>
//           <button style={{ borderRadius: "5px" }}>Log In</button>
//         </div>
//         <div className="homeBasicQuestions">
//           <h4 style={{marginBottom: "20px"}}>Basic Questions</h4>
//           <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicQuestions}>BASIC</button>
//           <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
//         </div>
//         <div className="homeDetailedQuestions">
//           <h4 style={{marginBottom: "20px"}}>Detailed Questions</h4>
//           <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={detailedQuestions}>DETAILED</button>
//           <p>A thorough evaluation offering personalized career recommendations based on skills, interests, and values</p>
//         </div>
//         <div className="description">
//         <div className="picture">
//           <img src={TestingImage} alt="a testing image" style={{width: "200px", height: "auto"}}></img>
//         </div>
//         <div className="text">
//           <h3>This is a header to explain whats going on down below</h3>
//           <p>sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text sample text </p>
//         </div>
//         </div>
//         <div className="footer">
//           <Form>
//             <Form.Label>API Key:</Form.Label>
//             <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
//             <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
//           </Form>
//         </div>
//       </div>
// }
// }

export default HomePage;