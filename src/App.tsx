import React, { useState } from 'react';
import './App.css';
import {Results} from './Results Page/Results';
import BasicQuestions from './Question Pages/basicQuestions';
import DetailedQuestions from './Question Pages/detailedQuestions';
import LoggedInPage from './Logged In Page/loggedPage';
import HomePage from './Home Page/HomePage';


function App() {
  const [pageVal, setPageVal] = useState<number>(0);
  const [ifLogged, setIfLogged] = useState<boolean>(false);
  const [answers, setAnswers] = useState(Array(7).fill(''));

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
    if(key!==""){
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    }
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

  function resultsClick(a: any[]){
    setAnswers(a);
    setPageVal(3);
  }

  function loggedClick(){
    setIfLogged(true);
  }
  
  
  if (pageVal === 0 && !ifLogged){
    return (
      <div><HomePage basicQuestions={basicClick} detailedQuestions={detailedClick} loggedPage={loggedClick} handleSubmit={handleSubmit}
      changeKey = {changeKey}></HomePage></div>
    );
  }
    else if (pageVal === 0){
      return <LoggedInPage basicQuestions={basicClick} detailedQuestions={detailedClick} handleSubmit={handleSubmit} changeKey = {changeKey}></LoggedInPage>
    }
   else if (pageVal === 1){
    return <BasicQuestions homePage={homeClick} resultsPage={resultsClick} handleSubmit={handleSubmit} changeKey = {changeKey}></BasicQuestions>;
  } else if (pageVal === 2){
    return <DetailedQuestions homePage={homeClick} resultsPage={resultsClick} handleSubmit={handleSubmit} changeKey = {changeKey}></DetailedQuestions>;
  }
  else {
    // Pass keyData to the Results component as a prop
    return <Results answers={answers} apiKey={keyData} />;
  }
  
}

export default App;
