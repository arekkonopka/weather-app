class Degree {
  constructor() {
    this.celsius
    this.fahrenheit
  }

  changeDeg(value) {

    let isItCelsius;
    let FValue = (value * 9 / 5 + 32).toFixed(1)
    let CValue = ((FValue - 32) * 0.5556).toFixed(1)



    if (storage.getStorage('FValue') !== null && storage.getStorage('CValue') === null) {
      tempValue.textContent = `${storage.getStorage('FValue')}°F`
    } else if (storage.getStorage('FValue') === null && storage.getStorage('CValue') !== null) {
      tempValue.textContent = `${storage.getStorage('CValue')}°C`
    } else {
      // tempValue.textContent = `${value}°C`
    }


    tempValue.addEventListener('click', () => {
      if (isItCelsius) {
        isItCelsius = false
        storage.addToStorage('FValue', FValue)
        tempValue.textContent = `${FValue}°F`
        storage.removeStorage('CValue')
      } else {
        isItCelsius = true
        storage.addToStorage('CValue', CValue)
        tempValue.textContent = `${CValue}°C`
        storage.removeStorage('FValue')
      }
    })

    // if (isItCelsius) {
    //   tempValue.textContent = `${storage.getStorage('degree')}°F`
    //   isItCelsius = true
    // } else {
    //   tempValue.textContent = `${storage.getStorage('degree')}°C`
    //   isItCelsius = false
    // }
  }
}


const deg = new Degree

