function randomCredit() {
    var prizes = [50, 100, 150, 200, 250, 300, 350];
    var randomIndex = Math.floor(Math.random() * prizes.length);
    var prize = prizes[randomIndex];
    document.getElementById('prize').textContent = prize;
    document.getElementById('result').style.display = 'block';
}

function claimPrize() {
    var username = document.getElementById('username').value;
    alert("ยินดีด้วย! คุณได้รับรางวัลเครดิตฟรีแล้ว ลิ้งค์: https://lin.ee/WXS8t3t");
}
