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
    // console.log("Donate now button clicked");
    const noakhaliBalance = parseFloat(
      document.getElementById("noakhaliBlance").innerText
    );
    console.log(noakhaliBalance);

    const inputFielFordNokhaili = parseFloat(
      document.getElementById("inputFieldNokhaili").value
    );
    // console.log(typeof inputFielFordNokhaili);

    // const Nbalance = parseFloat(noakhaliBalance);
    // const InputNBalance = parseFloat(inputFielFordNokhaili);

    // const newBalance = Nbalance + InputNBalance;
    const newBalance = inputFielFordNokhaili + noakhaliBalance;
    console.log(newBalance);

    document.getElementById("noakhaliBlance").innerText = newBalance;
    inputFielFordNokhaili.value = "";
  });
