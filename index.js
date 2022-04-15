console.log("working");

// Write the code to access element which is having id as "text"
console.log(document.getElementById("text"));

// Write the code to access element which is having tag as "h1"
let tagName = document.getElementsByTagName('p');
console.log(tagName);

//Write the code to access element which is having class as "box"
let className = document.getElementsByClassName("box");
console.log(className[0]);

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
let hello = document.getElementById("hello");
hello.innerHTML = "<b>Hello world<b>";
console.log(hello);

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function verticle(){
    let Change = document.getElementById("container");
    Change.style.flexDirection = "column";
}

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
function world(){
    const world = document.getElementsByClassName("helloworld");
    world[0].innerHTML = "Welcome to Elevation academy"
    // console.log(world[0]);
}

let element1 = document.getElementsByTagName("h1");
element1[0].id = 'heading';
element1[0].style.color = "red";
console.log(element1[0]);

function time(){

    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minuts");
    let secs = document.getElementById("seconds");

    let computertime = new Date();

    let hrss = computertime.getHours();
    let minss = computertime.getMinutes();
    let secss = computertime.getSeconds();

    if(hrss < 10){
        hrss = "0" + hrss;
    }
    if(minss < 10){
        minss = "0" + minss;
    }
    if(secss < 10){
        secss = "0" + secss;
    }
    

    hrs.innerText = hrss;
    mins.innerText = minss;
    secs.innerText = secss;
}
let miliseconds = 1000;
setInterval(time,miliseconds)