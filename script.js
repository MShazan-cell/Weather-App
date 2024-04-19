const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f5088bd742msha5b87ff5519b885p19be99jsnc56bfab7c4ab',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather=(city)=>{

    cityname.innerHTML=city

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;

async function fetchapi() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const resultObj = JSON.parse(result);
        temp.innerHTML = resultObj.temp
        min_temp.innerHTML = resultObj.min_temp
        max_temp.innerHTML = resultObj.max_temp
        wind_speed.innerHTML = resultObj.wind_speed
        wind_degrees.innerHTML = resultObj.wind_degrees
        humidity.innerHTML = resultObj.humidity
        sunrise.innerHTML = new Date(resultObj.sunrise * 1000)
        sunset.innerHTML = new Date(resultObj.sunset * 1000)
    } catch (error) {
        console.log(error);
    }
}
fetchapi();

async function fetchapi1() {
    try {
        const response1 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options);
        const result1 = await response1.text();
        const resultObj1 = JSON.parse(result1);
        temp1.innerHTML = resultObj1.temp
        min_temp1.innerHTML = resultObj1.min_temp
        max_temp1.innerHTML = resultObj1.max_temp
        wind_speed1.innerHTML = resultObj1.wind_speed
        wind_degrees1.innerHTML = resultObj1.wind_degrees
        humidity1.innerHTML = resultObj1.humidity
        h=new Date(resultObj1.sunrise * 1000)
        sunrise1.innerHTML = h.getHours()+':'+h.getMinutes()+':'+h.getSeconds()
        t=new Date(resultObj1.sunset * 1000)
        sunset1.innerHTML = t.getHours()+':'+t.getMinutes()+':'+t.getSeconds()
    } catch (error) {
        console.log(error);
    }
}
fetchapi1();

async function fetchapi2() {
    try {
        const response2 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options);
        const result2 = await response2.text();
        const resultObj2 = JSON.parse(result2);
        temp2.innerHTML = resultObj2.temp
        min_temp2.innerHTML = resultObj2.min_temp
        max_temp2.innerHTML = resultObj2.max_temp
        wind_speed2.innerHTML = resultObj2.wind_speed
        wind_degrees2.innerHTML = resultObj2.wind_degrees
        humidity2.innerHTML = resultObj2.humidity
        h1=new Date(resultObj2.sunrise * 1000)
        sunrise2.innerHTML = h1.getHours()+':'+h1.getMinutes()+':'+h1.getSeconds()
        t1=new Date(resultObj2.sunset * 1000)
        sunset2.innerHTML = t1.getHours()+':'+t1.getMinutes()+':'+t1.getSeconds()
    } catch (error) {
        console.log(error);
    }
}
fetchapi2();

async function fetchapi3() {
    try {
        const response3 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options);
        const result3 = await response3.text();
        const resultObj3 = JSON.parse(result3);
        temp3.innerHTML = resultObj3.temp
        min_temp3.innerHTML = resultObj3.min_temp
        max_temp3.innerHTML = resultObj3.max_temp
        wind_speed3.innerHTML = resultObj3.wind_speed
        wind_degrees3.innerHTML = resultObj3.wind_degrees
        humidity3.innerHTML = resultObj3.humidity
        h2=new Date(resultObj3.sunrise * 1000)
        sunrise3.innerHTML = h2.getHours()+':'+h2.getMinutes()+':'+h2.getSeconds()
        t2=new Date(resultObj3.sunset * 1000)
        sunset3.innerHTML = t2.getHours()+':'+t2.getMinutes()+':'+t2.getSeconds()
    } catch (error) {
        console.log(error);
    }
}
fetchapi3();

async function fetchapi4() {
    try {
        const response4 = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options);
        const result4 = await response4.text();
        const resultObj4 = JSON.parse(result4);
        temp4.innerHTML = resultObj4.temp
        min_temp4.innerHTML = resultObj4.min_temp
        max_temp4.innerHTML = resultObj4.max_temp
        wind_speed4.innerHTML = resultObj4.wind_speed
        wind_degrees4.innerHTML = resultObj4.wind_degrees
        humidity4.innerHTML = resultObj4.humidity
        h3=new Date(resultObj4.sunrise * 1000)
        sunrise4.innerHTML = h3.getHours()+':'+h3.getMinutes()+':'+h3.getSeconds()
        t3=new Date(resultObj4.sunset * 1000)
        sunset4.innerHTML = t3.getHours()+':'+t3.getMinutes()+':'+t3.getSeconds()
    } catch (error) {
        console.log(error);
    }
}
fetchapi4();

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("New York")