document.getElementById("random-button").addEventListener("click", function() {
  var rewards = [50, 100, 150, 200, 250, 300, 350];
  var randomIndex = Math.floor(Math.random() * rewards.length);
  var rewardAmount = rewards[randomIndex];

  document.querySelector(".popup").style.display = "flex";
  document.getElementById("reward-amount").innerText = rewardAmount;
});

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
});

document.getElementById("username-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  alert("ยินดีด้วย! คุณ " + username + " ได้รับรางวัลแล้ว ลิ้งค์ไปยัง https://lin.ee/WXS8t3t");
});
