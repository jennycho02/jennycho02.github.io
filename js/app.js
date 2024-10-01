document.addEventListener("DOMContentLoaded", () => {
  const blob = document.getElementById("blob");

  window.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 2500, fill: "forwards" });
  };
});
