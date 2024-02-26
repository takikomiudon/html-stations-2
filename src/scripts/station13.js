function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const toggleIsOn = e.target.checked;
  if (toggleIsOn) {
    document.getElementById('text').style.backgroundColor = 'red';
  } else {
    document.getElementById('text').style.backgroundColor = 'white';
  }
}
