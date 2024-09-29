
import { useState } from 'react';
import './App.css';
import CountWords from './CountWords';

function App() {

  let [num,updatenum]=useState("");
  const [searchString, setSearchString] = useState(""); 
  const [replaceString, setReplaceString] = useState("");
  const [wordAlert, setWordAlert] = useState(0);
  const [uniqueWordAlert, setUniqueWordAlert] = useState(0);
  const [characterAlert, setCharacterAlert] = useState(0); 

  const { totalUniquewords, characters_count } = CountWords(num) || { totalUniquewords: 0, characters_count: 0 };
  function handleText(e){
    updatenum(e.target.value);
    setWordAlert(totalUniquewords);
    setCharacterAlert(characters_count);
    
  }
  
  // const updateWordCount = (count) => {
  //   setWordAlert(count);
  // };

  // const updateUniqueWordCount = (count) => {
  //   setUniqueWordAlert(count);
  // };

  // const updateCharacterCount = (count) => {
  //   setCharacterAlert(count);
  // };





 
  const handleReplaceAll = () => {
    if (searchString.trim() === "") {
      alert("Please enter the string you want to search for.");
      return;
    }
    const newText = num.split(searchString).join(replaceString);
    updatenum(newText); 
    setReplaceString("");
    setSearchString("");

  };





  return (
    
    <div className='  bg-green-300 h-screen text-center justify-center  items-center p-3'>
        <h1 className='text-4xl font-medium uppercase underline decoration-solid text-center'>Text-analysis</h1>
        <div className='p-80 m-5'>
        <div className='text-center p-3 m-3 h-8 '>
              <input type='text' value={num} placeholder='Enter the text here....' className='text-2xl border-solid border-4 border-black-500/100'
              onChange={e => updatenum(e.target.value)}/>
              <button onClick={handleText} className='border-solid border-2 text-black p-2 bg-sky-500 '>click</button>
        </div>
        <div className='flex flex-nowrap justify-center   '>
         <div className='border-solid m-3 p-3'>
            <input
              type="text"
              placeholder="Search for..."
              value={searchString}
               
              onChange={(e) => setSearchString(e.target.value)}
            />
      </div>
       <div className='border-solid m-3 p-3'>
        <input
          type="text"
          placeholder="Replace with..."
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
      </div>
    
    </div>
    <button onClick={handleReplaceAll} className='border-solid border-2 text-black p-2 bg-sky-500 m-3'>Replace All</button>
    
    <h1>Unique words:{wordAlert}</h1>
    <h1>Total Characters:{characterAlert}</h1>
      </div> 
      </div>
      
    
  );
}

export default App;
