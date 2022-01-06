const value = document.querySelector("#value");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const increase = document.querySelector("#increase");
const heading = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn")

let count = 0;

/* for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        const classes = event.target.classList;
        if (classes.contains("btn-dec")) {
            count--;
        } else if (classes.contains("btn-inc")) {
            count++;
        } else {
            count = 0;
        }
        setColorValue()
    })
} */

// forEach() - HOF method:
/* buttons.forEach(function(el){
    el.addEventListener("click", function (event) {
        const classes = event.target.classList;
        if (classes.contains("btn-dec")) {
            count--;
        } else if (classes.contains("btn-inc")) {
            count++;
        } else {
            count = 0;
        }
        setColorValue()
    })
}) */

// or:

buttons.forEach(buttonsEvent)

function buttonsEvent(el) {
    el.addEventListener("click", function (event) {
        const classes = event.target.classList;
        if (classes.contains("btn-dec")) {
            count--;
        } else if (classes.contains("btn-inc")) {
            count++;
        } else {
            count = 0;
        }
        setColorValue()
    })
};


/* decrease.addEventListener("click", function () {
    count--;
    setColorValue()
})
increase.addEventListener("click", function () {
    count++;
    setColorValue()

})
reset.addEventListener("click", function () {
    count = 0;
    setColorValue()
}) */

function setColorValue() {
    if (count < 0) {
        value.style.color = "red";
        heading.style.color = "red";
    } else if (count > 0) {
        value.style.color = "green";
        heading.style.color = "green";
    } else {
        value.style.color = "black";
        heading.style.color = "black";
    }
    value.innerText = count;
}