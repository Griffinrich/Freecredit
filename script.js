function randomPrize() {
  var prizes = [50, 100, 150, 200, 250, 300, 350];
  var randomIndex = Math.floor(Math.random() * prizes.length);
  var prizeAmount = prizes[randomIndex];

  document.getElementById('prizeAmount').textContent = prizeAmount + ' บาท';
  document.getElementById('resultPopup').classList.add('show');
}

function claimPrize() {
  alert('ยินดีด้วย! คุณได้รับรางวัลเรียบร้อยแล้ว');
  window.location.href = 'https://lin.ee/WXS8t3t';
  return false;
}
