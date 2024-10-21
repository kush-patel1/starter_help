import React, { useState } from 'react';
//import logo from './logo.svg';
//import logo from './logo.svg';
import './App.css';
//import { Button, Form } from 'react-bootstrap';
//import { Button, Form } from 'react-bootstrap';
import { Results } from './Results Page/Results';
//import { ProgressBar } from './Progress Bar/ProgressBar';
import BasicQuestions from './Question Pages/basicQuestions';
import DetailedQuestions from './Question Pages/detailedQuestions';
import LoggedInPage from './Logged In Page/loggedPage';
import HomePage from './Home Page/HomePage';
import { Button, Form } from 'react-bootstrap';


function App() {
  const [pageVal, setPageVal] = useState<number>(0);

  //local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
  let keyData = "";
  const saveKeyData = "";
  const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
  if (prevKey !== null) {
    keyData = JSON.parse(prevKey);
  }
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

 function homeClick(){
  setPageVal(0);
 }

  function basicClick() {
    setPageVal(1);
  }

  function detailedClick() {
    setPageVal(2);
  }

  function resultsClick(){
    setPageVal(3);
  }

  function inputAPI(){
    homeClick();
    handleSubmit();
  }

  if(pageVal===5){
    return <div>
    <Form.Group controlId="APIKeyInput">
      <Form.Label>Key:</Form.Label>
      <Form.Control
        onChange={changeKey} />
    </Form.Group>
    <Button onClick={inputAPI}>Submit Key</Button>
  </div>;
  }
  
  else if (pageVal === 0){
    return (
      <div><HomePage basicQuestions={basicClick} detailedQuestions={detailedClick} handleSubmit={handleSubmit}
      changeKey = {changeKey}></HomePage></div>
    );
  } else if (pageVal === 1){
    return <BasicQuestions homePage={homeClick} resultsPage={resultsClick}></BasicQuestions>;
  } else if (pageVal === 2){
    return <DetailedQuestions homePage={homeClick} resultsPage={resultsClick}></DetailedQuestions>;
  }
  else{
    return <Results/>
  }
}

export default App;
