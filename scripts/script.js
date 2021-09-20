// Smooth Scroll Offset For Sticky Header
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 80
      }, 900, 'swing', function () {
      });
  });
});

// Skip to Main Content Focus
// function focusProjects(){
//   document.getElementById("ssTitle").focus();
// }

focusMethod = function getFocus() {
  document.getElementById("project0").focus();
}

// Sticky Header 
window.addEventListener('scroll', function(){
  const header = this.document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu toggle 
const menuTog = document.querySelector('.menuToggle');
const nav = document.querySelector('.nav');
function toggleMenu(){
  menuTog.classList.toggle('active');
  nav.classList.toggle('active');
}

menuTog.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    menuTog.click();
  }
});

// Close menu on click
function navActiveCloseOnClick(){
  if(nav.classList.contains('active')){
    menuTog.classList.toggle('active');
    nav.classList.toggle('active');
  }
}

$(document).ready(function() { 
  if(window.innerWidth <= 991){
    menuTog.tabIndex = 0;
  } else {
    menuTog.tabIndex = -1;
  }
});

// Hide Sidebar on Scroll
let prevScrollPos = window.pageYOffset;
const sideContainer = document.getElementById('sideHide');
const hideBtn = document.querySelector('.hideBtn')
const showBtn = document.querySelector('.showButton');
const expandBtn = document.querySelector('.sideToggle');

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollPos < currentScrollPos) {
    sideContainer.style.transition = ".2s";
    sideContainer.style.left = "0%";
    sideContainer.style.animation = "slideOutLeft .5s forwards 0.5s";
    
    showBtn.style.transition = ".2s";
    showBtn.style.left = "0%";
    showBtn.style.animation = "slideInFromLeft .6s";
    showBtn.tabIndex = 0;

  }
  prevScrollPos = currentScrollPos;
}


// Enter Key click event to Hide Side Bar
document.querySelector('.hideBtn').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    hideBtn.click();
  }
});

showBtn.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    showBtn.click();
  }
});

let sideHidden = false;
let sideExpanded = false;
// Hide Sidebar
hideBtn.onclick = function(){
  sideContainer.style.animation = "slideOutLeft .2s forwards 0.2s";
  showBtn.style.transition = ".2s";
  showBtn.style.left = "0%";
  showBtn.style.animation = "slideInFromLeft .6s";
  sideHidden = true;
  setSidebarHiddenFocus();
}

// Show Sidebar
showBtn.onclick = function(){
  sideContainer.style.transition = ".2s";
  sideContainer.style.left = "0%";
  sideContainer.style.animation = "slideInFromLeft .2s";
  showBtn.style.transition = ".2s";
  showBtn.style.left = "-100%";
  showBtn.style.animation = "slideOutLeft forwards .1s";
  sideHidden = false;
  setSidebarHiddenFocus();
}

function setSidebarHiddenFocus(){
  if(sideHidden){
    showBtn.tabIndex = 0;
    hideBtn.tabIndex = -1;
    expandBtn.tabIndex = -1;
  } else {
    showBtn.tabIndex = -1;
    hideBtn.tabIndex = 0;
    expandBtn.tabIndex = 0;
  }  
  setSidebarFocus();
}

// Expand / Collapse side Bar
const sideNav = document.querySelector('.sideNav');
const sideNavRow = document.querySelectorAll('.sideNavRow');
expandBtn.onclick = function(){
  this.classList.toggle('sideActive');
  sideNav.classList.toggle('sideActive');
  sideNavRow.forEach(element => {
    element.classList.toggle('sideActive');
  }); 
  setSidebarFocus();
}

function setSidebarFocus(){
  if(!sideHidden && sideNav.classList.contains('sideActive')){
    expandBtn.tabIndex = 0;
    audioSlider.tabIndex = 0;
    textMagBtn1.tabIndex = 0;
    textMagBtn2.tabIndex = 0;
    darkModeSlider.tabIndex = 0;
  } else {
    audioSlider.tabIndex = -1;
    textMagBtn1.tabIndex = -1;
    textMagBtn2.tabIndex = -1;
    darkModeSlider.tabIndex = -1;
  }
}



// Enter Key click event for side nav
expandBtn.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    expandBtn.click();
  }
});

// Inner Side Bar focus to Trigger Key click Event to Open Side Bar
const audioSlider = document.getElementById('adSlider');

// audioSlider.addEventListener("focus", function(event) {
//   var focused = false;
//   if(!focused) {
//     event.preventDefault();
//     sideToggle.click();
//     focused = ture;
//   }
//   break;
    
// });

// Enter Key click event for audio descriptions
audioSlider.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    audioSlider.click();
  }
});

// Enter Key click event for decrease font size button
var decreaseTm = document.querySelector('.tmBtnFirst');
decreaseTm.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    decreaseTm.click();
  }
});

// Enter Key click event for increase font size button
var increaseTm = document.querySelector('.tmBtn');
increaseTm.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    increaseTm.click();
  }
});

// Enter Key click event for theme change slider
var themeChangeSlider = document.querySelector('#themeChangeSlider');
themeChangeSlider.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    themeChangeSlider.click();
  }
});


const adSlider = document.getElementById('ad');
const tmSlider = document.getElementById('tm');
const dmSlider = document.getElementById('dm');

const textMagBtn1 = document.querySelector('.tmBtnFirst');
const textMagBtn2 = document.querySelector('.tmBtn');

const textArea = document.querySelector('textarea');
const logo = document.querySelector('.logo');
const paras = document.querySelectorAll('p');
const lists = document.querySelectorAll('li');
const bannerH1 = document.querySelector('h1');
const titles = document.querySelectorAll('h2');
const titleContainer = document.querySelectorAll('.title');
const projectTitles = document.querySelectorAll('h3');
const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const btns = document.querySelectorAll('.btn');
const projectBox = document.querySelectorAll('.box');
const darkModeSlider = document.querySelector('#themeChangeSlider');
const navTitle = document.querySelector('.navTitle')

const themeChange = document.querySelector('.themeChange');
const body = document.querySelector('body');

const aboutSection = document.querySelector('#aboutText');
const skills = document.querySelector('.skillsBox');
const contactText = document.querySelector('#contact > .title');
const contactFormText = document.querySelector('#contact > .contactForm');


// Toggle Dark Mode
function enableDarkMode(){
  themeChange.classList.toggle('themeActive');
  body.classList.toggle('dark');
}

// Enable / Disable Audio Description icons
var audioEnabled = false;
function enableAudio(){
  if(!audioEnabled){
    document.querySelector('.nav > li').insertAdjacentHTML("beforebegin",
    `<i id="navAd" class='fa fa-audio-description' aria-hidden='true'></i>`);

    document.querySelector('.skillsAd').innerHTML =
    `<i id="navAd" class='fa fa-audio-description' aria-hidden='true'></i>`;

    titles.forEach(element => {
      element.insertAdjacentHTML("beforebegin",
      `<i class='fa fa-audio-description' aria-hidden='true'></i>`);
    });
  
    projectTitles.forEach(element => {
      element.insertAdjacentHTML("beforebegin",
      `<i class='fa fa-audio-description' aria-hidden='true'></i>`);
    });
  
    bannerH1.insertAdjacentHTML("afterbegin",
      `<i class='fa fa-audio-description' aria-hidden='true'></i>`);

    adSlider.classList.toggle('adActive');
    bannerH1.classList.toggle('adActive');
    bannerH1.tabIndex = 0;
    aboutSection.tabIndex = 0;
    skills.tabIndex = 0;
    contactText.tabIndex = 0;
    contactFormText.tabIndex = 0;
    titleContainer.forEach(element => {
      element.tabIndex = 0;
    });
    projectBox.forEach(element => {
      element.tabIndex = 0;
    });
    audioEnabled = true;
  } else {
    var navAd = document.querySelector('.nav > i');
    var h1Element = document.querySelector('h1 > i');
    var titleElements = document.querySelectorAll('.title > i');
    var textElements = document.querySelectorAll('.text > i');
    var columnTitle = document.querySelector('.column > i');
    var skillsTitle = document.querySelector('.skillsAd > i');
    var contactTitle = document.querySelector('.contactForm > i');
    navAd.parentNode.removeChild(navAd);
    h1Element.parentNode.removeChild(h1Element);
    columnTitle.parentNode.removeChild(columnTitle);
    skillsTitle.parentNode.removeChild(skillsTitle);
    contactTitle.parentNode.removeChild(contactTitle);

    titleElements.forEach(element => {
      element.parentNode.removeChild(element);
      element.tabIndex = -1;
    });

    textElements.forEach(element => {
      element.parentNode.removeChild(element);
      element.tabIndex = -1;
    });
  
    titles.forEach(element => {
      element.tabIndex = -1;
    });
    bannerH1.tabIndex = -1;
  
    projectTitles.forEach(element => {
      
    });
    adSlider.classList.toggle('adActive');
    bannerH1.classList.toggle('adActive');
    audioEnabled = false;
  }
}

// Enter Key click event to Hide Side Bar
// const projectBox = document.querySelectorAll('.box');
projectBox.forEach(element => {
  element.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      element.click();
    }
  });
});

function navToggleIdPlay(){
  if(!menuTog.classList.contains('active') && audioEnabled){
    playAudio('openNav');
  } else {
    playAudio('closeNav');
  }
}

function navToggleIdStop(){
  if(!menuTog.classList.contains('active') && audioEnabled){
    stopAudio('openNav');
  } else {
    stopAudio('closeNav');
  }
}

function playAudio(id) {
  const sound = document.querySelector("#" + id);
  sound.muted = false;
  if(audioEnabled){
    sound.play();
  }
}

function stopAudio(id) {
  const sound = document.querySelector("#" + id);
  sound.pause();
  sound.currentTime = 0;
}

// Increase Font Size
function increaseFontSize(){ 
  textMagBtn1.classList.remove('tmActive');
  textMagBtn2.classList.add('tmActive');
  textArea.classList.add('magActive');

  logo.classList.add('magActive');
  bannerH1.classList.add('magActive');

  paras.forEach(element => {
    element.classList.add('magActive');
  });
  lists.forEach(element => {
    element.classList.add('magActive');
  });
  titles.forEach(element => {
    element.classList.add('magActive');
  });
  projectTitles.forEach(element => {
    element.classList.add('magActive');
  });
  labels.forEach(element => {
    element.classList.add('magActive');
  });
  inputs.forEach(element => {
    element.classList.add('magActive');
  });
  btns.forEach(element => {
    element.classList.add('magActive');
  });

}

// Decrease Font Size
function decreaseFontSize() {
  textMagBtn1.classList.add('tmActive');
  textMagBtn2.classList.remove('tmActive');
  textArea.classList.remove('magActive');
  logo.classList.remove('magActive');
  bannerH1.classList.remove('magActive');

  paras.forEach(element => {
    element.classList.remove('magActive');
  });
  lists.forEach(element => {
    element.classList.remove('magActive');
  });
  titles.forEach(element => {
    element.classList.remove('magActive');
  });
  projectTitles.forEach(element => {
    element.classList.remove('magActive');
  });
  labels.forEach(element => {
    element.classList.remove('magActive');
  });
  inputs.forEach(element => {
    element.classList.remove('magActive');
  });
  btns.forEach(element => {
    element.classList.remove('magActive');
  });

}

// Scroll Down Arrow
$(window).bind('scroll', function() {
  if ($(window).scrollTop() > 175) {
      $('.arrow').hide();
  }
  else {
      $('.arrow').show();
  }
});

