import React, { ChangeEvent, useState } from 'react';
import './basicQuestions.css';
import { Button, Form } from 'react-bootstrap';
import { ProgressBar } from '../Progress Bar/ProgressBar';

interface QuestionProps {
    homePage: () => void;
    resultsPage: (basicAnswers?: any[], detailedAnswers?: any[]) => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
}

function BasicQuestions({ homePage, resultsPage, handleSubmit, changeKey }: QuestionProps) {
    const totalQuestions = 7;
    const [basicAnswers, setBasicAnswers] = useState(Array(totalQuestions).fill(''));
    const [qCount, setQCount] = useState(0);

    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...basicAnswers];
        updatedAnswers[index] = value;
        setBasicAnswers(updatedAnswers);
    };

    const answeredQuestions = basicAnswers.filter(answer => answer !== '').length;
    const progress = Math.floor((answeredQuestions / totalQuestions) * 100);

    function basicNext() {
        setQCount(qCount + 1);
        if (qCount > 6){
            setQCount(6);
        }
    }

    function getResults() {
        resultsPage(undefined, basicAnswers);
    }

    // Option bar component
    const OptionBar = ({ index, value, text }: { index: number, value: string, text: string }) => (
        <div
            className={`option-bar ${basicAnswers[index] === value ? 'selected' : ''}`}
            onClick={() => handleAnswerChange(index, value)}
        >
            {text}
        </div>
    );

    return (
        <div className='BasicQuestions'>
            <header className="BasicQuestions-Header">
                <h1>Basic Questions Page</h1>
                <ProgressBar progress={progress} />
                <p className="basicCheckmark">{progress === 100 ? "✔️" : ""}</p>
                <Button className="Home-Button" onClick={homePage}> HOME </Button>
            </header>
            <div className='BasicQuestions-Body'>
                <div>
                    {qCount === 0 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>1. Do you prefer working indoors or outdoors?</p>
                            <div className="options-container">
                                <OptionBar index={0} value="Indoors" text="Indoors" />
                                <OptionBar index={0} value="Outdoors" text="Outdoors" />
                                <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                            </div>
                        </div>
                    )}
                    {qCount === 1 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>2. Do you enjoy helping others?</p>
                            <div className="options-container">
                                <OptionBar index={1} value="Yes" text="Yes" />
                                <OptionBar index={1} value="No" text="No" />
                                <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                            </div>
                        </div>
                    )}
                    {qCount === 2 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "3%"}}>3. On a scale of 1 to 5, how important is a high salary to you?</p>
                            <div className="large-options-container">
                                {[1, 2, 3, 4, 5].map(value => (
                                    <OptionBar key={value} index={2} value={String(value)} text={String(value)} />
                                ))}
                            </div>
                            <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                        </div>
                    )}
                    {qCount === 3 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>4. Would you rather have a job that is routine or varied?</p>
                            <div className="options-container">
                                <OptionBar index={3} value="Routine" text="Routine" />
                                <OptionBar index={3} value="Varied" text="Varied" />
                            </div>
                            <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                        </div>
                    )}
                    {qCount === 4 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>5. Do you prefer working with your hands or technology?</p>
                            <div className="options-container">
                                <OptionBar index={4} value="Hands" text="Hands" />
                                <OptionBar index={4} value="Technology" text="Technology" />
                            </div>
                            <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                        </div>
                    )}
                    {qCount === 5 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>6. Do you like to solve problems or follow instructions?</p>
                            <div className="options-container">
                                <OptionBar index={5} value="Solving Problems" text="Solving Problems" />
                                <OptionBar index={5} value="Following Instructions" text="Following Instructions" />
                            </div>
                            <Button onClick={basicNext} style={{marginTop:"2%"}}>Next</Button>
                        </div>
                    )}
                    {qCount === 6 && (
                        <div className="basicFormat">
                            <p style={{paddingBottom: "5%"}}>7. Would you rather work in an office or remotely?</p>
                            <div className="options-container">
                                <OptionBar index={6} value="Office" text="Office" />
                                <OptionBar index={6} value="Remote" text="Remote" />
                            </div>
                            <Button className="BasicQuestions-getAnswersButton" onClick={getResults} disabled={progress !== 100} style={{marginTop:"2%"}}> Get Answers </Button>
                        </div>
                    )}
                </div>
            </div>
            <footer className='BasicQuestions-Footer'>
                <Form>
                    <Form.Label>API Key:</Form.Label>
                    <Form.Control className="API-form" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
                    <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
                </Form>
            </footer>
        </div>
    );
}

export default BasicQuestions;
