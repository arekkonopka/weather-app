class SideBar {

  burgerAnimation() {
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      const showBar = document.querySelector('.side-bar').classList.toggle('active-bar')
    })
  }

  chooseTheme() {
    let container = document.querySelector('.container')
    const theme = [...document.querySelectorAll('.wrapper-img .img')]

    if (storage.getStorage('theme') !== null) {
      let getThemeFromStorage = storage.getStorage('theme')
      container.style.backgroundImage = `url('${getThemeFromStorage}')`
    }

    theme.forEach((theme) => {
      theme.addEventListener('click', (e) => {
        let bgc = e.target.getAttribute('data-url')
        storage.addToStorage('theme', bgc)
        container.style.backgroundImage = `url('${bgc}')`
      })
    })

  }


  chooseLan() {
    let isThePolishLan = true

    if (storage.getStorage('lang') === 'pl') {
      pl.setPl()
    } else {
      eng.setEng()
    }

    const flagEN = document.querySelector('.eng-flag')
    const flagPL = document.querySelector('.pol-flag')

    const clickPl = () => {
      isThePolishLan = true
      if (isThePolishLan) {
        storage.addToStorage('lang', pl.setPl())
        addLoader()
        getGeoLocation('pl')
      }
    }

    const clickEng = () => {
      isThePolishLan = false
      if (!isThePolishLan) {
        storage.addToStorage('lang', eng.setEng())
        addLoader()
        getGeoLocation('eng')
      }
    }

    flagPL.addEventListener('click', clickPl)
    flagEN.addEventListener('click', clickEng)


  }
}

const sideBar = new SideBar()
sideBar.burgerAnimation()
sideBar.chooseTheme()
sideBar.chooseLan()



