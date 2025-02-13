//Punto 1: Acceso y Modificación Básica de Datos: Dado el siguiente array de libros
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
