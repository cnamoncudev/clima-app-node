const axios = require ('axios');

const getClima =async (ciudad)=>{
    
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?units=metric&mode=xml%252C%20html&q=${ciudad}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '7a932979abmsh1a960168cb698d1p175f64jsn6f890dfe6d8d'}
      });

    const resp =await instance.get();
    const lat= resp.data.coord.lat;
    const lon= resp.data.coord.lon; 
    
   //return resp.data.main.temp;

   return {
       lon,
       lat
    }
}

module.exports={
    getClima
}