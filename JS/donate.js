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

    const p = document.createElement("p");
    p.innerText = `${inputFieldBalance} Taka is Donated for Donate Flood at Noakhali,Bangladesh`;
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    p.innerText = `${inputFieldBalance} Taka is Donated for Aid for Injured in the Quota Movement on ${formattedDate}`;
    document.getElementById("Donate-history").appendChild(p);
    document.getElementById("noakhaliBlance").innerText = newBalance;

    my_modal_5.showModal();

    document
      .getElementById("donationForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const modal = document.getElementById("my_modal_5");
        modal.close();
      });

    inputFielFordNokhaili.value = "";

    // Navbar Balance----------------->>
    document;
    const navBalance = parseFloat(
      document.getElementById("navbar-balance").innerText
    );
    const currentBalance = navBalance - inputFieldBalance;

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
    document.getElementById("feniBalance").innerText = newBalance;

    const p = document.createElement("p");
    p.innerText = `${inputFieldBalance} Taka is Donated for  Donate Flood Relief in Feni,Bangladesh`;
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    p.innerText = `${inputFieldBalance} Taka is Donated for Aid for Injured in the Quota Movement on ${formattedDate}`;
    document.getElementById("Donate-history").appendChild(p);

    my_modal_5.showModal();
    document
      .getElementById("donationForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const modal = document.getElementById("my_modal_5");
        modal.close();
      });

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

    // History of donation
    const p = document.createElement("p");
    p.innerText = `${inputFieldBalance} Taka is Donated for Aid for Injured in the Quota Movement`;
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    p.innerText = `${inputFieldBalance} Taka is Donated for Aid for Injured in the Quota Movement on ${formattedDate}`;
    document.getElementById("Donate-history").appendChild(p);

    my_modal_5.showModal();
    document
      .getElementById("donationForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const modal = document.getElementById("my_modal_5");
        modal.close();
      });
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
