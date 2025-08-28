function convertirFizzBuzz(n){
     if(n % 3===0 && n % 5===0){return "FizzBuzz";}
     if(n % 3 === 0){return "fizz";}
     if(n % 5 === 0){return "buzz";}
    return n + "";
}


function fizzBuzzCadena(n){
 let cadena = "";
     for(let i = 1; i <= n; i++){
         cadena += convertirFizzBuzz(i);
         if(i < n) cadena += ", ";
     }
     return cadena;}


export  {convertirFizzBuzz, fizzBuzzCadena};