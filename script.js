//return to index page when button clicked
function again(){
    window.location.href = 'index.html';
}

//Stores entered data in the localStorage
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
    window.location.href = "result.html";
}

//Display data + Weather functionality + horoscope functionality
function getData(){
//Display user information
    let data1 = JSON.parse(window.localStorage.getItem('key'));

    document.getElementById("full_name").innerHTML = data1.name;
    document.getElementById("user_age").innerHTML = data1.age;
    document.getElementById("user_birth_year").innerHTML = data1.birthyear;

    console.log(data1); 

    
//chinese horoscope section

    let year = data1.birthyear;
    let remainder = year % 12;
    let elementrem = year % 10;
    console.log(remainder);
    let horoscope;

    let MonkeyArr = [
        "Monkeys' most defining trait is their intelligence",
        "Monkeys gain professional recognition and make great leaders",
        "Monkeys are calm and logical thinkers",
        "Monkeys view everyone as teachers",
        "Monkeys are willing to listen to critique and learn from their mistakes"
    ];
    let RoosterArr = [
        "Roosters are serious in their work",
        "Roosters are straightforward and decisive in their actions",
        "Roosters will directly criticize what they see unfit and are perfectionists",
        "Roosters are logical and good at managing teams",
        "No matter how difficult something is, Roosters will not give up"
    ];
    let DogArr = [
        "Dogs' most defining characteristic is their loyalty",
        "Honest and just, Dogs are popular in social circles",
        "Dogs will never abandon their friends, family or work",
        "Everyone needs a Dog friend for advice and help",
        "Dogs are good at helping others find and fix their bad habits"
    ];
    let PigArr = [
        "Pigs are very realistic",
        "Others may be all talk and no action, but Pigs are the opposite",
        "Though not wasteful spenders, Pigs will let themselves enjoy life",
        "Pigs love entertainment and will occasionally treat themselves",
        "Pigs are a bit materialistic, but this is motivation for them to work hard"
    ];
    let RatArr = [
        "Optimistic and energetic, Rats are likable by all",
        "Rats are sensitive to other's emotions but are stubborn with your opinion",
        "Rat's personality is kind, but due to weak communication skills, their words may seem impolite and rude",
        "On the financial side, Rats like saving and can be stingy",
        "Rat's love for hoarding will sometimes cause them to waste money on unnecessary things"
    ];
    let OxArr = [
        "Oxen are honest and earnest",
        "Oxen are low key and never look for praise or to be the center of attention",
        "Oxen gain recognition through their hard work",
        "Oxen believe that everyone should do what's asked for them and stay within their bounds",
        "Rarely losing their temper, Oxen think logically and make great leaders"
    ];
    let TigerArr = [
        "Tigers are fiercely independent and possess strong self-esteem",
        "Tigers like to act alone and are not very gregarious",
        "Tigers are most likely optimistic and enthusiastic by nature, and always seem to have endless energy, especially at work",
        "Tiger's energetic presence and intense eyes are the greatest charm of Tiger natives",
        "Tiger's vitality is apparent to anyone at a glance, and people are instinctively drawn to this larger than life quality in them"
    ];
    let RabbitArr = [
        "To outsiders, the Rabbit's kindness may make them seem soft and weak",
        "Rabbit's quiet personality hides their confidence and strength",
        "Rabbits are steadily moving towards their goal, no matter what negativity the others give them",
        "With their good reasoning skills and attention to detail, they make great scholars",
        "They are socializers with an attractive aura, however, they find it hard to open up to others and often turn to escapism"
    ];
    let DragonArr = [
        "Dragons are strong and independent figures, but they yearn for support and love",
        "Adventurous entrepreneurs at heart, Dragons dream of shooting to fame",
        "Dragons will never slack off on responsibilities nor be unnecessarily suspicious",
        "Dragons are serious in what they do and have high self-esteems",
        "The only thing Dragons require of others is respect"
    ];
    let SnakeArr = [
        "Snakes are humorous and sophisticated",
        "Snakes don't like small talk or thinking about small everyday problems",
        "In a chaotic environment, Snakes are the eye of the storm",
        "Snakes are able to hold their ground and calmly think of solutions",
        "Snakes are usually correct, but this also comes from a distrust of other"
    ];
    let HorseArr = [
        "Horses are full of energy, albeit a bit too much",
        "Both studious and athletic, Horses are strong believers of chasing after dreams",
        "Rather than wealth and fame, happiness is what motivates Horses",
        "Horses expect others to operate at the same speed as them and don't understand why others can't",
        "Horses' biggest fault is that they're blind to their own faults"
    ];
    let GoatArr = [
        "Goats are able to persevere through any difficulty",
        "Goats are strong and resilient, though their gentleness might be misleading",
        "Goats have high tolerance and motivation",
        "Quiet observers, Goats consider all aspects of anything before deciding",
        "Goats never act brashly and are able to complete tasks successfully"
    ];


    let animal = ""
    let animalArr;
    if(remainder == 0){
        animal = "Monkey";
        animalArr = MonkeyArr;
    }
    else if(remainder == 1){
        animal = "Rooster";
        animalArr = RoosterArr;
    }
    else if(remainder == 2){
        animal = "Dog";
        animalArr = DogArr;
    }
    else if(remainder == 3){
        animal = "Pig";
        animalArr = PigArr;
    }
    else if(remainder == 4){
        animal = "Rat";
        animalArr = RatArr;
    }
    else if(remainder == 5){
        animal = "Ox";
        animalArr = OxArr;
    }
    else if(remainder == 6){
        animal = "Tiger";
        animalArr = TigerArr;
    }
    else if(remainder == 7){
        animal = "Rabbit";
        animalArr = RabbitArr;
    }
    else if(remainder == 8){
        animal = "Dragon";
        animalArr = DragonArr;
    }
    else if(remainder == 9){
        animal = "Snake";
        animalArr = SnakeArr;
    }
    else if(remainder == 10){
        animal = "Horse";
        animalArr = HorseArr;
    }
    else if(remainder == 11){
        animal = "Goat";
        animalArr = GoatArr;
    }

    let element;
    if (elementrem == 0 || elementrem == 1) {
        element = "Metal"
    }
    else if (elementrem == 2 || elementrem == 3) {
        element = "Water"
    }
    else if (elementrem == 4 || elementrem == 5) {
        element = "Wood"
    }
    else if (elementrem == 6 || elementrem == 7) {
        element = "Fire"
    }
    else if (elementrem == 8 || elementrem == 9) {
        element = "Earth"
    }
    

    horoscope = "Your Chinese horoscope is " + element + " " + animal;
    let picture = animal + '.png'
    document.getElementById('animal_pic').src = picture;


    document.getElementById('horoscope').innerHTML = horoscope;
    console.log(horoscope);

    console.log(animal + " is animal");
    console.log(animalArr);
    let randomNum = Math.floor(Math.random() * 5);
    document.getElementById("horoscope_quote").innerHTML = animalArr[randomNum];


//Weather functionality
    //let city = document.getElementById('city').value;
    //console.log(city);
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/brussels?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
    fetch(url)
     .then(response => response.json())
     .then(data => {
     console.log(data);
     weatherInfo.innerHTML =`
     <span>Location: ${data.resolvedAddress}</span>
     <span>Current conditions: ${data.currentConditions.conditions}</span>`;
     weather.innerHTML =`
     <span>${data.currentConditions.temp}°C</span>`;
     }).catch(
     err => {
     alert("Wrong city name");
     console.log(err)});
}