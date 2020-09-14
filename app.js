const argv = require('yargs').option({
    direccion:{
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

 const lugar = require('./lugar/lugar');
 const tiempo = require ('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
// .then(console.log);

// tiempo.getClima(argv.direccion)
// .then(console.log)
// .catch(console.log);

const getInfo = async (direccion) => {

    try {
        const coordenadas = await tiempo.getClima(direccion);
        const temperatura = await tiempo.getClima(coordenadas.lat,coordenadas.lon);
        return `El Clima de ${direccion} es ${temperatura}.`;
    } catch (e) {
        return `No se pudo determinar el clima ${direccion}`;
    }
   

}


getInfo(argv.direccion)
.then(console.log)
.catch(console.log);
//console.log(argv.direccion);
