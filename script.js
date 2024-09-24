// Change the dynamic text
const text = ["Developer", "DJ"];
let count = 0;
const dynamicText = document.getElementById("dynamicText");

setInterval(() => {
    dynamicText.textContent = text[count];
    count = (count + 1) % text.length;
}, 2000);

// Temperature Conversion
function convertTemp() {
    const celsius = document.getElementById('tempInput').value;
    if (celsius !== '') {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerHTML = `${celsius}°C is ${fahrenheit}°F`;
    } else {
        document.getElementById('result').innerHTML = "Please enter a valid temperature";
    }
}

//clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the clock immediately
updateClock();
// Then update it every second
setInterval(updateClock, 1000);