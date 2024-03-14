let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");
  // condition checked
  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    // bmi calculate
    let bmi = weight / ((height * height) / 10000);

    //result display here
    if (bmi < 18.6) {
      result.innerHTML = `<span> Your BMI ${bmi} is under-weight</span>`;
    } else if (bmi == 18.6) {
      result.innerHTML = `<span> Your BMI ${bmi} is Normal`;
    } else {
      result.innerHTML = `<span> Your BMI ${bmi} is over-weight`;
    }
  }
});
