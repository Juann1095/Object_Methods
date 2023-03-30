//An object consists of key-value pairs, known as properties
//We can add new key-value pairs to existing objects using the --dot notation-- and the assignment operator.
var car= {}
car.color="red"; //Update the value of a property of the car object 

//These are known as properties, and can take many data types, including functions.
car.turnKey = function (){
    console.log("Engine running")
}

car.lightsOn = function(){
    console.log("The lights are on!")
}

//This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.
console.log("Hello World");

//Create an object using something known as the constructor function
var car={};
car.mileage= 98765;
car.color = "red";
console.log(car)
car.turnKey()
car.lightsOn()

