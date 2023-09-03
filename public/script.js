const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  fetch("/changeHeader")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("h1").textContent = data.newHeader;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
