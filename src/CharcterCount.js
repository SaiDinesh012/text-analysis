import React from 'react';

const CharacterCount = ({ uniqueWords }) => {
    // Create a function to count characters
    function d() {
        let charCount = 0;
        uniqueWords.forEach((word) => {
            charCount += word.length;
        }); 
        return charCount
    }

    const totalCharacters = d(); 

    return (
        <div>
            <h2>Total Characters: {totalCharacters}</h2>
        </div>
    );
};

export default CharacterCount;
