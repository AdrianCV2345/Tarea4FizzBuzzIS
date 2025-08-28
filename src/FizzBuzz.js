function convertirFizzBuzz(n){
     if(n % 3===0 && n % 5===0){return "FizzBuzz";}
     if(n % 3 === 0){return "fizz";}
     if(n % 5 === 0){return "buzz";}
    return n + "";
}


export  default convertirFizzBuzz;
