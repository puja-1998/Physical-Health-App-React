import React from 'react';
import '../CSS/Search.css';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className='container'>
        <div className='heading'>
          <h1>Awesome Exercise You </h1>
          <h1>Should Know</h1>
        </div>
        
        <div className='searchdiv'>
          <input type="text" placeholder='Search Exercise...' />
          <button>Search</button>
        </div>

    </div>
  )
}
