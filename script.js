function spinWheel() {
  // สุ่มเลขรางวัล
  var rewards = [50, 100, 150, 200, 250, 300, 350];
  var rewardIndex = Math.floor(Math.random() * rewards.length);
  var rewardAmount = rewards[rewardIndex];

  // แสดงป๊อปอัพ
  var popup = document.getElementById("popup");
  var rewardAmountDisplay = document.getElementById("rewardAmount");
  rewardAmountDisplay.textContent = rewardAmount;

  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
