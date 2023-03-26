function tossCoin() {

    var result = Math.floor(Math.random() * 2);

    var message;
    if (result === 0) {
      message = "Head";
    } else {
      message = "Tails";
    }
    document.getElementById("result").innerHTML = "Result: " + message;
  }
  