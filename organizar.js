// Declarando variables
const fs = require('fs');
const rutaBiblioteca = 'C:\Users\mikeldi25\Desktop\Probando-script' // Declarando el directorio en el que deseo ordenar
const extensiones = [`.txt|.pdf|.docx|.pptx`, `.png|.jpg|.gif`, `.exe|.rar|.zip`,] // Extensiones de las expresiones regulares

fs.readdir(rutaBiblioteca, (err, files)=> {
    files.forEach(archivo => {
        extensiones.forEach(extension => {
            if(buscar(extension, archivo))
            {
                // Crear carpeta de Documentos por su extensión
                if(extension == extensiones [0])
                mover('Documentos', archivo);

                // Crear carpeta de Documentos por su extensión
                if(extension == extensiones [2])
                mover('Imágenes', archivo);

                // Crear carpeta de Documentos por su extensión
                if(extension == extensiones [3])
                mover('Programas', archivo);
            }
        })
    })
})

// Mover los archivos a la carpeta que habemos pasado por el parametro
// En caso de no existir, esta se creará automaticamente y volvera a ejecutar la función

function mover (carpeta, archivo)
{
    const viejaRuta = rutaBiblioteca + '/' + archivo;
    const nuevaRuta = rutaBiblioteca + `/${carpeta}` + archivo;

    fs.rename(viejaRuta, nuevaRuta, (err) => {
        if(err) {
            fs.mkdirSync(`${rutaBiblioteca}/${carpeta}`, {recursive:true});
            mover(carpeta,archivo);
        }
        console.log(archivo + 'fue movido exitosamente.');
    })
}

// Devuelve si es verdadero o falso dependiedno si la extensión del archivo
// coincide con la expresión escrita anteriormente.

function buscar(expresion, archivo) {
    const exp = expresion;
    const er = new RegExp (exp);
    let isTheType = er.test(archivo);
    console.log(expresion + '' + isTheType);

    return isTheType;
}