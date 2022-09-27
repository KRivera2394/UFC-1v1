import { useState, useEffect } from "react";
import ResultList from "./ResultList";

// Import our search method
import search from "../utils/API";

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  const [fighter, setFighter] = useState("");

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query);
    setResults(response.data.data);
    setFighter(fighter)
  };

   const handleInputChange = (e) => {
     const { target } = e;
     const inputType = target.name;
     const inputValue = target.value;
    //  const inputValue = target.value;
     if (inputType === "fighterName") {
      //  setFighter(fighter);
       
       searchGiphy(inputValue)
     }
   };
  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy("UFC Fight Night");
   
  });
 ;
  

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <ResultList results={results} />
      <h1>{fighter}</h1>
      <input
        value={fighter}
          onChange={handleInputChange}
        name="fighterName"
        // onChange={handleInputChange}
        type="text"
        placeholder="Choose your fighter!"
      />
    </div>
  );
};

export default SearchResultContainer;
