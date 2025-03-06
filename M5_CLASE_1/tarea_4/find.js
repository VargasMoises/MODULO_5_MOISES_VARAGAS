import { createReadStream } from "fs";

 
const stream = createReadStream('numeros.txt')

stream.on('data', (chunk) => {
    const data = chunk.toString();
    const numeros = data.split(",").map(num => parseInt(num, 10));
    const pares = numeros.filter(num => num % 2 === 0);
    console.log(`Cantidad de números pares: ${pares.length}`);
 })
 stream.on('end', () => {
 console.log("Fin del archivo")
})
