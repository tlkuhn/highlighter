import './App.css';
import Token from './Token.js';
import React from 'react';

class App extends React.Component {
    /* Props: 
     *  - passage, a passage of text
     *  - threshold, the minimum similarity score between a token and the reference token (the one the user's mouse is on) that should be highlighted
     *  - tokenSimScores, a dictionary where each key is a token from passage and each value is a dictionary. In that dictionary, each key is a token and each value is the similarity score between the two key tokens expressed as a decimal between 0 and 1.
     */
    constructor(props) {
        super(props);
        
        this.state = {
            refToken: null,
            passage: props.passage,
            tokens: props.passage.split(" "),
            tokenSimScores: props.tokenSimScores,
            threshold: props.threshold || .8,
        };
    }

    handleMouseEnter(token) {
        this.setState({ refToken: token });
    }

    // If a token's similarity to the reference token is less than the specified threshold, don't highlight it
    // Otherwise, raise the distance between the two tokens to the 6th power so subtle differences in distance have noticeably different shades
    distanceToTransparency(distance) {
        return Math.pow(distance > this.state.threshold ? distance : 0, 6)
    }

    render() {
        const tokenEls = this.state.tokens.map((token, index) => (<Token
            token={token}
            index={index}
            onMouseEnter={() => this.handleMouseEnter(token)}
            transparency={this.state.refToken ? this.distanceToTransparency(this.state.tokenSimScores[this.state.refToken][token]) : 0}
        />));

        return (
            <div className="App">
                <div className="highlighterWidget">
                    <h2>Concept Highlighter</h2>
                    <p className="instructions">Hover over a word to see related words.</p>
                    <div className="highlightText">
                        {tokenEls}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;