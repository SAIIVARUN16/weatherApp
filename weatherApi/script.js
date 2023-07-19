const APIKEY='145120482d2cbf1c92ec04170abf98ae'
const URL='https://api.openweathermap.org/data/2.5/weather?q='
const input=document.querySelector('.inputbtn')
const image=document.querySelector('.image')

const weather = async () => {
    const res= await fetch(URL+input.value+`&appid=${APIKEY}`)
    const data=await res.json()
    console.log(data);
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°C"
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/hr"
    if(data.weather[0].main=="Clouds"){
        image.src="./images/clouds.png"
    }   
    if(data.weather[0].main=="Clear"){
        image.src="./images/clear.png"
    }
    if(data.weather[0].main=="Rain"){
        image.src="./images/rain.png"
    }
    if(data.weather[0].main=="Drizzle"){
        image.src="./images/drizzle.png"
    }
    if(data.weather[0].main=="Mist"){
        image.src="./images/mist.png"
    }
}