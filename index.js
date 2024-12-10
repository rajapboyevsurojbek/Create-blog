const formEl = document.querySelector(".form");
const wrapperEl = document.querySelector(".wrapper");
const input1El = document.querySelector(".input1");
const input2El = document.querySelector(".input2");
const input3El = document.querySelector(".input3");
const input4El = document.querySelector(".input4");
const input5El = document.querySelector(".input5");
const input6El = document.querySelector(".input6");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
    <p>${input1El.value}</p>
    <p>${input2El.value}</p>
    <p>${input3El.value}</p>
    <p>${input4El.value}</p>
    <p>${input5El.value}</p>
    <p>${input6El.value}</p>
  `;
  wrapperEl.appendChild(cardEl);
  input1El.value = "";
  input2El.value = "";
  input3El.value = "";
  input4El.value = "";
  input5El.value = "";
  input6El.value = "";
});
