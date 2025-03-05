import esperarSegundos from './async.js';

async function prueba() {
    await esperarSegundos(2);
    await esperarSegundos(5); 
    await esperarSegundos(3); 
}

prueba();