import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Confirm = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  
  const [searchParams] = useSearchParams(); // Destructure correctly
  const tokenFromQuery = searchParams.get('token'); // Extract token from URL query parameters

  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_BINCOIN_API_URL;

  useEffect(() => {
    if (tokenFromQuery) {
      const fetchToken = async () => {
        try {
          const response = await fetch(`${API_URL}/confirm?token=${tokenFromQuery}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('API response:', data); // Log the response to check its structure
          
        } catch (error) {
          console.error('Error fetching token:', error);
          setError(error.message); // Set error message to display to the user
        }
      };

      fetchToken();
      navigate('/login'); // Redirect after fetching token
    }
  }, [API_URL, tokenFromQuery, navigate]); // Include API_URL in the dependency array

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#EAEFF0]">
      <div className="text-center">
        {error && <p className="text-red-500">Error: {error}</p>}
        {token ? <p>Token: {token}</p> : !error && <p>Fetching token...</p>}
        {!error && !token && <p>Confirmation Successful</p>}
      </div>
    </div>
  );
}

export default Confirm;
