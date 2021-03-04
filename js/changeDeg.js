class Degree {
  constructor() {
    this.celsius
    this.fahrenheit
  }

  changeDeg(value) {
    let isItCelsius = true
    let FValue = (value * 9 / 5 + 32).toFixed(1)
    let Cvalue = ((FValue - 32) * 0.5556).toFixed(1)


    tempValue.addEventListener('click', () => {
      if (isItCelsius) {
        isItCelsius = false
        tempValue.textContent = `${FValue}°F`
      } else {
        isItCelsius = true
        tempValue.textContent = `${Cvalue}°C`
      }
    })
  }
}


const deg = new Degree