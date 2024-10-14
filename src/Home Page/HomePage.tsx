import TestingImage from "./dudetesting.webp";
import LogoImage from "./reactlogo.png";

interface QuestionProps {
    // The type is "a function that consumes nothing and returns nothing"
    detailedClick: () => void;
    basicClick: () => void;
  }

function HomePage({basicClick}: QuestionProps,{detailedClick}: QuestionProps){
    return <div className="App">
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
        <div style={{wordWrap: "break-word", width: "500px", position: "relative",top:'15%', left: "10%", bottom: "60%", padding: "20px", float: "left", display: "inline-block", backgroundColor: "yellow", border: "2px solid black", borderRadius: "15px"}}>
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
}
export default HomePage;