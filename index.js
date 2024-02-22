const cardName = document.querySelector("#user-name");
const cardCreditNumber = document.querySelector("#credit-number");
const cardMonthExp = document.querySelector("#month-exp");
const cardYearExp = document.querySelector("#year-exp");
const cardCVC = document.querySelector("#card-cvc");

const inputName = document.querySelector("#name");
const inputCardNumber = document.querySelector("#card-number");
const inputMonth = document.querySelector("#date-month");
const inputYear = document.querySelector("#date-year");
const inputCVC = document.querySelector("#cvc");
const formId = document.querySelector("#formId");
const succeedId = document.querySelector("#succeed");

const errorName = document.querySelector("#errorName");
const errorNumber = document.querySelector("#errorNumber");
const errorExpDate = document.querySelector("#errorExpDate");
const errorCVC = document.querySelector("#errorCVC");

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

const submitCard = () => {
  const labelErrorHandler = (isError, labelId, inputId, messageType) => {
    if (isError) {
      labelId.classList.add("error");
      labelId.classList.remove("disable");
      if (messageType == "blank") {
        labelId.innerHTML = "Can't be blank";
      } else if (messageType == "format") {
        labelId.innerHTML = "Wrong format, numbers only";
      } else {
        labelId.innerHTML = "";
      }
      inputId.classList.add("error-input");
    } else {
      labelId.classList.add("disable");
      labelId.classList.remove("error");
      labelId.innerHTML = "";
      inputId.classList.remove("error-input");
    }
  };

  const inputError = (id) => {
    id.classList.add("error-input");
  };

  const showError = (id) => {
    id.classList.add("error");
    id.classList.remove("disable");
  };

  const blankError = (id) => {
    id.innerHTML = "Can't be blank";
  };

  const handleForm = (e) => {
    e.preventDefault();
  };
  formId.addEventListener("submit", handleForm);

  const numberFilter = /^[\d\s]+$/;

  if (inputName.value == "") {
    labelErrorHandler(true, errorName, inputName, "blank");
  } else {
    labelErrorHandler(false, errorName, inputName);
  }
  if (inputCardNumber.value == "") {
    labelErrorHandler(true, errorNumber, inputCardNumber, "blank");
  } else if (!numberFilter.test(inputCardNumber.value)) {
    labelErrorHandler(true, errorNumber, inputCardNumber, "format");
  } else {
    labelErrorHandler(false, errorNumber, inputCardNumber);
  }
  if (inputMonth.value == 0 || inputYear.value == 0) {
    showError(errorExpDate);
    blankError(errorExpDate);
    inputError(inputMonth);
    inputError(inputYear);
    if (inputMonth.value != 0) {
      inputMonth.classList.remove("error-input");
    }
    if (inputYear.value != 0) {
      inputYear.classList.remove("error-input");
    }
  } else {
    errorExpDate.classList.add("disable");
    errorExpDate.classList.remove("error");
    errorExpDate.innerHTML = "";
    inputMonth.classList.remove("error-input");
    inputYear.classList.remove("error-input");
  }
  if (inputCVC.value == 0) {
    labelErrorHandler(true, errorCVC, inputCVC, "blank");
  } else {
    labelErrorHandler(false, errorCVC, inputCVC, "");
  }
  if (
    (inputName.value != "") &
    (inputCardNumber.value != "") &
    (inputMonth.value != 0) &
    (inputYear.value != 0) &
    (inputCVC.value != 0)
  ) {
    formId.classList.add("disable");
    succeedId.classList.remove("disable");
  }
};

const refresh = () => {
  location.reload();
};
