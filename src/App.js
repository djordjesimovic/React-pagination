import './App.css';
import React, { useState, useEffect } from 'react';

import UserCard from './UserCard';


function App() {

  const [randomData, setRandomData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchFromApi = (pageNumber) => {
    fetch(`https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc`)
    .then(res => res.json())
    .then(data => {
      const users = data.results;
      setRandomData(users || 'No data');
      console.log(users)
      setCurrentPage(currentPage + 1);
    })
  }

  useEffect(() => {
    fetchFromApi(currentPage);
  }, []);

  const updatePage = () => {
    fetchFromApi(currentPage);
  }

  return (
    <div className="container">
      <main className='feed'>
        {
          randomData.length > 0 && randomData.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))
        }
        <button onClick={() => updatePage()} className='load-more-button'>Load More</button>
      </main>
      
    </div>
  );
}

export default App;



