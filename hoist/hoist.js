//1
console.log(hello);                                   
var hello = 'world';  
////////////////////
console.log(hello) //undefined
var hell0 = 'world';                               

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
///////////////////////////
var needle = 'haystack';
function test() {
    var needle = 'magnet';
    console.log(needle);
}
test();

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//////////////////////////
var brendan = 'super cool';
//function not called
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //super cool
//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
///////////////////////

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//////////////////////
mean();
console.log(food); //undefined
// undefined
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); //undefined
//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
////////////////////
var genre;
console.log(genre); // undefined
genre = "disco";
function rewind() {
    genre = "rock"; 
    console.log(genre); // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
rewind();
console.log(genre); // disco
//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
////////////////////////
dojo = "san jose";
console.log(dojo); // san jose
function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
learn();
console.log(dojo); // san jose


