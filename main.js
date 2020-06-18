let addition = document.querySelector('#addition');
let subtraction = document.querySelector('#subtraction');
let result = document.querySelector('#count');
let input = document.querySelector('#submit');
let i = 0; 


addition.addEventListener('click', function() {
    i += parseInt(input.value);
    result.textContent = i;
    if (i>-1) {
        result.classList.remove('red')
    }
})

subtraction.addEventListener('click', function() {
    i -= parseInt(input.value);
    result.textContent = i;
    if (i<0) {
        result.classList.add('red')
    }
})


// I tried messing around with increments and decrements
// tried to replace 1 with i and set it's value to 0, didn't have any luck! 
// also tried to include a for loop, which wasn't rendering anything 