
const random = function (min, max) {
    return Math.random() * (max - min) + min;
}

let rand = 10; 

while (rand !== 10){
    rand = Math.floor(random(1,50));
    console.log(rand);
}

do {
    rand = Math.floor(random(1,50));
    console.log(rand);
} while (rand !== 10);