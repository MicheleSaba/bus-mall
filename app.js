
function RandomImage (name) {
  this.name = name;
  this.clicks = 0;
  this.src = '/img/' + name + '.jpg';
  this.totalViews = 0;
}

var totalClicks = 0; 

var randomArray = [
  new RandomImage('bathroom'),
  new RandomImage('banana'),
  new RandomImage('boots'),
  new RandomImage('breakfast'),
  new RandomImage('bag'),
  new RandomImage('bubbleGum'),
  new RandomImage('chair'),
];

function makeRandom(){
  return Math.floor(Math.random() * randomArray.length);
}

function render() {
  var randomNumber1 = makeRandom();
  var randomNumber2 = makeRandom();
  while (randomNumber1 === randomNumber2) {
    randomNumber1 = makeRandom();
  }
 
  var img1 = document.getElementById('img1');
  img1.setAttribute('data-index', randomNumber1);
  img1.src = randomArray[randomNumber1].src;
  
  randomArray[randomNumber1].totalViews++;


  var img2 = document.getElementById('img2');
  img2.setAttribute('data-index', randomNumber2);
  img2.src = randomArray[randomNumber2].src;
  
  var randomNumber3 = makeRandom();
  while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2) {
    randomNumber3 = makeRandom();
  }
  var img3 = document.getElementById('img3');
  img3.setAttribute('data-index', randomNumber3);
  img3.src = randomArray[randomNumber3].src;
}

var imgTags = document.getElementsByTagName('img');

function imageClicks () {
  for (var i=0;i<imgTags.length;i++) {
    imgTags[i].addEventListener('click', handleClick);
  }
}

function handleClick(event) {
  randomArray[event.target.getAttribute('data-index')].clicks++;
  totalClicks ++;
  if (totalClicks >= 10) {
    createText();
    for (var i=0;i<imgTags.length;i++) {
      imgTags[i].removeEventListener('click', handleClick);
    }
  }
  render();
  console.log(totalClicks);
}




function createText() {
  var unordered = document.createElement('ul');
  for(var i = 0; i < randomArray.length; i++) {
    var data = document.createElement('li');
    data.textContent = randomArray[i].clicks + randomArray[i].name ;
    unordered.appendChild(data);
  }
  document.body.appendChild(unordered);
}

render();
imageClicks();




// var ImgClick = document.getElementsByTagName('img').addEventListener('click', handleClick);

