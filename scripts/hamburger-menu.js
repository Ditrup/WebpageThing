const buttonElement = document.getElementById("headerButton");
uiEnabled = false;

function ChangeUI(enableOrDisable) {
  navElement = document.getElementById("headerNavBar");
  if (enableOrDisable) {
    navElement.style.height = "60vw";
  } else {
    navElement.style.height = "0";
  }
}

function clickFunction() {
  uiEnabled = !uiEnabled;
  ChangeUI(uiEnabled);
  w;
}
