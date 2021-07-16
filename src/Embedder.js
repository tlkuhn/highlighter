import React from 'react';

/* Assumptions: Takes in a reference token and an array of comparison tokens and returns a dictionary mapping each comparison token in the passage to a decimal
 * weight between 0 and 1 based on some meaningful definition of conceptual similarity. API endpoint interface could go here. */ 
const getEmbeddings = ({ refToken, compTokens }) => {
    console.log("refToken: " + refToken);
    console.log(compTokens);
    let tokenDistances = {};
    //compTokens.forEach(token => { tokenDistances[token] = Math.random(); });
    //console.log(tokenDistances);
    return tokenDistances;
};

export default getEmbeddings;