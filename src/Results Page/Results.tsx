import React, { useState } from 'react';
import OpenAI from "openai";
import "./Results.css";

interface ResultsProps {
  answers: string[];
  apiKey: string;
}

export const Results: React.FC<ResultsProps> = ({ answers, apiKey }) => {
  const [careerSuggestions, setCareerSuggestions] = useState<string>("");

  // Define the function to fetch career suggestions
  async function fetchCareerSuggestions() {
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
            Here are the answers to each of the questions in order: ${answers.join(', ')}`,
          },
        ],
      });
      setCareerSuggestions(completion.choices[0].message?.content || "No suggestions available.");
  }
  fetchCareerSuggestions();
  return (
    <div className="Results">
      <h2 className='Results-header'>Career Suggestions</h2>
      <button className='GetCareerSuggestions' onClick={fetchCareerSuggestions}>Get Career Suggestions</button>
      <div className='Response'>{careerSuggestions}</div>
    </div>
  );
};
