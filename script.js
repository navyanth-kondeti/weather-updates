$(document).ready(function(){
    $("#searchinput").keyup(function(e){
        let cityname = e.target.value
        const APIkey = "a7e827110cb209f8eec2843e3d5e470a";

        // make a requesty to the server
        $.ajax({

            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a7e827110cb209f8eec2843e3d5e470a&units=metric`
            
        
        }).done(function(weatherdata){
            console.log(weatherdata);
            $("#profile").html(`
<div class="row">

    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">weather: ${weatherdata.weather[0].description}</h5>
    <p class="card-text">
    <ul>
            <li>Temperature:${weatherdata.main.temp}&#8451;</li>
            <li>Humdity:${weatherdata.main.humidity} <span> g.m<sup>-3</sup></span></li>
            <li>Pressure:${weatherdata.main.pressure} &#13225;</li>
    </ul>
    </p>
    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">"learn more about ${cityname}"</a>
    </div>
    </div>

</div>`);
            
        });
    });
});