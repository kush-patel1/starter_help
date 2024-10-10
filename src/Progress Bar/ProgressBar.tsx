import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

type Props={
    progress: number;
}

export function ProgressBar({progress}:Props){
    return <div><div style = {{width: '300px', backgroundColor: "gray", height: '10px', }}>
            <div style = {{width: '50%', backgroundColor: "blue", height: '100%'}} />
        </div>
        </div>;
}