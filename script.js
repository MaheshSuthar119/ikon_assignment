document.getElementById('numberInput').addEventListener('input', function() {
    const value = parseInt(this.value, 10);
    const messageElement = document.getElementById('message');
    
    if (isNaN(value)) {
        messageElement.textContent = '';
        return;
    }

    if (value < 0) {
        messageElement.textContent = 'Enter a positive value';
    } else if (value % 2 === 0) {
        messageElement.textContent = `Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
    } else {
        messageElement.textContent = `Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
    }
});
