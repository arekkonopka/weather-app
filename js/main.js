const loc = document.querySelector('.location-country-city')
const img = document.querySelector('.img-weather')
const tempValue = document.querySelector('.number')
const tempDesc = document.querySelector('.description')
const pod = document.querySelector('.description-pod')
const pressure = document.querySelector('.pressure')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const dewPoint = document.querySelector('.dew-point')
const cloudy = document.querySelector('.cloud')
const alert = document.querySelector('.notification')


data = {
  polish: {

  }

}
class Pl {
  constructor() {
    this.access = 'Zezwól na dostęp do lokalizacji'
    this.h1Desc = 'Szczegóły'
    this.pressure = 'Ciśnienie'
    this.wind = 'Prędkość wiatru'
    this.humidity = 'Wilgotność'
    this.dewPoint = 'Punkt rosy'
    this.cloud = 'Zachmurzenie'
    this.language = 'Wybierz język'
    this.theme = 'Wybierz motyw'
    this.pod = 'Dzień/Noc:'
  }

  setPl() {
    document.querySelector('.access').textContent = this.access
    document.querySelector('.h1-desc').textContent = this.h1Desc
    document.querySelector('.pressure-desc').textContent = this.pressure
    document.querySelector('.wind-desc').textContent = this.wind
    document.querySelector('.humidity-desc').textContent = this.humidity
    document.querySelector('.dew-point-desc').textContent = this.dewPoint
    document.querySelector('.cloud-desc').textContent = this.cloud
    document.querySelector('.language-desc').textContent = this.language
    document.querySelector('.theme-desc').textContent = this.theme
    document.querySelector('.pod-desc').textContent = this.pod
    return "pl"
  }
}

class Eng {
  constructor() {
    this.access = 'Allow access to the location'
    this.h1Desc = 'Details'
    this.pressure = 'Pressue'
    this.wind = 'Wind speed'
    this.humidity = 'Humidity'
    this.dewPoint = 'Dew point'
    this.cloud = 'Cloud'
    this.language = 'Choose language'
    this.theme = 'Choose theme'
    this.pod = 'Day/Night:'
  }

  setEng() {
    document.querySelector('.access').textContent = this.access
    document.querySelector('.h1-desc').textContent = this.h1Desc
    document.querySelector('.pressure-desc').textContent = this.pressure
    document.querySelector('.wind-desc').textContent = this.wind
    document.querySelector('.humidity-desc').textContent = this.humidity
    document.querySelector('.dew-point-desc').textContent = this.dewPoint
    document.querySelector('.cloud-desc').textContent = this.cloud
    document.querySelector('.language-desc').textContent = this.language
    document.querySelector('.theme-desc').textContent = this.theme
    document.querySelector('.pod-desc').textContent = this.pod
    return "eng"
  }
}

const pl = new Pl()
const eng = new Eng()

const loader = document.querySelector('.lds-roller')

const addLoader = () => {
  loader.classList.add('visible')
}
const removeLoader = () => {
  loader.classList.remove('visible')
}
addLoader()