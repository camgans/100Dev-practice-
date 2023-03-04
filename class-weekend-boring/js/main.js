document.querySelector('#check').addEventListener('click', check)

function check() {
let day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  document.querySelector('#check').addEventListener('click',answerDay)
  // day = day.toLowerCase()

  function answerDay() {
    if (day === "tuesday" || day === "thursday"){
      document.querySelector("#placeToSee").textContent = "Class!"

    }else if(day === "saturday" || day === "sunday"){
      document.querySelector("#placeToSee").textContent = "Weekend!"

    }else{
      document.querySelector("#placeToSee").textContent = "Boring!!"
    }
  }
}
