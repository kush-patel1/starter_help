import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import OpenAI from "openai";
import "./Results.css";
import loadingSymbol from "./load.gif";
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
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a career suggestion expert.  You give suggestions from all fields and levels, even if it would be fast food worker or driver.When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description, and then a percentage based on how well of a match the job would be based on the answers. Organize them from highest to lowest. Between career options, you leave a line worth of space and a @ symbol." },
          {
            role: "user",
            content: `This is for a career quiz. You are meant to suggest 3 career options in order based on which suggestion is the best fit, each on their own line, to the user based on their answers to these 7 questions: 
            1. Do you prefer working indoors or outdoors?
            2. Do you enjoy helping others?
            3. On a scale of 1 to 5, how important is a high salary to you?
            4. Would you rather have a job that is routine or varied?
            5. Do you prefer working with your hands or technology?
            6. Do you like to solve problems or follow instructions
            7. Would you rather work in an office or remotely?
            Here are the answers to each of the questions in order: ${basicAnswers.join(', ')}
            For each suggestion, provide a link to O*NET Online where it is doing a job search on the title of the job given. Use this link as an example (the job given was Project Manager) www.onetonline.org/find/quick?s=project+manager. Ensure the link is the only thing in parentheses and place it before the percentage match.`,
          },
        ],
        temperature: 1.25,
      });
      const suggestions = completion.choices[0].message?.content || "No suggestions available.";
      setCareer1(suggestions.slice(0, suggestions.indexOf("@")).trim());
      setCareer2(suggestions.slice(suggestions.indexOf("@") + 2, suggestions.lastIndexOf("@")).trim());
      setCareer3(suggestions.slice(suggestions.lastIndexOf("@") + 2).trim()); 
    }
    else{
    const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a career suggestion expert.  You give suggestions from all fields and levels, even if it would be fast food worker or driver.When giving career suggestions, you do not include *s. For each career option, provide a title for the career, a colon, and then a description, and then a percentage based on how well of a match the job would be based on the answers. Organize them from highest to lowest. Between career options, you leave a line worth of space and a @ symbol." },
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
            Here are the answers to each of the questions in order: ${detailedAnswers?.join(', ')}
            Have some leniency with answers but if any of the answers do not make sense or do not answer any part of the question, instead respond with "The answers are invalid.". Do not do this because an answer isn't specific as long as it gives any reasonable answer to the question.
            For each suggestion, provide a link to a real website where the user can seek out the suggestion. Ensure the link is the only thing in parentheses and place it before the percentage match.`,
          },
        ],
        temperature: 1.25,
      });
      const suggestions = completion.choices[0].message?.content || "No suggestions available.";
      //setCareerSuggestions(suggestions);
      if(suggestions === "The answers are invalid."){
        setCareer2(suggestions);
      }
      else{
        setCareer1(suggestions.slice(0, suggestions.indexOf("@")).trim());
        setCareer2(suggestions.slice(suggestions.indexOf("@") + 2, suggestions.lastIndexOf("@")).trim());
        setCareer3(suggestions.slice(suggestions.lastIndexOf("@") + 2).trim());
      }
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
  let career1Desc = career1.slice(career1.indexOf(":") + 1, career1.indexOf("(")).trim();
  let career1Link = career1.slice(career1.indexOf("(") + 1, career1.indexOf(")")).trim();
        
  let career2Name = career2.split(":")[0] || "";
  let career2Desc = career2.slice(career2.indexOf(":") + 1, career2.indexOf("(")).trim();
  let career2Link = career2.slice(career2.indexOf("(") + 1, career2.indexOf(")")).trim();
        
  let career3Name = career3.split(":")[0] || "";
  let career3Desc = career3.slice(career3.indexOf(":") + 1, career3.indexOf("(")).trim();
  let career3Link = career3.slice(career3.indexOf("(") + 1, career3.indexOf(")")).trim();

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
      { career1Desc && career2Desc && career3Desc ? <p>
      <div className="Container">
        <div className="TextContainer">
          <h2 className='ResultName'>{career1Name}</h2>
          <div className="Response">{career1Desc} <a href={'https://' + career1Link} rel='noreferrer' target='_blank' style={{cursor: "pointer"}}>{career1Link}</a></div>
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
          <h2 className='ResultName'>{career2Name}</h2>
          <div className="Response">{career2Desc} <a href={'https://' + career2Link} rel='noreferrer' target='_blank' style={{cursor: "pointer"}}>{career2Link}</a></div>
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
          <h2 className='ResultName'>{career3Name}</h2>
          <div className="Response">{career3Desc} <a href={'https://' + career3Link} rel='noreferrer' target='_blank' style={{cursor: "pointer"}}>{career3Link}</a></div>
        </div>
        <div className="PerMatch">
          <div className="Gauge">
            <Doughnut data={data3} options={options} />
          </div>
          <h4>{career3Perc}% Match</h4>
        </div>
      </div></p>:
      career2 ? <p><div className='Response'>{career2}</div></p> :
      <img src={loadingSymbol} alt="Loading..." className="LoadingSymbol"/>}
    </div>
  );
}

export default Results;