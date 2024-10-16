/* eslint-disable jsx-a11y/img-redundant-alt */
import TestingImage from "./dudetesting.webp";
import LogoImage from "./reactlogo.png";
import './HomePage.css';

interface QuestionProps {
    basicQuestions: () => void;
    detailedQuestions: () => void;
  }
function HomePage({basicQuestions,detailedQuestions}:QuestionProps){
    return <div className="App">
        <div className="homeHeader"> 
          <img src={LogoImage} alt="a logo image" style={{width: "75px", height: "auto"}}></img>
          <h1 style={{ flex: 1, textAlign: "center", marginRight: "20px"}}>Home Page</h1>
          <button style={{ borderRadius: "5px" }}>Log In</button>
        </div>
        <div className="homeBasicQuestions">
          <h4 style={{marginBottom: "20px"}}>Basic Questions</h4>
          <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={basicQuestions}>BASIC</button>
          <p>A brief overview providing broad career suggestions based on key interests on a surface level</p>
        </div>
        <div className="homeDetailedQuestions">
          <h4 style={{marginBottom: "20px"}}>Detailed Questions</h4>
          <button style={{borderRadius: "5px", marginBottom: "20px"}} onClick={detailedQuestions}>DETAILED</button>
          <p>A thorough evaluation offering personalized career recommendations based on skills, interests, and values</p>
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
}
export default HomePage;