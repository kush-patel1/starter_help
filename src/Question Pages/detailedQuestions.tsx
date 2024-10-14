import React, { useState } from 'react';
import './detailedQuestions.css';
import { Button, Form } from 'react-bootstrap';

function DetailedQuestions(){
    return (
    <div className='detailedQuestions'>
        <header className = 'DetailedQuestions-header'>
        <h1>Detailed Questions Page</h1>
        </header>
        <body className = 'DetailedQuestions-body'>
          <ol>
          <li><p>Do you prefer managing projects or executing tasks? Why?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>How do you balance job satisfaction with financial stability when considering a career?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>Do you prefer working in established industries or emerging fields? Why?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>When considering a career change, what factors play the biggest role for you?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>In your ideal job, would you rather work on multiple small projects or one large complex task? Why?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>In a team setting, do you prefer taking the lead or supporting others? Why?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          <li><p>What type of work environment helps you stay motivated and productive?</p></li>
          <p>
            <Form>
              <label>
                  <input type="text" name="answer" />
              </label>
            </Form>
          </p>
          </ol>
        </body>
        <footer className = 'DetailedQuestions-footer'>
        <p> Home | Products | Company | Blog </p>
        </footer>
    </div>
    );
}

export default DetailedQuestions;