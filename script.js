const cityInput=document.querySelector(".inputText");
const btn =document.querySelector(".btn");

/*
addEventListener  tanımı
! olay ne olduğunda gerçekleşmesi
!
olay gerçekleştikten sonra ne olacak


*/
btn.addEventListener("click",()=>{
    const cityName=cityInput.value;
    getData(cityName)
})

function getData(name){
    const API="ef728b367a7050c8f8b38d3d037e2e6c";
    const baseURL=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;
    // console.log(fetch(baseURL))
    fetch(baseURL)
    .then(res=>res.json())
    .then(data=>{
      const {name,sys:{country},main:{temp,feels_like,humidity},weather:[{description}], wind:{speed}}=data;
     // console.log(name ,country,temp,feels_like,humidity,description,speed)

      // verileri js'e çekmeeeeee
      const city=document.querySelector(".city");
      const temperature=document.querySelector(".temp");
      const hum=document.querySelector(".humidity");
      const wind=document.querySelector(".wind");
      const weatherDesc=document.querySelector(".weather");
      const feeling=document.querySelector(".feeling");
      console.log(city,temperature,hum,wind,weatherDesc,feeling)


      // js'e çekilen elemanları yerine yerleştirme
         city.textContent=`${name},${country}`;
         temperature.innerText=`${temp.toFixed(0)} °C`;
         hum.textContent=`Nem: %${humidity}`;
         wind.innerHTML=`<i>Rüzgar: ${speed}km/s</i>`
         weatherDesc.innerHTML=`<i>${description.toUpperCase()}</i>`
        feeling.textContent=`Hissedilen Sıcaklık : ${feels_like}`



    })
    .catch(err=>console.log(err))
    cityInput.value="";
    cityInput.focus();
}
