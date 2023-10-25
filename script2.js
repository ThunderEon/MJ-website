function backToStart() {
  let currentUrl = new URLSearchParams(window.location.search);
  let username = currentUrl.get("username");
  window.addEventListener("load", () => {
    let signedUsername = document.querySelector(".signed-username");
    let backTimer = document.querySelector(".waiting-time");
    let finishPage = document.querySelector(".finishPage");
    signedUsername.innerHTML = username;
    setInterval(() => {
      backTimer.innerHTML = Number(backTimer.innerHTML) - 1;
      if (Number(backTimer.innerHTML) == 0) {
        window.location.assign(`${location.origin}`);
      }
    }, 1000);
    finishPage.addEventListener("click", () => {
      window.location.assign(`${location.origin}`);
    });
  });
}
backToStart();

let title = document.querySelector(".title");
title.addEventListener("click", () => {
  location.assign(`${location.origin}`);
});
