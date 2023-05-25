// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const body = document.querySelector("body");
const hearts = document.getElementsByClassName("like-glyph");
for (let i = 0; i < hearts.length; i++) {
  let heart = hearts[i];
  heart.addEventListener("click", success)};
  
   



function success(event) {
  let heart = event.target;
  mimicServerCall()
  .then(() => {
  
    if (heart.textContent === EMPTY_HEART) {
      heart.className = "activated-heart";
      heart.innerHTML = FULL_HEART;
    } else {
      heart.className = "";
      heart.innerHTML = EMPTY_HEART;
    } 
  })
  .catch(() => {
    const warning = document.getElementById("modal");
    warning.className = "";
    setTimeout(() => (warning.className = "hidden"), 3000);
    let heart = event.target;
    heart.innerHTML = EMPTY_HEART;

  })
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
