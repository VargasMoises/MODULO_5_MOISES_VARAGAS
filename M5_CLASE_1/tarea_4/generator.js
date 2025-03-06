import {createWriteStream} from 'fs'

const generarNumeros = () => Array.from({ length: 1000 }, (_, i) => i + 1).join(",");

//console.log(generarNumeros());

const stream = createWriteStream('./numeros.txt')
 stream.write(generarNumeros())
 stream.end() 
