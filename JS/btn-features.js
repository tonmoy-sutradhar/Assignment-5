console.log("btn-features  ");

document
  .getElementById("history-show-btn")
  .addEventListener("click", function () {
    // console.log("history btn click");
    document.getElementById("history-form").classList.remove("hidden");
    document.getElementById("donate-form").classList.add("hidden");
  });

document
  .getElementById("donate-show-btn")
  .addEventListener("click", function () {
    // console.log("Donate btn click");
    document.getElementById("donate-form").classList.remove("hidden");
    document.getElementById("history-form").classList.add("hidden");
  });
