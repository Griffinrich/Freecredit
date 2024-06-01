document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('boxCanvas');
    var ctx = canvas.getContext('2d');
    var btnGenerate = document.getElementById('btnGenerate');
    var resultDiv = document.getElementById('result');

    // Draw box
    function drawBox() {
        ctx.fillStyle = '#f00'; // Set box color
        ctx.fillRect(25, 25, 100, 100); // Draw box
    }

    // Clear box
    function clearBox() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Generate random credit
    btnGenerate.addEventListener('click', function() {
        clearBox(); // Clear previous box
        drawBox(); // Draw new box

        var credits = [50, 100, 150, 200, 250, 300, 350];
        var randomCredit = credits[Math.floor(Math.random() * credits.length)];
        resultDiv.innerText = 'คุณได้รับเครดิต ' + randomCredit + ' บาท!';
    });

    // Initial draw
    drawBox();
});
