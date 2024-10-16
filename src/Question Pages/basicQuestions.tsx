import React, { useState } from 'react';
import './basicQuestions.css';
import { Button, Form } from 'react-bootstrap';
import App from '../App';
import { ProgressBar } from '../Progress Bar/ProgressBar';



function BasicQuestions(){
    const [pageVal, setPageVal] = useState<number>(0);
    const totalQuestions = 7;
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(''));

    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
      };

    const answeredQuestions = answers.filter(answer => answer !== '').length;
    const progress = Math.floor((answeredQuestions / totalQuestions) * 100);

    function homeClick() {
        setPageVal(1);
    }
    
    if(pageVal === 0){
    return (<div className='BasicQuestions'>
        <header className="BasicQuestions-Header">
            <h1>Basic Questions Page</h1>
            <ProgressBar progress={progress} />
        </header>
        <body className='BasicQuestions-Body'>
            <ol>
                <li>
                    <p>Do you prefer working indoors or outdoors?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer1"
                            value={answers[0]}
                            onChange={(event) => handleAnswerChange(0, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you enjoy helping others?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer2"
                            value={answers[1]}
                            onChange={(event) => handleAnswerChange(1, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>How important is a high salary to you?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer3"
                            value={answers[2]}
                            onChange={(event) => handleAnswerChange(2, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Would you rather have a job that is routine or varied?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer4"
                            value={answers[3]}
                            onChange={(event) => handleAnswerChange(3, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you prefer working with your hands or technology?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer5"
                            value={answers[4]}
                            onChange={(event) => handleAnswerChange(4, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Do you like to solve problems or follow instructions</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer6"
                            value={answers[5]}
                            onChange={(event) => handleAnswerChange(5, event.target.value)}/>
                        </label>
                    </Form>
                </li>
                <li>
                    <p>Would you rather work in an office or remotely?</p>
                    <Form>
                        <label>
                            <textarea
                            className='BasicQuestions-textArea'
                            name="answer7"
                            value={answers[6]}
                            onChange={(event) => handleAnswerChange(6, event.target.value)}/>
                        </label>
                    </Form>
                </li>
            </ol>
            <Button className="BasicQuestions-getAnswersButton" onClick={homeClick}> Get Answers </Button>
        </body>
        <footer className='BasicQuestions-Footer'>
          <Button className="Home-Button" onClick={homeClick}> HOME </Button>
          <p>Home | Products | Company | Blog</p>
        </footer>
    </div>)
    } else{
        return <App />
    }
}

export default BasicQuestions;