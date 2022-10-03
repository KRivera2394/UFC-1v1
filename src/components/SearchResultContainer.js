import { useState } from "react";
import ResultList from "./ResultList";
import search from "../utils/API";

const SearchResultContainer = () => {
  const [results, setResults] = useState([]);
  const [fighter, setFighter] = useState("");

  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "fighterName") {
      setFighter(inputValue);
    }
  };
  var checkFighter = false;
  const submitFighter = () => {
    document.getElementById("yer").value = "";
    setFightGif(searchGiphy(fighter));
    

if(!checkFighter){
    
    // checkFighter = true
    // checkFighter = localStorage.getItem("Fighter 1");
    localStorage.setItem("Fighter 2", fighter);
      checkFighter = document.getElementById('yer') 
      console.log(checkFighter);
     
  };
   
  
  if (checkFighter) { 
    checkFighter = document.getElementById('yer').value 
    document.getElementById('fightButt').onclick = function(){

      console.log("HEY");
      localStorage.setItem("Fighter 1", fighter);
    }
    // localStorage.setItem("Fighter 2", fighter);
    
    
    // const checkFighterTwo = localStorage.getItem("Fighter 2");
    // console.log(checkFighterTwo);
  }
}



  const [fightGif, setFightGif] = useState(searchGiphy(submitFighter));

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <ResultList results={results} />
      <h1>{fighter}</h1>
      <input
        id="yer"
        // onSearch={submitFighter}
        onChange={handleInputChange}
        name="fighterName"
        type="search"
        placeholder="Choose your fighter!"
      />
      <button type="button" id="fightButt" onClick={submitFighter}>
        Submit
      </button>
    </div>
  );
};

export default SearchResultContainer;
