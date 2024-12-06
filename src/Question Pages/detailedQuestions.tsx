import React, { ChangeEvent, useState } from 'react';
import './detailedQuestions.css';
import { Button, Form } from 'react-bootstrap';
import { ProgressBar } from '../Progress Bar/ProgressBar';

interface QuestionProps {
    homePage: () => void;
    resultsPage: (detailedAnswers?: any[], basicAnswers?: any[]) => void;
    handleSubmit: () => void;
    changeKey: (event: ChangeEvent<HTMLInputElement>) => void;
}

function DetailedQuestions({ homePage, resultsPage, handleSubmit, changeKey }: QuestionProps) {
    const totalQuestions = 7;
    const [detailedAnswers, setDetailedAnswers] = useState(Array(totalQuestions).fill(''));
    const [qCount, setQCount] = useState(0);

    const handleAnswerChange = (index: number, value: string) => {
        const updatedAnswers = [...detailedAnswers];
        updatedAnswers[index] = value;
        setDetailedAnswers(updatedAnswers);
    };

    const answeredQuestions = detailedAnswers.filter(answer => answer !== '').length;
    const progress = Math.floor((answeredQuestions / totalQuestions) * 100);

    const nextQuestion = () => {
        setQCount(prevCount => Math.min(prevCount + 1, totalQuestions - 1));
    };

    function getResults() {
        resultsPage(detailedAnswers, undefined);
    }

    return (
        <div className='detailedQuestions'>
            <header className='DetailedQuestions-header'>
                <h1>Detailed Questions Page</h1>
                <ProgressBar progress={progress} />
                <p className="detailedCheckmark">{progress === 100 ? "✔️" : ""}</p>
                <Button className="Home-Button" onClick={homePage}> HOME </Button>
            </header>
            <div className='DetailedQuestions-body'>
                {qCount === 0 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>1. Do you prefer managing projects or executing tasks? Why?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[0]}
                                onChange={(event) => handleAnswerChange(0, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[0]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 1 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>2. How do you balance job satisfaction with financial stability when considering a career?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[1]}
                                onChange={(event) => handleAnswerChange(1, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[1]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 2 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>3. Do you prefer working in established industries or emerging fields? Why?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[2]}
                                onChange={(event) => handleAnswerChange(2, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[2]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 3 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>4. When considering a career change, what factors play the biggest role for you?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[3]}
                                onChange={(event) => handleAnswerChange(3, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[3]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 4 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>5. In your ideal job, would you rather work on multiple small projects or one large complex task? Why?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[4]}
                                onChange={(event) => handleAnswerChange(4, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[4]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 5 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>6. In a team setting, do you prefer taking the lead or supporting others? Why?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[5]}
                                onChange={(event) => handleAnswerChange(5, event.target.value)}
                            />
                        </Form>
                        <Button onClick={nextQuestion} disabled={!detailedAnswers[5]} style={{ marginTop: "8%" }}>
                            Next
                        </Button>
                    </div>
                )}
                {qCount === 6 && (
                    <div className="detailedFormat">
                        <p style={{paddingBottom: "6%", paddingLeft: "2%", paddingRight: "2%"}}>7. What type of work environment helps you stay motivated and productive?</p>
                        <Form>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                className='DetailedQuestions-textArea'
                                value={detailedAnswers[6]}
                                onChange={(event) => handleAnswerChange(6, event.target.value)}
                            />
                        </Form>
                        <Button
                    className="DetailedQuestions-getAnswersButton"
                    onClick={getResults}
                    disabled={progress !== 100}
                >
                    Get Answers
                </Button>
                    </div>
                )}
            </div>
            <footer className='DetailedQuestions-footer'>
                <Form>
                    <Form.Label>API Key:</Form.Label>
                    <Form.Control
                        className="API-form"
                        type="password"
                        placeholder="Insert API Key Here"
                        onChange={changeKey}
                    />
                    <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
                </Form>
            </footer>
        </div>
    );
}

export default DetailedQuestions;
