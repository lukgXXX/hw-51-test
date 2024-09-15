import React, { useState } from 'react';
import './App.css';
import Ball from "./components/Ball/Ball.tsx";

const generateRandomNumber = ():number[] => {
    const numbers:number[] = [];

    while(numbers.length < 5){
        const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

        if(!numbers.includes(randomNumber)){
            numbers.push(randomNumber);
        }
    }

    return numbers.sort((a,b) => a-b);
}

const App: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const newNumbers = () => {
        setNumbers(generateRandomNumber());
    }


    return (
        <>
            <div className="App">
                <button type="button" onClick={newNumbers}>New Number</button>

                <div className={'balls-container'}>
                    {numbers.map(number => (
                        <Ball number={number} key={number} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
