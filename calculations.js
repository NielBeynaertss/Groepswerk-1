
    // fetch van jsonplaceholder API;
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
fetch (url)
.then(x => x.text())
.then(y => document.getElementById("test").innerHTML = y);