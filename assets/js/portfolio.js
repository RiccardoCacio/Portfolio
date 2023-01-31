window.onload= function(){
var words = ['Ciao,', 'Hello,', 'Salut,', 'Hola,', 'Hej,', '你好,', '안녕, ', 'Здравствуйте,'];
var counter = 0;
setInterval(update_carousel_words, 1000);


document.getElementById("projectLinkOne").addEventListener("click", () => {
  document.getElementById("toggle").checked = false;
})
document.getElementById("projectLinkTwo").addEventListener("click", () => {
  document.getElementById("toggle").checked = false;
})
document.getElementById("projectLinkThree").addEventListener("click", () => {
  document.getElementById("toggle").checked = false;
})

function update_carousel_words(){
    var word = document.getElementById("carouselWords");
    
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
}


var myDate = new Date();
var hour = myDate.getHours();

function goodDay() {
  var goodMorningAndCo = document.getElementById("goodMorningAndCo"); 
  if (hour >= 5 && hour <= 12 ) {
        goodMorningAndCo.innerHTML = 'Good Morning';
      } else if (hour > 12 && hour <= 17) {
        goodMorningAndCo.innerHTML = 'Good Afternoon';
      } else if (hour >= 18 || hour <= 4 ) {
      goodMorningAndCo.innerHTML = 'Good Evening';
    } 
    
}
goodDay();
}


