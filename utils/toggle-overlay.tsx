export const toggleOverlay = () => {
  const overlayElement = document.getElementById("overlay");
  if (!overlayElement) {
    return;
  }
  if (overlayElement.style.transform === "translateX(0%)") {
    overlayElement.style.transform = "translateX(100%)";
  } else {
    overlayElement.style.transform = "translateX(0%)";
  }
};
