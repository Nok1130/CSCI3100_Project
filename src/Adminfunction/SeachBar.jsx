import {FaSearch} from 'react-icons/fa';
import {useState} from 'react';
const SearchBar = () => {
    const[input,setInput]=useState('');

    const fetchData = (input) => {

    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    return ( 
     <div className="searchBar">
        <FaSearch id="search-icon" />
        <input type="text" placeholder='Search User' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
     );
}
 
export default SearchBar;