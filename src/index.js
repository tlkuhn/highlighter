import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const passage = "Treasury Secretary Janet Yellen cautioned Thursday that prices could continue to rise for several more months, though she expects the recent startling inflation run to ease over time. In a CNBC interview, the Cabinet official added that she worries about the problems inflation could pose for lower - income families looking to buy homes at a time when real estate values are surging.";
const tokens = passage.split(" ");

const tokenSimScores = {};
tokens.forEach((refToken) => {
    let simScores = {};
    tokens.forEach((token) => {
        // Toy method of calculating similarity scores between words based on whether they have similar numbers of characters
        simScores[token] = 1 - (Math.abs(refToken.length - token.length) / Math.max(refToken.length, token.length));
        if (token != refToken) { simScores[token] = simScores[token] * 0.92 }
    });
    tokenSimScores[refToken] = simScores;
})

ReactDOM.render(
  <React.StrictMode>
    <App
            passage={passage}
            threshold={.75}
            tokenSimScores={tokenSimScores}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
