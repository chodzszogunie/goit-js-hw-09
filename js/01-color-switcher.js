function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

   
let time;

function changeColor () {
    document.body.style.backgroundColor = getRandomHexColor();
    time = setTimeout(changeColor, 1000);
};

document.getElementById('startButton').addEventListener('click', () =>{
    this.disabled = true;
    document.getElementById('stopButton').disabled = false;
    changeColor();
});

document.getElementById('stopButton').addEventListener('click', () => {
    this.disabled = true;
    document.getElementById('startButton').disabled = false;
    clearInterval(time);
});