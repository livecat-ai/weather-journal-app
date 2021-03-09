/* Global Variables */
const api_key = '7506705c269c4dfeddfb2d097984031d';
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Post data
const postData = async (url = '', data = {})=>{
    // console.log(data);
        const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

        try {
            const newData = await response.json();
            // console.log(newData);
            return newData;
        } catch(error) {
            console.log("error", error);
        }
};

// postData('/add', {date: 'data',
//                   temparature: 79,
//                   userResponse: 'Love warm weather'}); 


// Fetch weather from Openweathermap api



const getWeatherFromAPI = async (url = '', zip, api_key)=>{
    // Make the call to the api capture the response
    const fullURL = url + zip + '&units=metric' + '&APPID=' + api_key;
    // console.log(fullURL);
    const response = await fetch(fullURL, {
        method: 'GET',
        credentials: 'same-origin',
    });
    try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

function GetPost(){
    const zipcode = document.getElementById("zip").value;
    const feelings = document.getElementById("feelings").value;
    getWeatherFromAPI(baseURL, zipcode, api_key)
        .then(function(data){
            postData("/add", {"date": newDate,
                            "temperature": data.main.temp,
                            "feelings": feelings});
        })
        .then(function(data){

        }
        )
};

// Get zipcode from user

const generateButton = document.getElementById("generate");

generateButton.addEventListener('click', generateButtonClickEventCallback);

function generateButtonClickEventCallback(event) {
    // const weatherData = getWeather(baseURL, zipcode, api_key);
    const weatherData = GetPost();
    // console.log(weatherData);
}