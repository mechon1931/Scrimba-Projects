let homepts = document.getElementById('numberhome');
let guestpts = document.getElementById('numberguest');

let count = 0;

function onepointhome() {
    count += 1
    homepts.textContent = count;
}

function twopointhome() {
    count += 2
    homepts.textContent = count;
}

function threepointhome() {
    count += 3
    homepts.textContent = count;
}

function onepointguest() {
    count += 1
    guestpts.textContent = count;
}

function twopointguest() {
    count += 2
    guestpts.textContent = count;
}

function threepointguest() {
    count += 3
    guestpts.textContent = count;
}

function reset() {
    homepts.textContent = 0;
    guestpts.textContent = 0
}