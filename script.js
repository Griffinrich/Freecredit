document.getElementById('random-button').addEventListener('click', function() {
  var rewards = [50, 100, 150, 200, 250, 300, 350];
  var randomReward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById('reward-amount').innerText = randomReward;
  document.getElementById('popup').style.display = 'flex';
  triggerFireworks();
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
    alert('กรุณาใส่ชื่อยูสเซอร์เนมของคุณ');
  }
});

function triggerFireworks() {
  var duration = 5 * 1000; // 5 seconds
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 100 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}
