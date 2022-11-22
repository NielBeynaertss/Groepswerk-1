//return to index page when button clicked
function again(){
    window.location.href = 'index.html';
}

//stores items in the localStorage
function storeData(){ 
    let name = document.getElementById('name').value;
    let birth_date = document.getElementById('date').value;
    let d = new Date(birth_date);
    let birth_year = d.getFullYear();

    let today = new Date();
    let todayDate = today.getFullYear();
    let age = (todayDate - birth_year);
    let birthDate = new Date(birth_date);
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    let data = {
        name: name,
        age: age,
        birthyear: birth_year
    }

    window.localStorage.setItem('key', JSON.stringify(data));
    console.log(data);
    window.location.href = "resultNiel.html";
}

//display stored data
function getData(){
    let data1 = JSON.parse(window.localStorage.getItem('key'));

    document.getElementById("full_name").innerHTML = data1.name;
    document.getElementById("user_age").innerHTML = data1.age;
    document.getElementById("user_birth_year").innerHTML = data1.birthyear;

    console.log(data1); 


    
    //chinese horoscope section

    let year = data1.birthyear;
    let remainder = year % 12;
    console.log(remainder);
    let horoscope;



    if(remainder == 0){
        horoscope = "Your Chinese horoscope is Monkey";
    }
    else if(remainder == 1){
        horoscope = "Your Chinese horoscope is Rooster";
    }
    else if(remainder == 2){
        horoscope = "Your Chinese horoscope is Dog";
    }
    else if(remainder == 3){
        horoscope = "Your Chinese horoscope is Pig";
    }
    else if(remainder == 4){
        horoscope = "Your Chinese horoscope is Rat";
    }
    else if(remainder == 5){
        horoscope = "Your Chinese horoscope is Ox";
    }
    else if(remainder == 6){
        horoscope = "Your Chinese horoscope is Tiger";
    }
    else if(remainder == 7){
        horoscope = "Your Chinese horoscope is Rabbit";
    }
    else if(remainder == 8){
        horoscope = "Your Chinese horoscope is Dragon";
    }
    else if(remainder == 9){
        horoscope = "Your Chinese horoscope is Snake";
    }
    else if(remainder == 10){
        horoscope = "Your Chinese horoscope is Horse";
    }
    else if(remainder == 11){
        horoscope = "Your Chinese horoscope is Goat";
    }


    document.getElementById('horoscope').innerHTML = horoscope;
    console.log(horoscope);



    
    console.log('we got here');
    let city = document.getElementById('city').value;
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
    fetch(url)
     .then(response => response.json())
     .then(data => {
     console.log(data);
     weatherInfo.innerHTML =`
     <p>Location: ${data.resolvedAddress}</p>
     <p>Current conditions: ${data.currentConditions.conditions}</p>`;
     weather.innerHTML =`
     <p>Temperature: ${data.currentConditions.temp}°C</p>`;
     }).catch(
     err => {
     alert("Wrong city name");
     console.log(err)});
}


    
