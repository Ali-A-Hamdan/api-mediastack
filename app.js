// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  var fetchBtn = document.getElementById("fetch-btn");
  fetchBtn.addEventListener("click", fetchTrivia);

  var fetchRandomBtn = document.getElementById("fetch-random-btn");
  fetchRandomBtn.addEventListener("click", fetchRandomTrivia);
});

function fetchTrivia() {
  var numberInput = document.getElementById("number-input");
  var triviaText = document.getElementById("trivia-text");
  var number = numberInput.value;

  // Make the API request
  fetch("http://numbersapi.com/" + number)
      .then(function (response) {
          // Parse the response as text
          return response.text();
      })
      .then(function (data) {
          // Update the trivia text with the retrieved data
          triviaText.innerText = data;
      })
      .catch(function (error) {
          // Handle any errors
          console.log("Error fetching trivia:", error);
      });
}

function fetchRandomTrivia() {
  var triviaText = document.getElementById("trivia-text");

  // Make the API request for random trivia
  fetch("http://numbersapi.com/random/trivia")
      .then(function (response) {
          // Parse the response as text
          return response.text();
      })
      .then(function (data) {
          // Update the trivia text with the retrieved data
          triviaText.innerText = data;
      })
      .catch(function (error) {
          // Handle any errors
          console.log("Error fetching random trivia:", error);
      });
}
