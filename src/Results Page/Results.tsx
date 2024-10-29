import React, { useEffect, useState } from 'react';
import OpenAI from "openai";
import "./Results.css";

interface ResultsProps {
  answers: string[];
  apiKey: string; // New prop for API key
}

export const Results: React.FC<ResultsProps> = ({ answers, apiKey }) => {
  const [careerSuggestions, setCareerSuggestions] = useState<string>("");

  const openai = new OpenAI({
    apiKey: apiKey, dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    async function createCompletion() {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4", // Ensure model is correct; use "gpt-4" or another available model
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
              role: "user",
              content: `This is for a career quiz. You are meant to suggest 3 career options to the user based on their answers to these 7 questions: 
              1. Do you prefer managing projects or executing tasks? Why? 
              2. How do you balance job satisfaction with financial stability when considering a career? 
              3. Do you prefer working in established industries or emerging fields? Why? 
              4. When considering a career change, what factors play the biggest role for you? 
              5. In your ideal job, would you rather work on multiple small projects or one large complex task? Why? 
              6. In a team setting, do you prefer taking the lead or supporting others? Why? 
              7. What type of work environment helps you stay motivated and productive? 
              Here are the answers to each of the questions in order: ${answers.join(', ')}`,
            },
          ],
        });
        
        setCareerSuggestions(completion.choices[0].message?.content || "No suggestions available.");
      } catch (error) {
        console.error("Error fetching career suggestions:", error);
      }
    }

    createCompletion();
  }, [answers, apiKey, openai.chat.completions]);

  return (
    <div className="Results">
      <h2>Career Suggestions</h2>
      <div>{careerSuggestions}</div>
    </div>
  );
};

/*

import React, { useState, useEffect } from 'react';
//import { Button, Form } from 'react-bootstrap';
//import { ProgressBar } from '../Progress Bar/ProgressBar';
import "./Results.css"
import OpenAI from "openai";


interface ResultsProps {
  answers: string[]; // Replace 'any' with a more specific type if possible
}




export const Results: React.FC<ResultsProps> = ({ answers }) => {
  const [careerSuggestions, setCareerSuggestions] = useState<string>("");
  const openai = new OpenAI({
    //apiKey:
});
  
useEffect(() => { 
    async function createCompletion() {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
              role: "user",
              content: `This is for a career quiz. You are meant to suggest 3 career options to the user based on their answers to these 7 questions: 
              1. Do you prefer managing projects or executing tasks? Why? 
              2. How do you balance job satisfaction with financial stability when considering a career? 
              3. Do you prefer working in established industries or emerging fields? Why? 
              4. When considering a career change, what factors play the biggest role for you? 
              5. In your ideal job, would you rather work on multiple small projects or one large complex task? Why? 
              6. In a team setting, do you prefer taking the lead or supporting others? Why? 
              7. What type of work environment helps you stay motivated and productive? 
              Here are the answers to each of the questions in the order the questions are: ${answers.join(', ')}`
          },
      ],
  });
  setCareerSuggestions(completion.choices[0].message.content);
  }
}
createCompletion();
}, [answers]);

    return(
    <div className="Results">
      <div className="Results-header"/>
      <div>{careerSuggestions || "Loading suggestions..."}</div>
    </div>
  );
 }
*/