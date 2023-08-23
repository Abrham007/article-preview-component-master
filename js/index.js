var shareButton = document.querySelector(".profile__div");
var linkBubble = document.querySelector(".link-bubble");
var shareArrow = document.querySelector("svg");
shareButton.addEventListener("click", () => {
  if (linkBubble.style.display === "none") {
    linkBubble.style.display = "flex";
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareArrow.style.fill = "hsl(210, 46%, 95%)"

  } else {
    linkBubble.style.display = "none";
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareArrow.style.fill = "hsl(214, 17%, 51%)"
  }
});
