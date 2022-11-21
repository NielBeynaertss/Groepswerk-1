let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function () {
    // fetch van jsonplaceholder API;
    let city = document.getElementById('city').value;
    console.log(city);
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
    console.log(url);
    fetch (url)
.then(x => x.text())
.then(y => document.getElementById("test").innerHTML = y);
});