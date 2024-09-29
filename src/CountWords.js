import React from 'react'
import App from './App'
import CharcterCount from './CharcterCount';

function CountWords(text) {
    
    const wordCount = text.split(/\s+/);
     const uniqueWords=new Set(wordCount);

    let charCount = 0;
    wordCount.forEach((word) => {
        charCount += word.length;
    });
    let totalUniquewords=uniqueWords.size;
    let characters_count=charCount;

    return {
        totalUniquewords: uniqueWords.size,
        characters_count: charCount
    };
    // alert(`The total number of words is: ${wordCount}`);
}

export default CountWords;


