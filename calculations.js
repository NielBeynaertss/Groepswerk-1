let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function () {
    // fetch van jsonplaceholder API;
    let city = document.getElementById('city').value;
    console.log(city);
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
    console.log(url);
    //fetch (url)
//.then(x => x.text())
//.then(y => document.getElementById("weather").innerHTML = y);










let bdate = document.getElementById('date').value;
let today = new Date();
    let birthDate = new Date(bdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);



let bdateyear = birthDate.getFullYear();
let remainder = bdateyear % 12;
console.log(remainder);
if (remainder == 0) {

}
else if (remainder == 1) {

}
else if (remainder == 2) {
    
}
else if (remainder == 3) {
    
}
else if (remainder == 4) {
    
}
else if (remainder == 5) {
    
}
else if (remainder == 6) {
    
}
else if (remainder == 7) {
    
}
else if (remainder == 8) {
    
}
else if (remainder == 9) {
}
else if (remainder == 10) {
    
}
else if (remainder == 11) {
    
}
});


