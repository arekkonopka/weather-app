const apiKey = '048e50534e65459a929ba4592b0e9259'
const nav = navigator.geolocation.getCurrentPosition(succes, error)
let lan = 'pl'

function succes(position) {
  let lat = position.coords.latitude
  let lon = position.coords.longitude
  getWeather(lat, lon)
}

function error(lan) {
  let lat = 52.2297700
  let lon = 21.0117800

  fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&include=minutely&lang=${lan}`)
    .then((res) => res.json())
    .then((data) => {
      loc.textContent = `${data.data[0].country_code}, ${data.data[0].city_name}`
      img.innerHTML = `<img src="img/${data.data[0].weather.icon}.png" alt="">`
      tempValue.textContent = `${data.data[0].temp}°C`
      tempDesc.textContent = `${data.data[0].weather.description}`
      pod.textContent = `Dzień/noc: ${data.data[0].pod}`
      pod.style.textTransform = 'uppercase'
      pressure.textContent = `${data.data[0].pres} hPa`
      wind.textContent = `${data.data[0].wind_spd} m/s`
      humidity.textContent = `${data.data[0].rh} %`
      dewPoint.textContent = `${data.data[0].dewpt} °C`
      cloudy.textContent = `${data.data[0].clouds} %`
      deg.changeDeg(data.data[0].temp)
    })
    .then(() => {
      alert.style.top = '20px'
    })

}


function getWeather(lat, lon) {

  fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&include=minutely&lang=${sideBar.choseLan()}`)
    .then((res) => res.json())
    .then((data) => {

      loc.textContent = `${data.data[0].country_code}, ${data.data[0].city_name}`
      img.innerHTML = `<img src="img/${data.data[0].weather.icon}.png" alt="">`
      tempValue.textContent = `${data.data[0].temp}°C`
      tempDesc.textContent = `${data.data[0].weather.description}`
      pod.textContent = `${data.data[0].pod}`
      pod.style.textTransform = 'uppercase'
      pressure.textContent = `${Math.floor(data.data[0].pres)} hPa`
      wind.textContent = `${data.data[0].wind_spd.toFixed(1)} m/s`
      humidity.textContent = `${data.data[0].rh.toFixed(1)} %`
      dewPoint.textContent = `${data.data[0].dewpt} °C`
      cloudy.textContent = `${data.data[0].clouds} %`


      deg.changeDeg(data.data[0].temp)

    })
}


