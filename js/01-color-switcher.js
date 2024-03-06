

function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    let timeout;

    function changeBackgroundColor() {
      document.body.style.backgroundColor = getRandomHexColor();
      timeout = setTimeout(changeBackgroundColor, 1000);
    }

    startButton.addEventListener('click', () => {
      startButton.disabled = true;
      changeBackgroundColor();
    });

    stopButton.addEventListener('click', () => {
      startButton.disabled = false;
      clearTimeout(timeout);
    });
