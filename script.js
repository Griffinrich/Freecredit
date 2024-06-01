function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var spinnerBox = document.getElementById('spinnerBox');
    var resultPopup = document.getElementById('resultPopup');
    var usernameForm = document.getElementById('usernameForm');
    var resultText = document.getElementById('resultText');

    spinnerBox.addEventListener('click', function() {
        // Simulate spinning animation
        spinnerBox.style.transform = 'rotate(360deg)';

        // Simulate delay
        setTimeout(function() {
            spinnerBox.style.transform = 'rotate(0deg)';
            
            // Show result popup
            resultPopup.style.display = 'block';
        }, 2000);
    });

    usernameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        resultText.innerHTML = 'ยินดีด้วย! คุณได้รับเครดิต';
        resultText.innerHTML += '<br>ชื่อผู้ใช้งาน: ' + username;
        resultText.innerHTML += '<br><a href="https://lin.ee/WXS8t3t">ลิ้งค์ไปยัง Lin.ee</a>';
    });
});
