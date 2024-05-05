// This function is executed when the document is fully loaded
$(document).ready(function(){
    // executed when the form is submitted
    $("#form-submit").submit(function(event){
        // Call the performSearch function and pass the event object
        performSearch(event);
    });
});

// Function to perform the weather search
function performSearch(event) {
    var request;
    // Prevent the default form submission behavior
    event.preventDefault();

    // Make an AJAX request to the OpenWeatherMap API
    request = $.ajax({
        url:'https://api.openweathermap.org/data/2.5/weather',
        type:"GET",
        data:{
            q:$("#city").val(), // Get the value of the input field with id 'city'
            appid:'128b2a70fd3d8d83854ae6d95ec1a1eb',
            units:'metric'
        }
    });
    // This function is called when the request is successful
    request.done(function(response){
        // Call the formatSearch function and pass the response object
        formatSearch(response);
    });
}

// Function to format and display the weather information
function formatSearch(jsonObject){
    // Initiate variables from JSON
    var city_coun = jsonObject.sys.country;
    var city_name = jsonObject.name;
    var city_weather = jsonObject.weather[0].main;
    var city_temp = jsonObject.main.temp;

    // Display the information in the corresponding elements
    $('#city-coun').text("Welcome to: " + city_coun);
    $('#city-name').text("Your destination is: " + city_name);
    $('#city-weather').text("The weather there is: " + city_weather);
    $('#city-temp').text("Specifc temperature is: " + city_temp + " Celsius");
    $('#bye-bye').text("Enjoy!");

}
