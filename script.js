document.addEventListener('DOMContentLoaded', function() {
    var btnGenerate = document.getElementById('btnGenerate');
    var resultDiv = document.getElementById('result');

    btnGenerate.addEventListener('click', function() {
        var credits = [50, 100, 150, 200, 250, 300, 350];
        var randomCredit = credits[Math.floor(Math.random() * credits.length)];
        resultDiv.innerText = 'คุณได้รับเครดิต ' + randomCredit + ' บาท!';
    });
});
