// Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Load user data from local storage
    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    setUserData(storedData);
  }, []);

  const handleDelete = (index) => {
    // Show confirmation popup and delete row
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = [...userData];
      updatedData.splice(index, 1);
      localStorage.setItem('userData', JSON.stringify(updatedData));
      setUserData(updatedData);
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      <table>
        <thead>
          <tr>
            {/* ... Table header */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              {/* ... Display user data in table rows */}
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;