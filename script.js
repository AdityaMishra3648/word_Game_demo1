let input = document.querySelector(".input");
let ans = "";
let temp = document.querySelector(".question");
let button = document.querySelector("#button");
let place = document.querySelector(".words");
let hint = document.querySelector(".hint-button");
place.innerHTML =
  "Hint button will give you hint but half your points will be reduced";
let score = 14;
const ten_words = (true_val) => {
  let where_to_put = document.querySelector(".container");
  let true_index = Math.floor(Math.random() * 10);
  // console.log(true_index);
  for (let i = 0; i < 10; i++) {
    let p = fetch("https://random-word-api.herokuapp.com/word");
    p.then((Response) => {
      return Response.json();
    }).then((Response) => {
      if (true_index == 0) {
        where_to_put.insertAdjacentHTML(
          "beforeend",
          `<br><div class="options">${true_val}</div>`
        );
      } else {
        where_to_put.insertAdjacentHTML(
          "beforeend",
          `<br><div class="options">${Response[0]}</div>`
        );
      }
      true_index--;
    });
  }
};
const fact = () => {
  score = 14;
  let where_to_put = document.querySelector(".container");
  where_to_put.innerHTML =
    " <div class='hint'>Answer is one of the words given below!</div>";
  place.innerHTML =
    "Hint button will give you hint but half your points will be reduced";
  let p = fetch("https://random-words-api.vercel.app/word");
  temp.innerHTML = 'Loading...<i class="fa-solid fa-spinner"></i>';
  p.then((Response) => {
    return Response.json();
  }).then((Response) => {
    console.log(Response[0].word);
    temp.innerHTML = "definition: " + Response[0].definition;
    ans = Response[0].word.toLowerCase();
    console.log(ans);
    ten_words(ans);



  });
  input.value = "";
};
let sumbit_button = document.querySelector("#submit");
button.addEventListener("click", fact);
sumbit_button.addEventListener("click", () => {
  let temp_val = place.innerHTML;
  if (input.value.toLowerCase() == ans) {
    if (score > 10) {
      place.innerHTML = `<b>Congrats You win 🥳 Score: 10 </b>`;
      score = 14;
    } else {
      place.innerHTML = `<b>Congrats You win 🥳 Score: ${score} </b>`;
      score = 14;
    }
  } else {
    if (score <= 0) {
      place.innerHTML = "You have used up all you chances Score: 0";
      score = 14;
    } else {
      score--;
      place.innerHTML = "Incorrect Answer";
      place.classList.add("shaking-element");
      setTimeout(() => {
        place.classList.remove("shaking-element");
        place.innerHTML = temp_val;
      }, 700);
    }
  }
});
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sumbit_button.click();
  }
});
window.addEventListener("load", (event) => {
  fact();
});
hint.addEventListener("click", () => {
  place.innerHTML = `Hint:- Length of word is ${ans.length}`;
  score -=5;
  console.log(score);
});
