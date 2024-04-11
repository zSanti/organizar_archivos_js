const fs = require('fs');
require('dotenv').config();

// Recoger la ruta del usuario que desea organizar
const rutaBiblioteca = process.env.RUTA_BIBLIOTECA;

// Listado de extensiones para organizar los archivos en base a su extensión.
const extensiones = [
    ['.txt', '.pdf', '.docx', '.pptx'],
    ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.jfif'],
    ['.exe', '.rar', '.zip', '.jar']
];

// Leemos el directorio que el usuario desea organizar
fs.readdir(rutaBiblioteca, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio:', err);
        return;
    }
    // Si encuentra archivos cogeremos este mismo y revisaremos su extension
    files.forEach(archivo => {
        // Leemos los archivos con su extension
        extensiones.forEach((extension, index) => {
            // SI la extension coincide con alguno de la lista, y termina por dicha extension
            if (extension.some(ext => archivo.endsWith(ext))) {
                switch (index) {
                    case 0:
                        // Crearemos la carpeta de Documentos por su extensión
                        mover('Documentos', archivo);
                        break;
                    case 1:
                        // Crearemos la carpeta de Imágenes por su extensión
                        mover('Imágenes', archivo);
                        break;
                    case 2:
                        // Crearemos la carpeta de Programas por su extensión
                        mover('Programas', archivo);
                        break;
                    default:
                        console.log('Extensión no reconocida');
                }
            }
        });
    });
});