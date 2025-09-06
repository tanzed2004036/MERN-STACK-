const URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const selects = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".container button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const mgs = document.querySelector(".mgs");
// console.log(selects[0])

for (let select of selects) {
  for (country_code in countryList) {
    let new_option = document.createElement("option");
    new_option.value = country_code;
    new_option.innerText = country_code;
    select.append(new_option);
  }
  select.addEventListener("change", (evt) => {
    // console.log("select");
    // console.log(select.value);
    // console.log(evt.target);
    // console.log(evt.target.value);
    updateFlag(evt.target);
  });
}

const updateFlag = (evt) => {
  let flagCode = countryList[evt.value];
  let img = evt.parentElement.querySelector("img");
  let imgSrc = `https://flagsapi.com/${flagCode}/flat/64.png`;
  img.src = imgSrc;
};

btn.addEventListener("click", async () => {
  let amount = document.querySelector("input");
  // console.log(amount.value);
  if (amount.value < 1 || amount.value === "") {
    amount.value = "1";
  }
  //   const url = `$(URL)/${selects[0].value.toLowerCase()}/${selects[1].value.toLowerCase()}.json`;
  const url = `${URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  //   console.log(data);
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  //   console.log(rate);
  mgs.innerText = `${amount.value} ${fromCurr.value} = ${amount.value*rate} ${selects[1].value}`;
});
