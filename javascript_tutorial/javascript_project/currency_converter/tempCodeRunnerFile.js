const URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json";

const selects = document.querySelectorAll(".from select");

for (country_code in countryList) {
  let new_option = document.createElement("option");
  new_option.value = country_code;
  new_option.innerText=country_code;
  selects.append(option);
}
