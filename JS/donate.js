console.log("Hi I an connected.");
// Donate button added---->>
// document.getElementById("donate-btn").addEventListener("click", function () {
//   console.log("Donate button clicked");
// });
// // History button added----->>
// document.getElementById("history-btn").addEventListener("click", function () {
//   console.log("History button clicked");
// });

//---------------------------------->>>>>
//Donate for Noakhali---->>
document
  .getElementById("donateNokhai-btn")
  .addEventListener("click", function () {
    const noakhaliBalance = parseFloat(
      document.getElementById("noakhaliBlance").innerText
    );
    console.log(noakhaliBalance);

    const inputFielFordNokhaili = document.getElementById("inputFieldNokhaili");
    const inputFieldBalance = parseFloat(inputFielFordNokhaili.value);

    if (isNaN(inputFieldBalance) || inputFieldBalance <= 0) {
      alert("Please enter the valid number.");
      return;
    }
    const newBalance = inputFieldBalance + noakhaliBalance;
    console.log(newBalance);

    document.getElementById("noakhaliBlance").innerText = newBalance;
    inputFielFordNokhaili.value = "";

    // Navbar Balance----------------->>
    document;
    const navBalance = parseFloat(
      document.getElementById("navbar-balance").innerText
    );

    const currentBalance = navBalance - inputFieldBalance;
    console.log(currentBalance);

    document.getElementById("navbar-balance").innerText = currentBalance;
  });

//Donate for Feni---->>
document
  .getElementById("feniDonate-btn")
  .addEventListener("click", function () {
    const noakhaliBalance = parseFloat(
      document.getElementById("feniBalance").innerText
    );
    console.log(noakhaliBalance);

    const inputFielFordNokhaili = document.getElementById("feniInputField");
    const inputFieldBalance = parseFloat(inputFielFordNokhaili.value);

    if (isNaN(inputFieldBalance) || inputFieldBalance <= 0) {
      alert("Please enter the valid number.");
      return;
    }

    const newBalance = inputFieldBalance + noakhaliBalance;
    console.log(newBalance);

    document.getElementById("feniBalance").innerText = newBalance;
    inputFielFordNokhaili.value = "";

    // Navbar Balance---------------->>
    document;
    const navBalance = parseFloat(
      document.getElementById("navbar-balance").innerText
    );

    const currentBalance = navBalance - inputFieldBalance;
    console.log(currentBalance);

    document.getElementById("navbar-balance").innerText = currentBalance;
  });

//Donate for Movement---->>
document
  .getElementById("movementDoante-btn")
  .addEventListener("click", function () {
    const noakhaliBalance = parseFloat(
      document.getElementById("movementBalance").innerText
    );
    console.log(noakhaliBalance);

    const inputFielFordNokhaili = document.getElementById("movementInputFiled");
    const inputFieldBalance = parseFloat(inputFielFordNokhaili.value);

    if (isNaN(inputFieldBalance) || inputFieldBalance <= 0) {
      alert("Please enter the valid number.");
      return;
    }

    const newBalance = inputFieldBalance + noakhaliBalance;
    console.log(newBalance);

    document.getElementById("movementBalance").innerText = newBalance;
    inputFielFordNokhaili.value = "";

    // Navbar Balance------------------->>
    document;
    const navBalance = parseFloat(
      document.getElementById("navbar-balance").innerText
    );

    const currentBalance = navBalance - inputFieldBalance;
    console.log(currentBalance);

    document.getElementById("navbar-balance").innerText = currentBalance;
  });
