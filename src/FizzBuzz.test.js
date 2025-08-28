import  convertirFizzBuzz from "./fizzbuzz";

describe("Fizzbuzz", () =>{
it("debe convertir un numero que no es multiplo de 3 ni 5", () => {
  expect (convertirFizzBuzz(1)).toEqual("1");
});
});

describe("Fizzbuzz", () =>{
it("debe convertir un cualquiera numero que no es multiplo de 3 ni 5", () => {
  expect (convertirFizzBuzz(4)).toEqual("4");
});
});