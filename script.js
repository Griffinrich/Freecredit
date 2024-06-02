document.getElementById('random-button').addEventListener('click', function() {
  var rewards = [50, 100, 150, 200, 250, 300, 350];
  var randomReward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById('reward-amount').innerText = randomReward;
  document.getElementById('popup').style.display = 'flex';
  triggerFireworks(); // เรียกใช้ฟังก์ชันพลุ
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
  stopFireworks(); // หยุดพลุเมื่อปิดป๊อปอัพ
});

document.getElementById('username-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  if (username.trim() !== '') {
    alert('ยินดีด้วย, ' + username + '! คุณได้รับรางวัลของคุณเรียบร้อยแล้ว!');
    window.location.href = 'https://lin.ee/WXS8t3t';
  } else {
    alert('กรุณาใส่ชื่อผู้ใช้ของคุณ');
  }
});

function triggerFireworks() {
  var container = document.getElementById('fireworks-container');
  container.innerHTML = ''; // ล้างพลุเก่า

  for (var i = 0; i < 5; i++) {
    var firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.animationDelay = Math.random() * 2 + 's';
    firework.style.backgroundColor = getRandomColor();
    container.appendChild(firework);
  }
}

function stopFireworks() {
  var container = document.getElementById('fireworks-container');
  container.innerHTML = '';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
