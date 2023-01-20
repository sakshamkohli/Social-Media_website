//sidebar
const menuItems = document.querySelectorAll('.menu-items');


//remove active class from all menu items
const changeMenuItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

//messages
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = messages.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customized-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeMenuItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none';
    } else {
      document.querySelector('.notification-popup').style.display = 'block';
      document.querySelector('.notification-count').style.display = 'none';
    }
  })
})

//search chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      console.log(name);
      chat.style.display = 'flex';
    } else {
      chat.style.display = 'none';
    }
  })
}
// search message
messageSearch.addEventListener('keyup', searchMessage);



//highlight message card when menu item is clicked
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 1500);
})


//theme costomisation
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customized-theme')) {
    themeModal.style.display = 'none';
  }
}
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('.active');
  })
}

fontSizes.forEach(size => {


  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-left', '-2rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem');
      root.style.setProperty('----sticky-top-left', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem');
      root.style.setProperty('----sticky-top-left', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-10rem');
      root.style.setProperty('----sticky-top-left', '-33rem');
    }
    document.querySelector('html').style.fontSize = fontSize;
  })
})



// color Primary
colorPallete.forEach(color => {
  color.addEventListener('click', () => {
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})
//dark mode

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {

  Bg1.classList.add('active');
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  window.location.reload();
});


Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
});

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  Bg3.classList.add('active');
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();
});
