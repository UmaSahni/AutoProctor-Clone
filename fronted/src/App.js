import React, { useEffect } from 'react';
import Routes from './AllRoutes';
import { v4 as uuidv4 } from 'uuid';

function App() {
  useEffect(() => {
    // Check if a user ID is already stored in sessionStorage
    const storedUserId = sessionStorage.getItem('userId');

    // If no user ID is stored, generate a new one and store it in sessionStorage
    if (!storedUserId) {
      const newUserId = uuidv4();
      sessionStorage.setItem('userId', newUserId);
      console.log('Generated User ID:', newUserId);
    }
  }, []);

  return (
    <div  >
      <Routes />
    </div>
  );
}

export default App;
