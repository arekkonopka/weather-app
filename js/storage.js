class LocalStorage {

  addToStorage(name, item) {
    if (localStorage.getItem !== null) {
      localStorage.setItem(name, JSON.stringify(item))
    }
  }

  getStorage(name) {
    const item = JSON.parse(localStorage.getItem(name))
    return item
  }

  removeStorage(name) {
    localStorage.removeItem(name)
  }

}

const storage = new LocalStorage()



