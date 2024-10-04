// document.addEventListener("DOMContentLoaded", () => {
//   const blob = document.getElementById("blob");

//   window.onpointermove = event => {
//     const { clientX, clientY } = event;

//     blob.animate({
//       left: `${clientX}px`,
//       top: `${clientY}px`
//     }, { duration: 2500, fill: "forwards" });
//   };
// });

document.addEventListener('mousemove', function (e) {
  const cave = document.querySelector('.cave');
  const x = e.clientX;
  const y = e.clientY;
  cave.style.setProperty('--x', `${x}px`);
  cave.style.setProperty('--y', `${y}px`);
  cave.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 10px, rgba(0, 0, 0, 1) 100px)`;
});