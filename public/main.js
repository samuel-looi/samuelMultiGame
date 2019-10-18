console.log('loaded main.js')

function sendInfomation (x,y) {
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {

    }
  }
  xhr.open('GET', `192.168.20.30/player?x=${x}y=${y}`, true)
  xhr.send()
}
