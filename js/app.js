// document.addEventListener("DOMContentLoaded", () => {
//   const blob = document.getElementById("blob");

//   window.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.animate({
//       left: `${clientX}px`,
//       top: `${clientY}px`
//     }, { duration: 300, fill: "forwards" });
//   };
// });

const blob = document.getElementById("blob");
const gradient = document.getElementById("gradient-color");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  // Move the blob
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 300, fill: "forwards" });

  // Adjust the clip-path to reveal the gradient only under the blob
  gradient.style.clipPath = `circle(17vmax at ${clientX}px ${clientY}px)`; // 17vmax is half the blob's size
};
