const alertButton = document.getElementById('mybutton');
alertButton.addEventListener('click', () => {
    alert('button clicked');
});

const toggleBackgroundColor = () => {
    const body = document.body;
    body.classList.toggle('red-background');
};

const attachChangeColorButtonHandler = () => {
    const backgroundButton = document.getElementById('changeBackground');
    backgroundButton.addEventListener('click', () => {
        toggleBackgroundColor();
    });
};

attachChangeColorButtonHandler();