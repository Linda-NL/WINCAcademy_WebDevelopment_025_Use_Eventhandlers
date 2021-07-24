// opdracht 1
const alertButton = document.querySelector('#mybutton');
console.log(alertButton);

alertButton.addEventListener('click', function (e) {
    e = alert('button clicked');
});

//opdracht 2
const colorButton = document.querySelector('#colorbutton');
console.log(colorButton);

const body = document.querySelector('body');
console.log(body);

colorButton.addEventListener('click', function (e) {
    e = body.classList.add('red-background');
});

//opdracht 3
const toggleButton = document.querySelector('#togglebutton');
console.log(toggleButton);

toggleButton.addEventListener('click', function (e) {
    e = body.classList.toggle('red-background');
});