import React, { ChangeEvent, useState } from 'react';
import './basicQuestions.css';
import { Button, Form } from 'react-bootstrap';
//import App from '../App';
import { ProgressBar } from '../Progress Bar/ProgressBar';

interface QuestionProps {
    homePage: () => void;
    resultsPage: (basicAnswers?: any[], detailedAnswers?: any[]) => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
  }

function BasicQuestions({homePage,resultsPage,handleSubmit,changeKey}: QuestionProps){
    const totalQuestions = 7;
    const [basicAnswers, setBasicAnswers] = useState(Array(totalQuestions).fill(''));

    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...basicAnswers];
        updatedAnswers[index] = value;
        setBasicAnswers(updatedAnswers);
      };

    const answeredQuestions = basicAnswers.filter(basicAnswers => basicAnswers !== '').length;
    const progress = Math.floor((answeredQuestions / totalQuestions) * 100);
    
    function getResults(){
        resultsPage(undefined, basicAnswers);
      }

    return (<div className='BasicQuestions'>
        <header className="BasicQuestions-Header">
            <h1>Basic Questions Page</h1>
            <ProgressBar progress={progress} />
            <p className="basicCheckmark">{progress === 100 ? "✔️": ""}</p>
            <Button className="Home-Button" onClick={homePage}> HOME </Button>
        </header>
        <body className='BasicQuestions-Body'>
            <ol>
                <li>
                    <p>Do you prefer working indoors or outdoors?</p>
                    <Form>
                        <label>
                            <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer1"
                            value="Indoors"
                            onChange={(event) => handleAnswerChange(0, event.target.value)}/>
                             Indoors
                        </label>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer1"
                            value="Outdoors"
                            onChange={(event) => handleAnswerChange(0, event.target.value)}/>
                             Outdoors
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you enjoy helping others?</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer2"
                            value="Yes"
                            onChange={(event) => handleAnswerChange(1, event.target.value)}/>
                             Yes
                        </label>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer2"
                            value="No"
                            onChange={(event) => handleAnswerChange(1, event.target.value)}/>
                             No
                        </label>
                    </Form>
                </li>
                <li>
                    <p>On a scale of 1 to 5, how important is a high salary to you?</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer3"
                            value="1"
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                             1
                        </label>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer3"
                            value="2"
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                             2
                        </label>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer3"
                            value="3"
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                             3
                        </label>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer3"
                            value="4"
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                             4
                        </label>
                        <label>
                             <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer3"
                            value="5"
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                             5
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Would you rather have a job that is routine or varied?</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer4"
                            value="Routine"
                            onChange={(event) => handleAnswerChange(3, event.target.value)}/>
                             Routine
                        </label>
                        <label>
                            <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer4"
                            value="Varied"
                            onChange={(event) => handleAnswerChange(3, event.target.value)}/>
                             Varied
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you prefer working with your hands or technology?</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer5"
                            value="Hands"
                            onChange={(event) => handleAnswerChange(4, event.target.value)}/>
                             Hands
                        </label>
                        <label>
                            <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer5"
                            value="Technology"
                            onChange={(event) => handleAnswerChange(4, event.target.value)}/>
                             Technology
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you like to solve problems or follow instructions</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer6"
                            value="Solving Problems"
                            onChange={(event) => handleAnswerChange(5, event.target.value)}/>
                             Solving Problems
                        </label>
                        <label>
                            <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio"
                            name="answer6"
                            value="Following Instructions"
                            onChange={(event) => handleAnswerChange(5, event.target.value)}/>
                             Following Instructions
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Would you rather work in an office or remotely?</p>
                    <Form>
                        <label>
                        <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer7"
                            value="Office"
                            onChange={(event) => handleAnswerChange(6, event.target.value)}/>
                             Office
                        </label>
                        <label>
                            <input 
                            className='BasicQuestions-MultipleChoice'
                            type="radio" 
                            name="answer7"
                            value="Remote"
                            onChange={(event) => handleAnswerChange(6, event.target.value)}/>
                             Remote
                        </label>
                    </Form>
                </li>
            </ol>
            <Button className="BasicQuestions-getAnswersButton" onClick={getResults} disabled={progress !== 100}> Get Answers </Button>
        </body>
        <footer className='BasicQuestions-Footer'>
        <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </footer>
    </div>)
    }

export default BasicQuestions;
