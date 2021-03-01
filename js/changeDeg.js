class Degree {
  constructor() {
    this.celsius
    this.fahrenheit
  }

  changeToFahrenheit(value) {
    const FValue = Math.floor(value * 9 / 5 + 32)
    tempValue.addEventListener('click', () => {
      tempValue.textContent = `${FValue}°F`
      tempValue.classList.toggle('fahrenheit')
    })
    return FValue
  }

  changeToCelsius(value) {
    const Cvalue = Math.floor((value - 32) * 0.5556)
    tempValue.addEventListener('click', () => {
      tempValue.textContent = `${Cvalue}°C`
      tempValue.classList.toggle('fahrenheit')
    })
  }

}
