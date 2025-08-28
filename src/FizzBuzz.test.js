import  convertirFizzBuzz from "./Fizzbuzz.js";

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


describe("Fizzbuzz", () =>{
it("debe convertir numero 3 a fizz", () => {
  expect (convertirFizzBuzz(3)).toEqual("fizz");
});
});


describe("Fizzbuzz", () =>{
it("debe convertir un numero multiplo de 3 a fizz", () => {
  expect (convertirFizzBuzz(9)).toEqual("fizz");
});
});


describe("Fizzbuzz", () =>{
it("debe convertir numero 5 a buzz", () => {
  expect (convertirFizzBuzz(5)).toEqual("buzz");
});
});


describe("Fizzbuzz", () =>{
it("debe convertir un numero multiplo de 5 a buzz", () => {
  expect (convertirFizzBuzz(10)).toEqual("buzz");
});
});
