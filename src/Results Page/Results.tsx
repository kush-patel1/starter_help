import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OpenAI from "openai";
import "./Results.css";

interface ResultsProps {
  homePage: () => void;
  basicAnswers?: string[];
  detailedAnswers?: string[];
  apiKey: string;
}

export const Results: React.FC<ResultsProps> = ({ homePage, detailedAnswers, basicAnswers, apiKey }) => {
  const [careerSuggestions, setCareerSuggestions] = useState<string>("");
  const [responseGen, setResponseGen] = useState<boolean>(true);

  // Define the function to fetch career suggestions
  async function fetchCareerSuggestions() {
    if (basicAnswers){
      const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `This is for a career quiz. You are meant to suggest 3 career options to the user based on their answers to these 7 questions: 
            1. Do you prefer working indoors or outdoors? 
            2. Do you enjoy helping others?
            3. On a scale of 1 to 5, how important is a high salary to you? 
            4. Would you rather have a job that is routine or varied? 
            5. Do you prefer working with your hands or technology? 
            6. Do you like to solve problems or follow instructions 
            7. Would you rather work in an office or remotely? 
            Here are the answers to each of the questions in order: ${basicAnswers?.join(', ')}`,
          },
        ],
      });
      setCareerSuggestions(completion.choices[0].message?.content || "No suggestions available.");
    }
    else{
    const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
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
            Here are the answers to each of the questions in order: ${detailedAnswers?.join(', ')}`,
          },
        ],
      });
      setCareerSuggestions(completion.choices[0].message?.content || "No suggestions available.");
    }
  }
  if(responseGen){
    fetchCareerSuggestions();
    setResponseGen(false);
  }
  




  return (
    <div className="Results">
      <header className='Results-header'>
        <h1>Career Suggestions</h1>
        <Button className="Home-Button" onClick={homePage}>HOME</Button>
      </header>
      <div className='Response'>{careerSuggestions}</div>
    </div>
  );
};

export default Results;