import React, { ChangeEvent, useState } from 'react';
import './detailedQuestions.css';
import { Button, Form } from 'react-bootstrap';
//import App from '../App';
import { ProgressBar } from '../Progress Bar/ProgressBar';

interface QuestionProps {
    homePage: () => void;
    resultsPage: (detailedAnswers?: any[], basicAnswers?: any[]) => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
  }


function DetailedQuestions({homePage,resultsPage,handleSubmit,changeKey}: QuestionProps) {
  const totalQuestions = 7;
  const [detailedAnswers, setDetailedAnswers] = useState(Array(totalQuestions).fill(''));

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...detailedAnswers];
    updatedAnswers[index] = value;
    setDetailedAnswers(updatedAnswers);
  };

  const answeredQuestions = detailedAnswers.filter(detailedAnswers => detailedAnswers !== '').length;
  const progress = Math.floor((answeredQuestions / totalQuestions) * 100);

  function getResults(){
    resultsPage(detailedAnswers, undefined);
  }

    return (
      <div className='detailedQuestions'>
        <header className='DetailedQuestions-header'>
          <h1>Detailed Questions Page</h1>
          <ProgressBar progress={progress} />
          <p className="detailedCheckmark">{progress === 100 ? "✔️": ""}</p>
          <Button className="Home-Button" onClick={homePage}> HOME </Button>
        </header>
        <body className='DetailedQuestions-body'>
          <ol>
            <li>
              <p>Do you prefer managing projects or executing tasks? Why?</p>
              <Form>
                <label>
                  <textarea
                  className='DetailedQuestions-textArea'
                  name="answer1"
                  value={detailedAnswers[0]}
                  onChange={(event) => handleAnswerChange(0, event.target.value)}/>
                </label>
              </Form>
            </li>
            <li>
              <p>How do you balance job satisfaction with financial stability when considering a career?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer2"
                    value={detailedAnswers[1]}
                    onChange={(event) => handleAnswerChange(1, event.target.value)}
                  />
                </label>
              </Form>
            </li>
            <li>
              <p>Do you prefer working in established industries or emerging fields? Why?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer3"
                    value={detailedAnswers[2]}
                    onChange={(event) => handleAnswerChange(2, event.target.value)}
                  />
                </label>
              </Form>
            </li>
            <li>
              <p>When considering a career change, what factors play the biggest role for you?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer4"
                    value={detailedAnswers[3]}
                    onChange={(event) => handleAnswerChange(3, event.target.value)}
                  />
                </label>
              </Form>
            </li>
            <li>
              <p>In your ideal job, would you rather work on multiple small projects or one large complex task? Why?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer5"
                    value={detailedAnswers[4]}
                    onChange={(event) => handleAnswerChange(4, event.target.value)}
                  />
                </label>
              </Form>
            </li>
            <li>
              <p>In a team setting, do you prefer taking the lead or supporting others? Why?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer6"
                    value={detailedAnswers[5]}
                    onChange={(event) => handleAnswerChange(5, event.target.value)}
                  />
                </label>
              </Form>
            </li>
            <li>
              <p>What type of work environment helps you stay motivated and productive?</p>
              <Form>
                <label>
                  <textarea
                    className='DetailedQuestions-textArea'
                    name="answer7"
                    value={detailedAnswers[6]}
                    onChange={(event) => handleAnswerChange(6, event.target.value)}
                  />
                </label>
              </Form>
            </li>
          </ol>
          <Button className="DetailedQuestions-getAnswersButton" onClick={getResults} disabled={progress !== 100}> Get Answers </Button>
        </body>
        <footer className='DetailedQuestions-footer'>
        <Form>
            <Form.Label>API Key:</Form.Label>
            <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
            <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </footer>
      </div>
    );
  }

export default DetailedQuestions;
