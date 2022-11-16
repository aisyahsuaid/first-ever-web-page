function zodiac() {
  let name = prompt("What is your name?");
  let sign = prompt("What is your star sign?");

  sign = sign.toLowerCase().trim();
  if (sign === "virgo" || sign === "pisces" || sign === "gemini") {
    alert(
      "Hi, " +
        name +
        "! Your character is Cinnamoroll! 🍄🍄 Click the characters name to know more about them 💖"
    );
  } else if (sign === "leo" || sign === "scorpio" || sign === "saggitarius") {
    alert(
      "Hi, " +
        name +
        "! Your character is Kuromi! ⛓💜 Click the characters name to know more about them 💖"
    );
  } else if (sign === "taurus" || sign === "cancer" || sign === "aquarius") {
    alert(
      "Hi, " +
        name +
        "! Your character is Pompompurin! ✨🔆 Click the characters name to know more about them 💖"
    );
  } else if (sign === "capricorn" || sign === "libra" || sign === "aries") {
    alert(
      "Hi, " +
        name +
        "! Your character is Hello Kitty! 🎀🌷 Click the characters name to know more about them 💖"
    );
  } else {
    alert("Sorry, " + name + "! You're not a sanrio baby :(");
  }
}
let charButton = document.querySelector("button");
charButton.addEventListener("click", zodiac);
