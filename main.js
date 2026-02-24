onload = () => {
  document.body.classList.remove("container");

  const modal = document.getElementById("flowerModal");
  const closeBtn = document.querySelector(".close-button");
  const flowerCenters = document.querySelectorAll(".flower__white-circle");

  // Open modal when any flower center is clicked
  flowerCenters.forEach(center => {
    center.addEventListener("click", (e) => {
      const message = center.getAttribute("data-message");
      const modalText = modal.querySelector(".card-text");
      if (message) {
        modalText.innerText = message;
      }
      modal.style.display = "block";
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside of the content
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
