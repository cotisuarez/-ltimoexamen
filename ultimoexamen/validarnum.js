function Validar(num){
    const promesa = new Promise ((resolve,reject) => {
        if(num > 5){ resolve ("Número válido")
    } else{
        reject("Número inválido")
    }
    })
    
    Validar(num)
    .then((mensaje) => {
        console.log(mensaje)
    } )
    .catch((error) => {
        console.log(error)
    })
    return promesa
}
console.log(Validar(10))