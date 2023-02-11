import React, { useEffect, useRef } from "react";
import {ReactComponent as SearchIcon} from '../../../assets/images/serachIcon.svg';
const SearchBar = ({handleSubmit , searchTerm , setSearchTerm , autoFocus = false}) => {
  const first = useRef(null)

  useEffect(() => {
    
  if(first.current){
    first.current.focus()
  }
    
  }, [])
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={first}
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
   
      <button className="search-submit" type="submit"> <SearchIcon /></button>
    </form>
  );
};

export default SearchBar;