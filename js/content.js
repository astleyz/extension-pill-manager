chrome.runtime.sendMessage({todo: "showPageAction"})


class TavrMedia {
  constructor () {
    this.menu = document.querySelector('.partner_player_menu');
    this.div = document.createElement('div');
    this.div.classList.add('blockeddiv');
    this.div.style = `width: 960px; height: 43px; position: absolute; cursor: pointer;`;
    this.menu.appendChild(this.div);
    this.addListeners()
  }

  addListeners() {
    this.menu.addEventListener('mouseenter', () => this.clearBlock());
    this.menu.addEventListener('mouseleave', () => this.setBlock());
  }

  clearBlock() {
    this.id = setTimeout(() => {
      this.div.style.display = `none`
    }, 500); 
  }

  setBlock() {
    clearTimeout(this.id)
    this.div.style.display = `block`
  }
}

class Youtube {
  constructor() {
    this.init()
  }

  init() {
    this.controlList = document.querySelector('div#container div.ytp-chrome-bottom div.ytp-chrome-controls');
    if (this.controlList === null || !this.controlList) return this.anywayCreate()
    this.volume = this.controlList.querySelector('div.ytp-left-controls span div.ytp-volume-panel')
    this.addListeners()
    clearInterval(this.intervalID)
  }

  addListeners() {
    this.controlList.tabIndex = 0;
    document.body.addEventListener('click', () => {
      if (document.activeElement === this.volume) {
        this.controlList.addEventListener('focus', () => {
          this.controlList.style.outlineWidth = `0`
        })
        this.controlList.addEventListener('click', () => {
          this.controlList.style.outlineWidth = `0`
        })
        this.controlList.focus(); 
        this.controlList.click();
      }
    })
  }

  anywayCreate() {
    this.intervalID = setInterval(() => {
      this.init()
      this.controlList && this.volume ? clearInterval(this.intervalID) : void 0
    }, 500);
  }
}

class Google {
  constructor() {
    this.addListener()
  }

  addListener() {
    this.id = setInterval(() => this.init(), 10);
  }
  
  init() {
    let html = document.querySelector(`.QVCmK`)
    if (html) {
      html.style.overflow = `visible`
      clearInterval(this.id)
    }
  }
}

if (location.hostname === `play.tavr.media`) new TavrMedia()
if (location.hostname === `www.youtube.com`) new Youtube()
if (location.hostname === `www.google.com`) new Google()
