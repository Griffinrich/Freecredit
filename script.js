document.getElementById('random-button').addEventListener('click', function() {
  var rewards = [50, 100, 150, 200, 250, 300, 350];
  var randomReward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById('reward-amount').innerText = randomReward;
  document.getElementById('popup').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
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
