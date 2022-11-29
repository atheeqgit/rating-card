const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.classList.add("disabled");
    } else {
      removeDisabled();
      button.classList.add("active");
    }
  });
});

function removeDisabled() {
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      button.classList.add("disabled");
    }
  });
}

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  submitFunction();
});

function submitFunction() {
  // console.log(rating);
  let rating = 0;
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      rating = button.textContent;
      changeStateTo("thankYou", rating);
    }
  });
  if (rating == 0) {
    activateChoose();
  }
}
const choose = document.querySelector(".choose");
function activateChoose() {
  deleteAlert();
  choose.classList.add("alert");

  setTimeout(() => {
    deleteAlert();
  }, 3000);
}

function deleteAlert() {
  if (choose.classList.contains("alert")) {
    choose.classList.remove("alert");
  }
}

function changeStateTo(state, rating) {
  if ((state = "thankyou")) {
    const ratingCard = document.querySelector(".rating-card");
    ratingCard.classList.add("dont-show");
    addState();
    changeUI(rating);
  }
}

function addState() {
  const thankyouCard = document.querySelector(".thankyou-card");
  thankyouCard.classList.remove("dont-show");
}

function changeUI(rating) {
  const ratingMsg = document.querySelector(".rating-msg");
  const ratingPara = document.querySelector(".rating-para");

  if (rating >= 4) {
    ratingMsg.innerHTML = `WOW! you rated us ${rating} out of 5 thankYou`;
    ratingPara.innerHTML = `we appriceate you for taking the time to rate us, we are glad that you liked oru product <br> thank you for the ${rating} out of 5`;
  } else if (rating < 4 && rating >= 2) {
    ratingMsg.innerHTML = `you rated us ${rating} out of 5 thankYou`;
    ratingPara.innerHTML = `we appriceate you for taking the time to rate us, we will try to improve our product. <br>thank you for the ${rating} out of 5`;
  } else {
    ratingMsg.innerHTML = `you rated us ${rating} out of 5 thankYou`;
    ratingPara.innerHTML = `we appriceate you for taking the time to rate us, we are sorry for the inconvenience of our app ,we will try to improve our product.<br> thank you for the ${rating} out of 5`;
  }
}
const backbtn = document.querySelector(".back-btn");

backbtn.addEventListener("click", () => {
  const thankyouCard = document.querySelector(".thankyou-card");
  thankyouCard.classList.add("dont-show");
  const ratingCard = document.querySelector(".rating-card");
  ratingCard.classList.remove("dont-show");
});
