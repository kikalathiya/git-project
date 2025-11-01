function changeText() {
  document.querySelector("h1").innerText = "Button Clicked!";
  document.querySelector("footer p").innerText = "You clicked the button at " + new Date().toLocaleTimeString();
}
