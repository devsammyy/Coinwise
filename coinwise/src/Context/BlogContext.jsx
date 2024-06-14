import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext(null);

const StoreContextProvider = (props) => {

  // API response will be saved in this state
  const [cryptoData, setcryptoData] = useState(null)
  console.log(cryptoData);

  useEffect(() => {

    // Create a function to make API request
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl'
        },
        headers: {
          'x-rapidapi-key': '0d93fb5ea1msh5470af294a84a62p1b2147jsn2376be21262b',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };
      
      // Use axios to make API request
      try {
        const response = await axios.request(options);
        setcryptoData(response.data.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    // Call the fetchData function
    fetchData();
  }, [])

  const contextValue = {}

  return (
    <BlogContext.Provider value={contextValue}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default StoreContextProvider;