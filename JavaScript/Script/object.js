let cat = { name: "lucy", color: "golden", age: 3};

let dog = new Object();
dog.breed = "husky";
dog.name = "jacky";
dog.isVaccinated = true;
// this two are same
// let dog = {breed: "husky", name: "jackey", isVaccinated: true};


document.getElementById("para1").innerHTML = "breed: " + dog.breed + "<br>name: " + dog["name"] + "<br>isVaccinated: " + dog.isVaccinated;

delete dog.isVaccinated; 
console.log(dog);
dog.age = 5;
console.log(dog);


const person = {
    fname: "Yeshi",
    lname: "Choden",
    age: 22,
    fullname: function() {
        return this.fname + " " + this.lname
    }
};

document.getElementById("para1").innerHTML = person.fullname();