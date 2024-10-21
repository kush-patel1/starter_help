/* eslint-disable jsx-a11y/img-redundant-alt */
import TestingImage from "./dudetesting copy.webp";
import LogoImage from "./reactlogo copy.png";
import './loggedIn.css';
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
        return <div className="App">
            <div className="logged-homeHeader"> 
                <img src={LogoImage} alt="a logo image" style={{width: "75px", height: "auto"}}></img>
                <h1 style={{ flex: 1, textAlign: "center", marginRight: "7px"}}>Home Page</h1>
                <button style={{ borderRadius: "5px" }} onClick={homeClick}>Log Out</button>
            </div>
            <div>
                <h2 style={{padding: "20px"}}>Welcome Back {latestUsername}!</h2>
            </div>
            <div className="logged-homeBasicQuestions">
            <h4 style={{marginBottom: "20px"}}>Basic Questions</h4>
            <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicQuestions}>BASIC</button>
            <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
            </div>
            <div className="logged-homeDetailedQuestions">
            <h4 style={{marginBottom: "20px"}}>Detailed Questions</h4>
            <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={detailedQuestions}>DETAILED</button>
            <p>A thorough personalized career evaluation based on skills, interests, and values</p>
            </div>
            <div className="logged-viewResults">
                <h4 style={{marginBottom: "20px"}}>View Previous Quizzes</h4>
                <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicQuestions}>RESULTS</button>
                <p>Look at previous career quiz reports and job advice from any tests taken in the past</p>
            </div>
            <div className="logged-text">
                <h3>Matched with Example Job</h3>
                <div className="logged-desc">
                    <p>some more sample text basically summarizing what the job is and some cool information about it some more sample text basically summarizing what the job is and some cool information about it x2 just typing a little more because it will look good</p>
                </div>
            </div>
            <img src={TestingImage} alt="a testing image" style={{width: "325px", height: "auto", padding: "30px", marginLeft: "40px", marginTop: "20px"}}></img>
            <div className="logged-text2">
                <h3>Matched with Example Industry</h3>
                <div className="logged-desc2">
                    <p>some more sample text basically summarizing what the job is and some cool information about it some more sample text basically summarizing what the job is and some cool information about it x2 just typing a little more because it will look good</p>
                </div>
            </div>
            <div className="logged-footer">
            <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
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
    } else{
        return <App />
    }
}

export default LoggedInPage;