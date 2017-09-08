var linkWriteUs = document.querySelector(".write-us-btn");
var linkMap = document.querySelector(".map-link");
var popupWriteUs = document.querySelector(".modal-write-us");
var popupMap = document.querySelector(".modal-map");
var closeWriteUs = popupWriteUs.querySelector(".modal-close");
var closeMap = popupMap.querySelector(".modal-close");
var form = popupWriteUs.querySelector("form");
var firstName = popupWriteUs.querySelector("[name=first-name]");
var email = popupWriteUs.querySelector("[name=email]");
var textLetter = popupWriteUs.querySelector("[name=letter]");
var storage = localStorage.getItem("firstName");

linkWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  if (storage) {
      firstName.value = storage;
      email.focus();
    } else {
  firstName.focus();
    }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
});

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt){
  if (!firstName.value || !email || !textLetter) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  }else {
    localStorage.setItem("firstName", firstName.value);
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupWriteUs.classList.contains("modal-show")) {
        popupWriteUs.classList.remove("modal-show");
        popupWriteUs.classList.remove("modal-error");
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-show")) {
        popupMap.classList.remove("modal-show");
      }
    }
  });
