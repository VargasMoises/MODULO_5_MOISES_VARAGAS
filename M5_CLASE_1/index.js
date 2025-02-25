
//PUNTO 1 Acceso y Modificación Básica de Datos: Dado el siguiente array de libros
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
//Imprime en la consola el nombre y el autor del segundo libro.
//console.log([libros[2].titulo],[libros[2].autor]);

const book1 = [libros[2].titulo, libros[2].autor];
//console.log(book1);

//Actualiza el número de páginas del primer libro a 350.
//Imprima en la consola la información completa del primer libro después de la actualización.
libros[1].paginas= 350;
//console.log(libros[1]);

//Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades tituloy autor
const librosSinPaginas=libros.map(({paginas, ...resto }) => resto);
//console.log(librosSinPaginas);

//Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle para:
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

//Calcula la suma de las edades de todos los estudiantes en el array.
const sumaEdad = estudiantes.reduce((acomulado , estudiantes) =>{
    return acomulado + estudiantes.edad;
}, 0);

//Calcula el promedio de edad de los estudiantes.
const promedioTotal = estudiantes.reduce((acomulado , estudiantes) => {
    return acomulado + estudiantes.promedio;
}, 0) / estudiantes.length;

//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
//console.log("suma de las edades = " + sumaEdad," ---- promedio total = " + promedioTotal.toFixed(2));

//Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];
//Utilizando filterdebes filtrar los productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
const productosRopa = productos.filter(producto => producto.categoria === "Ropa");
//console.log(productosRopa);

//Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
const productosMayoresDeTreinta = productos.filter(producto => producto.precio > 30);
//console.log(productosMayoresDeTreinta);
