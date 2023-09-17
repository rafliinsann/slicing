// var opacity = 0;
// var intervalID = 0;;
// function fadeIn() {
//     var boxes1 = document.getElementsByClassName("boxes1")[0];
//     var scrollY = window.scrollY
//     var windowHeight = window.innerHeight;

//     if (scrollY > boxes1.offsetTop - windowHeight && opacity < 1) {
//         opacity += 0.05;
//         boxes1.style.opacity = opacity;
//     }
// }
// window.addEventListener("scroll", fadeIn);
// function fadeIn()
// {
//     intervalID=setInterval(show, 20);
// }
// function show()
// {
//     var boxes1 = document.getElementsByClassName("boxes1")[0];
//     opacity = parseFloat(window.getComputedStyle(boxes1).getPropertyValue("opacity"));
//     if(opacity<1)
//     {
//         opacity = opacity + 0.1;
//         boxes1.style.opacity=opacity;
//     }
//     else
//     {
//         clearInterval(intervalID)
//     }
// }
// function fadeIn2() {
//     var boxes2 = document.getElementsByClassName("boxes2")[0];
//     var scrollY = window.scrollY
//     var windowHeight = window.innerHeight;

//     if (scrollY > boxes2.offsetTop - windowHeight && opacity < 1) {
//         opacity += 0.05;
//         boxes2.style.opacity = opacity;
//     }
// }

// window.addEventListener("scroll", fadeIn2);

// var opacity1 = 0;
// var opacity2 = 0;
// var opacity3 = 0;
// var opacity4 = 0;
// var opacity5 = 0;
// var opacity6 = 0;

// function fadeInBox1() {
//     var box1 = document.getElementById("box1");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight;

//     if (scrollY > box1.offsetTop - windowHeight && opacity1 < 1) {
//         opacity1 += 0.03;
//         box1.style.opacity = opacity1;
//     }
// }

// function fadeInBox2() {
//     var box2 = document.getElementById("box2");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight / 5 * 2;

//     if (scrollY > box2.offsetTop - windowHeight && opacity2 < 1) {
//         opacity2 += windowHeight / 2;
//         box2.style.opacity = opacity2;
//     }
// }
// function fadeInBox3() {
//     var box3 = document.getElementById("box3");
//     var box31 = document.getElementById("box3.1");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight;

//     if (scrollY > box3.offsetTop - windowHeight && opacity3 < 1) {
//         opacity3 += 0.01;
//         box3.style.opacity = opacity3;
//     }
//     if (scrollY > box31.offsetTop - windowHeight && opacity3 < 1) {
//         opacity3 += 0.01;
//         box31.style.opacity = opacity3;
//     }
// }

// function fadeInBox4() {
//     var box4 = document.getElementById("box4");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight;

//     if (scrollY > box4.offsetTop - windowHeight && opacity4 < 1) {
//         opacity4 += 0.02;
//         box4.style.opacity = opacity4;
//     }
// }
// function fadeInBox5() {
//     var box5 = document.getElementById("box5");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight;

//     if (scrollY > box5.offsetTop - windowHeight && opacity5 < 1) {
//         opacity5 += 0.03;
//         box5.style.opacity = opacity5;
//     }
// }

// function fadeInBox6() {
//     var box6 = document.getElementById("box6");
//     var scrollY = window.scrollY;
//     var windowHeight = window.innerHeight;

//     if (scrollY > box6.offsetTop - windowHeight && opacity6 < 1) {
//         opacity6 += 0.03;
//         box6.style.opacity = opacity6;
//     }
// }



var boxes = document.querySelectorAll(".boxes");
var box = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("scroll", checkBox);


function checkBoxes(){
    var triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach((box => {
        var boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }))
}

function checkBox(){
    var triggerBottom = window.innerHeight / 5 * 3;
    box.forEach((boxes => {
        var boxTop = boxes.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            boxes.classList.add('gow');
        } else {
            boxes.classList.remove('gow');
        }
    }))
}