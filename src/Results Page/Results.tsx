//import React, { useState } from 'react';
//import { Button, Form } from 'react-bootstrap';
//import { ProgressBar } from '../Progress Bar/ProgressBar';
import "./Results.css"

interface ResultsProps {
  answers: any[]; // Replace 'any' with a more specific type if possible
}

export const Results: React.FC<ResultsProps> = ({ answers }) => {
    return(
    <div className="Results">
      <div className="Results-header"/>
      {answers[1]}
    </div>
  );
 }