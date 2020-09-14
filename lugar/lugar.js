
const axios= require('axios');

const getLugarLatLng = async (direccion) => {
    const encodedUrl= encodeURI(direccion);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        //timeout: 1000,
        headers: {'x-rapidapi-key': '7a932979abmsh1a960168cb698d1p175f64jsn6f890dfe6d8d'}
      });

/*
      instance.get()
      .then (resp=>{
          console.log(resp.data);
      }).catch(err=>{
          console.log (`Error`,err);
      });
*/

const resp = await instance.get();
console.log(resp.data.Results);

if (resp.data.Results === null){
    throw new Error(`No hay resultados para ${direccion}`);
}

const respuesta = data.Results[0];
const direc = data.name;
const lat = data.lat;
const lng = data.lon;

      return {
          direc,
          lat,
          lng
      }

}

module.exports ={ 
    getLugarLatLng
}