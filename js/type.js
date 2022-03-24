const introText = document.querySelector("#scroll__text");

const phrases = [
  "Welcome to my super secret messaging app..",
  "Enter a message below and click create..",
  "You will then get a super secret link to share your message..",
];

let i = 0;
let j = 0;
let currentPhrase = [];
isDeleting = false;
isEnd = false;

function loop() {
  isEnd = false;
  introText.innerText = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length && i < phrases.length - 1) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      i++;
      currentPhrase = [];
      isDeleting = false;
    }
  }

  //   const fast = Math.random() * (80 - 50) + 50;
  //   const slow = Math.random() * (100 - 80) + 80;

  const time = isEnd ? 2000 : isDeleting ? 50 : 80;

  setTimeout(loop, time);
}

loop();
