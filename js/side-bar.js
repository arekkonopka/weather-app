class SideBar {

  burgerAnimation() {
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      const showBar = document.querySelector('.side-bar').classList.toggle('active-bar')
    })
  }

  chooseTheme() {
    const theme = [...document.querySelectorAll('.wrapper-img .img')]
    theme.forEach((theme) => {
      theme.addEventListener('click', (e) => {
        let bgc = e.target.getAttribute('data-url')
        let container = document.querySelector('.container')
        container.style.backgroundImage = `url('${bgc}')`
      })
    })
  }


  //naprawic zmiane z Eng na PL oraz podstawic "eng" do fetch 
  choseLan() {
    let isThePolishLan = true

    const flagEN = document.querySelector('.eng-flag')
    const flagPL = document.querySelector('.pol-flag')

    const clickPl = () => {
      isThePolishLan = true
      if (isThePolishLan) {
        pl.setPl()
      } return "pl"
    }

    const clickEng = () => {
      isThePolishLan = false
      if (!isThePolishLan) {
        eng.setEng()
      } return "eng"
    }

    flagPL.addEventListener('click', clickPl)
    flagEN.addEventListener('click', clickEng)

    return clickEng(), clickPl()
  }
}

const sideBar = new SideBar()
sideBar.burgerAnimation()
sideBar.chooseTheme()
