
const fs = require('fs');

let CrearArchivo=(base)=> {

    return new Promise((resolve,reject)=>{

        let tabla='' ;
        for (let i = 1; i < 11; i++) {
          
         tabla+= `${base} * ${i} = ${base * i} \n`
        } 
          fs.writeFile(`Tablas/tabla_del_${base}.txt`,tabla, (err) => {
            if (err){
                reject (err);
            }
            else {
                resolve(`tabla_del_${base}.txt`);
            }
          });
    } )
}

module.exports = {
    CrearArchivo
}