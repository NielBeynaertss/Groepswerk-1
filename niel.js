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


    let animal = ""
    if(remainder == 0){
        animal = "monkey";
    }
    else if(remainder == 1){
        animal = "rooster";
    }
    else if(remainder == 2){
        animal = "dog";
    }
    else if(remainder == 3){
        animal = "pig";
    }
    else if(remainder == 4){
        animal = "rat";
    }
    else if(remainder == 5){
        animal = "ox";
    }
    else if(remainder == 6){
        animal = "tiger";
    }
    else if(remainder == 7){
        animal = "rabbit";
    }
    else if(remainder == 8){
        animal = "dragon";
    }
    else if(remainder == 9){
        animal = "snake";
    }
    else if(remainder == 10){
        animal = "horse";
    }
    else if(remainder == 11){
        animal = "goat";
    }
    horoscope = "Your Chinese horoscope is " + animal;
    let picture = animal + '.png'
    document.getElementById('animal_pic').src = picture;


    document.getElementById('horoscope').innerHTML = horoscope;
    console.log(horoscope);



    
    console.log('we got here');
    //let city = document.getElementById('city').value;
    //console.log(city);
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
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


    
