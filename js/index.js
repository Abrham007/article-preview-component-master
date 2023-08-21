var shareButton = document.querySelector(".profile__div");
var linkBubble = document.querySelector(".link-bubble");
shareButton.addEventListener("click", () => {
  if (linkBubble.style.display === "none") {
    linkBubble.style.display = "flex";
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
  } else {
    linkBubble.style.display = "none";
  }
});
