const  {CrearArchivo} = require('./Multiplicar/Multiplicar');



let argv = process.argv;
let parametro = argv[2] ;
let base = parametro.split('=')[1]


 CrearArchivo(base).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});


 
