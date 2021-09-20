const trendingSliders = document.querySelector(".trending");
const picksForYouSliders = document.querySelector(".picksForYou");
const actionSliders = document.querySelector(".action");
const comediesSliders = document.querySelector(".comedies");
const scifiSliders = document.querySelector(".scifi");
const thrillerSliders = document.querySelector(".thriller");
const bodyEl = document.querySelector("body");
var scrollPerClick;
var ImagePadding = 20;

window.addEventListener('scroll', function(){
  const header = this.document.querySelector('.main-header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

showMoviesData();

// Scroll Functionality for each genre
var trendingScrollAmount = 0;
var picksScrollAmount = 0;
var actionScrollAmount = 0;
var comediesScrollAmount = 0;
var scifiScrollAmount = 0;
var thrillerScrollAmount = 0;

function trendingSliderScrollLeft() {
  trendingSliders.scrollTo({
    top: 0,
    left: (trendingScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (trendingScrollAmount < 0) {
    trendingScrollAmount = 0;
  }
}

function trendingSliderScrollRight() {
  if (trendingScrollAmount <= trendingSliders.scrollWidth - trendingSliders.clientWidth) {
    trendingSliders.scrollTo({
      top: 0,
      left: (trendingScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }
}

function actionSliderScrollLeft() {
  actionSliders.scrollTo({
    top: 0,
    left: (actionScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (actionScrollAmount < 0) {
    actionScrollAmount = 0;
  }
}

function actionSliderScrollRight() {
  if (actionScrollAmount <= actionSliders.scrollWidth - actionSliders.clientWidth) {
    actionSliders.scrollTo({
      top: 0,
      left: (actionScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }
}

function comediesSliderScrollLeft() {
  comediesSliders.scrollTo({
    top: 0,
    left: (comediesScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (comediesScrollAmount < 0) {
    comediesScrollAmount = 0;
  }
}

function comediesSliderScrollRight() {
  if (comediesScrollAmount <= comediesSliders.scrollWidth - comediesSliders.clientWidth) {
    comediesSliders.scrollTo({
      top: 0,
      left: (comediesScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }
}

function scifiSliderScrollLeft() {
  scifiSliders.scrollTo({
    top: 0,
    left: (scifiScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (scifiScrollAmount < 0) {
    scifiScrollAmount = 0;
  }
}

function scifiSliderScrollRight() {
  if (scifiScrollAmount <= scifiSliders.scrollWidth - scifiSliders.clientWidth) {
    scifiSliders.scrollTo({
      top: 0,
      left: (scifiScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }

}

function thrillerSliderScrollLeft() {
  thrillerSliders.scrollTo({
    top: 0,
    left: (thrillerScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (thrillerScrollAmount < 0) {
    thrillerScrollAmount = 0;
  }
}

function thrillerSliderScrollRight() {
  if (thrillerScrollAmount <= thrillerSliders.scrollWidth - thrillerSliders.clientWidth) {
    thrillerSliders.scrollTo({
      top: 0,
      left: (thrillerScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }

}

function picksSliderScrollLeft() {
  picksForYouSliders.scrollTo({
    top: 0,
    left: (picksScrollAmount -= scrollPerClick),
    behavior: 'smooth'
  });

  if (picksScrollAmount < 0) {
    picksScrollAmount = 0;
  }
}

function picksSliderScrollRight() {
  if (picksScrollAmount <= picksForYouSliders.scrollWidth - picksForYouSliders.clientWidth) {
    picksForYouSliders.scrollTo({
      top: 0,
      left: (picksScrollAmount += scrollPerClick),
      behavior: 'smooth'
    });
  }

}



// Lists of genre IDs
var trendingIds = [];
var picksIds = [];
var actionIds = [];
var comediesIds = [];
var scifiIds = [];
var thrillerIds = [];
var result1;
// document.cookie = "promo_shown=1; Max-Age=2600000; Secure";

// //
// var categoryNames = ["trending", "picksForYou", "action", "comedies", "scifi", "thriller"];

function openPreview(index, cat){
  var trailer = document.querySelector("." + cat + "-trailer");
  console.log(index);
  if(cat == "trending"){
    trailer.innerHTML = `<div class="trailer-div"><iframe id="yt-frame" class="trailer-window" width="200%" height="400" 
    src="https://www.youtube.com/embed/${trendingIds[index]}" frameborder="0" allowfullscreen> </iframe>
    <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('trending', ${index})" onkeypress="closePreview('trending', ${index})"><div id="mySpinner"></div></div>`
  } else if( cat == "picksForYou"){
    trailer.innerHTML = `<div class="trailer-div"><iframe class="trailer-window" width="200%" height="400" 
  src="https://www.youtube.com/embed/${picksIds[index]}" frameborder="0" allowfullscreen> </iframe>
  <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('picksForYou', ${index})" onkeypress="closePreview('picksForYou', ${index})"><div id="mySpinner"></div></div>` 

  } else if( cat == "action"){
    trailer.innerHTML = `<div class="trailer-div"><iframe class="trailer-window" width="200%" height="400" 
  src="https://www.youtube.com/embed/${actionIds[index]}" frameborder="0" allowfullscreen> </iframe>
  <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('action', ${index})" onkeypress="closePreview('action', ${index})"><div id="mySpinner"></div></div>` 
  } else if( cat == "scifi"){
    trailer.innerHTML = `<div class="trailer-div"><iframe class="trailer-window" width="200%" height="400" 
  src="https://www.youtube.com/embed/${scifiIds[index]}" frameborder="0" allowfullscreen> </iframe>
  <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('scifi', ${index})" onkeypress="closePreview('scifi', ${index})"><div id="mySpinner"></div></div>` 
  } else if(cat == "comedies"){
    trailer.innerHTML = `<div class="trailer-div"><iframe class="trailer-window" width="200%" height="400" 
  src="https://www.youtube.com/embed/${comediesIds[index]}" frameborder="0" allowfullscreen> </iframe>
  <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('comedies', ${index})" onkeypress="closePreview('comedies', ${index})"><div id="mySpinner"></div></div>` 
  } else {
    trailer.innerHTML = `<div class="trailer-div"><iframe class="trailer-window" width="200%" height="400" 
  src="https://www.youtube.com/embed/${thrillerIds[index]}" frameborder="0" allowfullscreen> </iframe>
  <img src="images/close.png" class="close" tabindex="0" onclick="closePreview('thriller', ${index})" onkeypress="closePreview('thriller', ${index})"><div id="mySpinner"></div></div>` 
  }
  trailer.focus();
  $('#mySpinner').addClass('spinner');
  setTimeout(removeSpinner, 1000); 
  $('mySpinner').innerHTML += '<p> Loading</p>';
}

function removeSpinner(){
  $('#mySpinner').removeClass('spinner');
}

function closePreview(cat, idx){
  idx = idx+1;
  var trailer = document.querySelector("." + cat + "-trailer");
  trailer.innerHTML = null;
  var currentFocus = document.querySelector("#" + cat + "-container-" + idx);
  currentFocus.focus();
}

// For showing dynamic content
async function showMoviesData() {
  const api_key = "bfdc13b76024a5fe59e568d2f3f2b5d4";
  result1 = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" +
      api_key 
  );
  
  result1 = result1.data.results;
  
  for(let i=0; i<result1.length; i++){
    var id = result1[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      trendingIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      trendingIds.push(ytId);
    }
  }

  result1.map(function (cur, index) {
    
    trendingSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="container" id="trending-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick=" event.preventDefault(); openPreview(${index}, 'trending') "><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div>
    `
    );
  });

  scrollPerClick = document.querySelector('.trending').clientWidth;

  $(window).resize(function() {
    scrollPerClick = document.querySelector('.trending').clientWidth;
  });

  var picksResults = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=14"
  );


  picksResults = picksResults.data.results;

  for(let i=0; i<picksResults.length; i++){
    var id = picksResults[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      picksIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      picksIds.push(ytId);
    }
    
  }

  picksResults.map(function (cur, index) {
    let number = document.querySelector('.number');
    picksForYouSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="number">${index + 1} </div><div class="container" id="picksForYou-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick="event.preventDefault(); openPreview(${index}, 'picksForYou')"><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div>
    `
    );
  });

  var result2 = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=28"
  );


  result2 = result2.data.results;

  for(let i=0; i<result2.length; i++){
    var id = result2[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      actionIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      actionIds.push(ytId);
    }
    
  }

  result2.map(function (cur, index) {
    actionSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="container" id="action-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick="event.preventDefault(); openPreview(${index}, 'action')"><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div>
    `
    );
  });


  var result3 = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=35"
  );

  result3 = result3.data.results;

  for(let i=0; i<result3.length; i++){
    var id = result3[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      comediesIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      comediesIds.push(ytId);
    }
    
  }
  console.log(comediesIds);

  result3.map(function (cur, index) {
    comediesSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="container" id="comedies-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick="event.preventDefault(); openPreview(${index}, 'comedies')"><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div>
    
    `
    );
  });

  var result4 = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=878"
  );

  result4 = result4.data.results;

  for(let i=0; i<result4.length; i++){
    var id = result4[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      scifiIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      scifiIds.push(ytId);
    }
    
  }

  result4.map(function (cur, index) {
    scifiSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="container" id="scifi-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick="event.preventDefault(); openPreview(${index}, 'scifi')"><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div> 
    `
    );
  });

  var result5 = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      api_key +
      "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=53"
  );

  result5 = result5.data.results;

  for(let i=0; i<result5.length; i++){
    var id = result5[i].id;
    var trailer = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + api_key + "&append_to_response=videos");
    if(trailer.data.videos.results[0] === undefined){
      thrillerIds.push(-1);
    } else {
      var ytId = trailer.data.videos.results[0].key;
      thrillerIds.push(ytId);
    }
    
  }

  result5.map(function (cur, index) {
    thrillerSliders.insertAdjacentHTML(
      "beforeend",
      `<div class="container" id="thriller-container-${index}" tabindex='0'> <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> 
      <div class="overlay"></div>
      <div class="button" id="button-${index}" onclick="event.preventDefault(); openPreview(${index}, 'thriller')"><a href="#" tabindex='0'> WATCH TRAILER </a></div>
    </div>`
    );
  });

}


