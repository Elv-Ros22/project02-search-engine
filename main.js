function sendApiRequest() {
  var userInput = document.getElementById("input").value;
  console.log(userInput);

  var giphyApiKey = "cZV02Bhn2mkpZQnxZ09gKSsloNwgkJFT";
  var giphyApiURL =
    "https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}";

  fetch(giphyApiURL)
    .then(function (data) {
      return data.json();
    })
    .then(function (json) {});
}
