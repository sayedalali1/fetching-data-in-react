// src/services/weatherService.js
const API_KEY = 'df0012b4358844cba9294925240708';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


//BASE_URL&q=London
const show = async (city) => {
    try {
      const query = `&q=${city}`;
      const res = await fetch(BASE_URL + query);
  
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  
  export { show };