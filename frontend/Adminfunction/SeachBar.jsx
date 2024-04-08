import {FaSearch} from 'react-icons/fa';
import {useState,useEffect} from 'react';
import {UserInfo} from './UserInfo';
import {PostInfo} from './PostInfo';



const SearchBar = ({children,getResult,data}) => {
    const[searchQuery,setSearchQuery] = useState('');
    const[seachResults,setSearchResutls] = useState([]);
   
   
    const handleSearch = (e) => {
      var value = e.target.value;
      if(children === 'Search Post'){
        const filteredItems = PostInfo.filter(
            (item) => item.content.includes(searchQuery) || item.postId.includes(searchQuery)
            );
            getResult(filteredItems);
           
      }
      if(children === 'Search User'){
        console.log("at Search User");
           const filteredItems = data.filter(
            (item) => item.username.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log(filteredItems);
            getResult(filteredItems);
           

      }
  
    }

    return ( 
     <div className="searchBar">
        <FaSearch id="search-icon" />
        <input type="text" placeholder={children} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={handleSearch} />
    </div>
     );
}
export default SearchBar;