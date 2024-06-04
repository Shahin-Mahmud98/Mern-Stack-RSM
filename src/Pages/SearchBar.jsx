import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://web-app-mern-server.vercel.app/search', {
          params: { q: searchTerm },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setData([]); // Clear the data when search term is empty
    }
  }, [searchTerm]);

  return (
    <div className=''>
      <div className="flex flex-col justify-center items-center mt-10 rounded-lg ">
        <div className="">
          <input className=" p-4 max-w-md shadow-2xl border border-black rounded-lg"
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {data.map((val) => {
            return (
              <div className="template" key={val._id}>
                <img src={val.image} alt={val.title} />
                <h3>{val.title}</h3>
                <p className="price">${val.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
