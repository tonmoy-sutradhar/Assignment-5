// console.log("btn-features  ");
document
  .getElementById("history-show-btn")
  .addEventListener("click", function () {
    document.getElementById("history-form").classList.remove("hidden");
    document.getElementById("donate-form").classList.add("hidden");

    document.getElementById("history-show-btn").classList.remove("bg-gray-300");
    document.getElementById("history-show-btn").classList.add("bg-btn_primary");

    document
      .getElementById("donate-show-btn")
      .classList.remove("bg-btn_primary");
    document.getElementById("donate-show-btn").classList.add("bg-gray-300");
  });

document
  .getElementById("donate-show-btn")
  .addEventListener("click", function () {
    document.getElementById("donate-form").classList.remove("hidden");
    document.getElementById("history-form").classList.add("hidden");

    document.getElementById("donate-show-btn").classList.remove("bg-gray-300");
    document.getElementById("donate-show-btn").classList.add("bg-btn_primary");

    document
      .getElementById("history-show-btn")
      .classList.remove("bg-btn_primary");
    document.getElementById("history-show-btn").classList.add("bg-gray-300");
  });
