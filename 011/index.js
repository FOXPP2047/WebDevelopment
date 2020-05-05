//jshint esversion:6
// const fs = require("fs");
//
// fs.copyFileSync("file1.txt", "file2.txt");
const supervillains = require('supervillains');
const superHeroes = require("superheroes");

let mySupervillainsName = supervillains.random();
let mySuperheroName = superHeroes.random();

console.log("Super Hero : " + mySuperheroName);
console.log("Super Villains : " + mySupervillainsName);
