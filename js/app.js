const blob = document.getElementById("blob");

window.onpointermove = event => {
  const { clientX, clientY } = event;

  // Add a delay of 100ms before moving the blob
  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
}

// Add CSS transition to create smooth animation
blob.style.transition = "all 0.6s ease-out";