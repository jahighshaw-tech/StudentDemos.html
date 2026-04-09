const button = document.getElementById('thisButton')
button.addEventListener('click', clickThisButton)

function clickThisButton() {
    alert('I did it')
}

const button2 = document.getElementById("myButton");

button2.addEventListener("click", function() {
    alert('I did it again!')
    button2.style.fontSize = '30px';
    document.body.style.backgroundColor = 'lightblue';
});

