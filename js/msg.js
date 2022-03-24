const form = document.querySelector("#form");
const msgInput = document.querySelector("#msg__input");
const shareInput = document.querySelector("#share__input");

const msgPanel = document.querySelector(".msg__panel");
const sharePanel = document.querySelector(".share__panel");
const showPanel = document.querySelector(".show__panel");
const scroll = document.querySelector(".scroll__container");

const btnCreate = document.querySelector("#btn--create");
const btnCopy = document.querySelector("#btn--copy");

const secretMsg = document.querySelector("#secret-msg");

const { hash } = window.location;
const message = atob(hash.replace("#", " "));

if (message) {
  showPanel.classList.remove("hide");
  msgPanel.classList.add("hide");
  scroll.classList.add("hidden");
  secretMsg.innerText = `"${message}"`;
}

btnCreate.addEventListener("click", (e) => {
  e.preventDefault();
  const encodedMsg = btoa(msgInput.value);
  const baseUrl = window.location;
  const shareUrl = `${baseUrl}#${encodedMsg}`;
  shareInput.value = shareUrl;
  msgPanel.classList.add("hide");
  sharePanel.classList.remove("hide");
});

btnCopy.addEventListener("click", (e) => {
  e.preventDefault();
  shareInput.select();
  shareInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(shareInput.value);
  console.log(shareInput.value);
  //   const decodeMsg = atob(linkInput.value.split("#")[1]);
  //   console.log(decodeMsg);
  //   secretMsg.innerText = decodeMsg;
  //   const decodeMsg = window.location.hash.replace("#", "");
  //   const { hash } = window.location;
  //   console.log(atob(hash.replace("#", "")));
});
