const http = require('http');
const fs = require('fs');

const PORT = 3002;
const FILE_PATH = 'productos.json';
const readProducts = () => {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Función para escribir en el archivo JSON
const writeProducts = (products) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2), 'utf8');
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/products') {
        const products = readProducts();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    
    } else if (req.method === 'POST' && req.url === '/products') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newProduct = JSON.parse(body);
                if (!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.category) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Todos los campos son obligatorios: id, name, price, category' }));
                    return;
                }

                const products = readProducts();
                products.push(newProduct);
                writeProducts(products);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newProduct));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Formato JSON inválido' }));
            }
        });
    
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
