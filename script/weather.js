const appKey = "090cdaeee0b3d68e9ebf9d2ed4e224dd";
const hn = "HaNoi";
const hcm = "Ho Chi Minh";

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ hn + "&appid="+ appKey,
    method:'get',
    success: function (data){
        $('#weatherHN').text(parseInt(data.main.temp - 273));
        $('#iconWeatherHN').attr('src','http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png');
    }
});

$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q="+ hcm + "&appid="+ appKey,
    method:'get',
    success: function (data){
        $('#weatherHCM').text(parseInt(data.main.temp - 273));
        $('#iconWeatherHCM').attr('src','http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png');
    }
});