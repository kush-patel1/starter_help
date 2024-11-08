import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OpenAI from "openai";
import "./Results.css";
import loadingSymbol from "./LoadingSymbol.gif";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


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
          { role: "system", content: "You are a career suggestion expert. When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description, and then a percentage based on how well of a match the job would be based on the answers. Organize them from highest to lowest. Between career options, you leave a line worth of space and a @ symbol." },
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
      //setCareerSuggestions(suggestions);
      setCareer1(suggestions.slice(0, suggestions.indexOf("@")).trim());
      setCareer2(suggestions.slice(suggestions.indexOf("@") + 2, suggestions.lastIndexOf("@")).trim());
      setCareer3(suggestions.slice(suggestions.lastIndexOf("@") + 2).trim());
    }
    else{
    const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a career suggestion expert. When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description, and then a percentage based on how well of a match the job would be based on the answers. Organize them from highest to lowest. Between career options, you leave a line worth of space and a @ symbol." },
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

  let career1Perc = parseInt(career1.slice(career1.length - 3, career1.length - 1));
  let career2Perc = parseInt(career2.slice(career2.length - 3, career2.length - 1));
  let career3Perc = parseInt(career3.slice(career3.length - 3, career3.length - 1));

  let career1Name = career1.split(":")[0] || "";
  let career1Desc = career1.slice(career1.indexOf(":") + 1).trim();
  career1Desc = career1Desc.slice(0, career1Desc.length - 4);

  let career2Name = career2.split(":")[0] || "";
  let career2Desc = career2.slice(career2.indexOf(":") + 1).trim();
  career2Desc = career2Desc.slice(0, career2Desc.length - 4);

  let career3Name = career3.split(":")[0] || "";
  let career3Desc = career3.slice(career3.indexOf(":") + 1).trim();
  career3Desc = career3Desc.slice(0, career3Desc.length - 4);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    rotation: -90,         // Starts the chart from the top-center
    circumference: 180,    // Only displays half of the chart (180 degrees)
    cutout: '70%',         // Adjusts the thickness of the gauge
  };

  const data1 = {
    datasets: [
      {
        data: [career1Perc, 100 - career1Perc],
        backgroundColor: ['#32CD32', '#b3b3b3'],
        hoverBackgroundColor: ['#66FF66', '#cccccc']
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [career2Perc, 100 - career2Perc],
        backgroundColor: ['#1E90FF', '#b3b3b3'],
        hoverBackgroundColor: ['#63A4FF', '#cccccc']
      },
    ],
  };

  const data3 = {
    datasets: [
      {
        data: [career3Perc, 100 - career3Perc],
        backgroundColor: ['#FF7F32', '#b3b3b3'],
        hoverBackgroundColor: ['#FF9F66', '#cccccc']
      },
    ],
  };


  return (
    <div className="Results"> 
      <header className='Results-header'>
        <h1>Career Suggestions</h1>
        <Button className="Home-Button" onClick={homePage}>HOME</Button>
      </header>
      <div className="Container">
        <div className="TextContainer">
          <h2 style={{ paddingTop: "30px" }}>{career1Name}</h2>
          <div className="Response">{career1Desc}</div>
        </div>
        <div className="PerMatch">
          <div className="Gauge">
            <Doughnut data={data1} options={options} />
          </div>
          <h4>{career1Perc}% Match</h4>
        </div>
      </div>
      <div className="Container">
        <div className="TextContainer">
          <h2 style={{ paddingTop: "30px" }}>{career2Name}</h2>
          <div className="Response">{career2Desc}</div>
        </div>
        <div className="PerMatch">
          <div className="Gauge">
            <Doughnut data={data2} options={options} />
          </div>
          <h4>{career2Perc}% Match</h4>
        </div>
      </div>
      <div className="Container">
        <div className="TextContainer">
          <h2 style={{ paddingTop: "30px" }}>{career3Name}</h2>
          <div className="Response">{career3Desc}</div>
        </div>
        <div className="PerMatch">
          <div className="Gauge">
            <Doughnut data={data3} options={options} />
          </div>
          <h4>{career3Perc}% Match</h4>
        </div>
      </div>
    </div>
  );
}

export default Results;