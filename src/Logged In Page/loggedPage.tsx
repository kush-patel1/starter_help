import './loggedIn.css';
import LogoImage from "../Home Page/CareerArcadeLogo.png";
import BackgroundImage from "../Home Page/HomeBG.jpg";
import { ChangeEvent, useState } from "react";
import App from '../App';
import { x } from "../Home Page/HomePage";
import { Button, Form } from "react-bootstrap";


interface QuestionProps {
    basicQuestions: () => void;
    detailedQuestions: () => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
  }


function LoggedInPage({basicQuestions,detailedQuestions,handleSubmit,changeKey}:QuestionProps){

    const [pageVal, setPageVal] = useState<number>(0);

    function homeClick() {
        setPageVal(1);
    }

    const latestUsername = x[x.length - 1];


    if (pageVal === 0){
        return(
        <div className="App">
            <div className="homeHeader">
                <img src={LogoImage} alt="a logo" style={{ width: "25%", height: "auto" }} />
                <Button className='homeLogoutButton' onClick={homeClick}>Log Out</Button>
            </div>
            <div className="homeBody" style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: "center",}}>
      <div className="content">
        <div>
            <h2 style={{paddingTop: "1in"}}>Welcome Back {latestUsername}!</h2>
        </div>
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
        )
    } else{
        return <App />
    }
}

export default LoggedInPage;