let cardCreditNumber = document.querySelector("#credit-number");
let cardName = document.querySelector("#user-name");
let cardMonthExp = document.querySelector("#month-exp");
let cardYearExp = document.querySelector("#year-exp");
let cardCVC = document.querySelector("#card-cvc");

let inputCardNumber = document.querySelector("#card-number");
let inputName = document.querySelector("#name");
let inputMonth = document.querySelector("#date-month");
let inputYear = document.querySelector("#date-year");
let inputCVC = document.querySelector("#cvc");

const setCardName = () => {
  if (inputName.value == "") {
    cardName.innerHTML = "John Doe";
  } else {
    cardName.innerHTML = inputName.value;
  }
};

const setCardNumber = () => {
  if (inputCardNumber.value == "") {
    cardCreditNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    cardCreditNumber.innerHTML = inputCardNumber.value;
  }
};

const setCardMonth = () => {
  if (inputMonth.value == 0) {
    cardMonthExp.innerHTML = "00";
  } else {
    if (inputMonth.value >= 10) {
      cardMonthExp.innerHTML = inputMonth.value;
    } else {
      cardMonthExp.innerHTML = "0" + inputMonth.value;
    }
  }
};

const setCardYear = () => {
  if (inputYear.value == 0) {
    cardYearExp.innerHTML = "00";
  } else {
    cardYearExp.innerHTML = inputYear.value;
  }
};

const setCardCVC = () => {
  if (inputCVC.value == 0) {
    cardCVC.innerHTML = "000";
  } else {
    cardCVC.innerHTML = inputCVC.value;
  }
};
