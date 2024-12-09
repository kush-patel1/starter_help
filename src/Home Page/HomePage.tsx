/* eslint-disable jsx-a11y/img-redundant-alt */
import LogoImage from "./CareerArcadeLogo.png";
import './HomePage.css';
import BackgroundImage from "./HomeBG.jpg";
import { Button, Form } from "react-bootstrap";
import { ChangeEvent } from "react";
import { useState, SetStateAction } from "react";

export let x: string[] = [];

interface QuestionProps {
  basicQuestions: () => void;
  detailedQuestions: () => void;
  loggedPage: () => void;
  handleSubmit: () => void;
  changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
}

function HomePage({ basicQuestions, detailedQuestions, loggedPage, handleSubmit, changeKey }: QuestionProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Both username and password are required.");
      return;
    }
    x.push(username);
    loggedPage();
    setIsPopupOpen(false);
  };

  const setUsernameHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };

  return (
    <div className="App">
      <div className="homeHeader">
        <img src={LogoImage} alt="a logo image" style={{ width: "25%", height: "auto" }} />
        {!isPopupOpen && (
            <Button className= "homeLoginButton" onClick={togglePopup}>
          Login
        </Button>
        )}
      </div>

      {isPopupOpen && (
        <>
          <div className="overlay" onClick={togglePopup}></div>
          <div className="popup">
            <div className="popup-content">
              <h2>Login</h2>
              <label style={{color: "#ffffff"}}>Username:</label>
              <input
                type="text"
                value={username}
                onChange={setUsernameHandler}
                placeholder="Enter Username"
              />
              <p></p>
              <label style={{color: "#ffffff"}}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
              <p></p>
              <button onClick={handleLogin} style={{backgroundColor: "#0f0fa6", color: "white"}}>Login</button>
              <button onClick={togglePopup} style={{backgroundColor: "#FF0000", color: "white"}}>Close</button>
            </div>
          </div>
        </>
      )}
      <div className="homeBody" style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: "center",}}>
      <div className="content">
        <div className="description">
          <div className="text">
            <h3 style = {{color: "#FFD700"}}>Discover Your Path with Our Career Quiz</h3>
            <p>Welcome to your first step toward finding a career that fits you! Our website offers two quiz options: the Basic Quiz for a quick look at potential career paths, and the Detailed Quiz for a more in-depth exploration of your interests and skills. Whether you're curious about new options or seeking to confirm your direction, these quizzes provide personalized insights to guide your future. Start discovering your path today!</p>
          </div>
        </div>

        <div className="homeBasicQuestions">
          <h4 style={{ marginBottom: "20px",  color: "#FFD700"}}>Basic Questions</h4>
          <Button className = "homeBasicButton" style={{ borderRadius: "5px", marginBottom: "20px" }} onClick={basicQuestions}>BASIC</Button>
          <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
        </div>

        <div className="homeDetailedQuestions">
          <h4 style={{ marginBottom: "20px", color: "#FFD700" }}>Detailed Questions</h4>
          <Button className = "homeDetailedButton" style={{ borderRadius: "5px", marginBottom: "20px" }} onClick={detailedQuestions}>DETAILED</Button>
          <p>A thorough personalized career evaluation based on skills, interests, and values</p>
        </div>
      </div>
      </div>

      <div className="footer">
        <Form>
          <Form.Label>API Key:</Form.Label>
          <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey} />
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default HomePage;
