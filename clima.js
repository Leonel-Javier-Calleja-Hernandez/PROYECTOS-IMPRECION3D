fetch('https://goweather.herokuapp.com/weather/houston' )
.then(res => res.json())
.then(data => {
    console.log("la temperatura es: " + data.temperature + " y su velocidad es " + data.wind)})