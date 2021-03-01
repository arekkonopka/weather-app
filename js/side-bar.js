// burger animation
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
        container.style.backgroundImage = `${bgc}`
      })
    })
  }


  //naprawic zmiane z Eng na PL oraz podstawic "eng" do fetch 
  choseLan(callback) {
    let p = false
    if (p) {
      const flag = document.querySelector('.pol-flag')
      flag.addEventListener('click', () => {
        pl.setPl()
        p = false
        console.log('ok')
      })

    } else {
      const flag = document.querySelector('.eng-flag')
      flag.addEventListener('click', () => {
        eng.setEng()
        p = true
        // console.log(p)
      })

    } return p
  }


  // choseLanPl() {
  //   const flag = document.querySelector('.pol-flag')
  //   flag.addEventListener('click', () => {
  //     pl.setPl()
  //     let p = false
  //   })
  // }
  // choseLanEng() {
  //   const flag = document.querySelector('.eng-flag')
  //   flag.addEventListener('click', () => {
  //     eng.setEng()
  //     let p = true
  //   })
  // }


}


const sideBar = new SideBar()
sideBar.burgerAnimation()
sideBar.chooseTheme()

console.log(sideBar.choseLan())
