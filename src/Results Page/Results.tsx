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
  //const [careerSuggestions, setCareerSuggestions] = useState<string>("");
  const [responseGen, setResponseGen] = useState<boolean>(true);
  const [career1, setCareer1] = useState<string>("");
  const [career2, setCareer2] = useState<string>("");
  const [career3, setCareer3] = useState<string>("");

  // Define the function to fetch career suggestions
  async function fetchCareerSuggestions() {
    if (basicAnswers){
      const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a career suggestion expert. When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description. Between career options, you leave a line worth of space and a @ symbol." },
          {
            role: "user",
            content: `This is for a career quiz. You are meant to suggest 3 career options, each on their own line, to the user based on their answers to these 7 questions: 
            1. Do you prefer managing projects or executing tasks? Why? 
            2. How do you balance job satisfaction with financial stability when considering a career? 
            3. Do you prefer working in established industries or emerging fields? Why? 
            4. When considering a career change, what factors play the biggest role for you? 
            5. In your ideal job, would you rather work on multiple small projects or one large complex task? Why? 
            6. In a team setting, do you prefer taking the lead or supporting others? Why? 
            7. What type of work environment helps you stay motivated and productive? 
            Here are the answers to each of the questions in order: ${basicAnswers.join(', ')}`,
          },
        ],
      });
      const suggestions = completion.choices[0].message?.content || "No suggestions available.";
      setCareerSuggestions(suggestions);
      setCareer1(suggestions.slice(0, suggestions.indexOf("@")).trim());
      setCareer2(suggestions.slice(suggestions.indexOf("@") + 2, suggestions.lastIndexOf("@")).trim());
      setCareer3(suggestions.slice(suggestions.lastIndexOf("@") + 2).trim());
    }
    else{
    const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a career suggestion expert. When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description. Between career options, you leave a line worth of space and a @ symbol." },
          {
            role: "user",
            content: `This is for a career quiz. You are meant to suggest 3 career options, each on their own line, to the user based on their answers to these 7 questions: 
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
      const suggestions = completion.choices[0].message?.content || "No suggestions available.";
      //setCareerSuggestions(suggestions);
      setCareer1(suggestions.slice(0, suggestions.indexOf("@")).trim());
      setCareer2(suggestions.slice(suggestions.indexOf("@") + 2, suggestions.lastIndexOf("@")).trim());
      setCareer3(suggestions.slice(suggestions.lastIndexOf("@") + 2).trim());
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
      <div className='Response'>{career1}</div>
      <div className='Response'>{career2}</div>
      <div className='Response'>{career3}</div>
    </div>
  );
}

export default Results;