const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'red';
    button.style.color = 'aquamarine';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'aquamarine';
    button.style.color = 'red';
});