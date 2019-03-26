
function RandomImage (name, imageAddress) {
  this.name = name; 
  this.clicks = 0; 
  this.imageAddress = imageAddress;
  this.totalViews = 0; 
}

var totalClicks = 0; 


var randomArray = [
  Bathroom = new RandomImage(' bathroom object ','./img/bathroom.jpg'),
  Banana = new RandomImage(' banana object ','./img/banana.jpg'),
  Boots = new RandomImage(' boots object ','./img/boots.jpg'),
  Breakfast = new RandomImage(' breakfast object ','./img/breakfast.jpg'),
  Bag = new RandomImage(' bag object ','./img/bag.jpg'),
  BubbleGum = new RandomImage(' bubbleGum object ','./img/bubblegum.jpg'),
  Chair = new RandomImage('chair object ','./img/chair.jpg'),
  Dog = new RandomImage('chair object ','./img/dog-duck.jpg')
];

function makeRandom(){
  return Math.floor(Math.random() * randomArray.length);
}

 function render() {
  // for (var i = 0; i < 3; i++) {
  var randomNumber1 = makeRandom();
  var randomNumber2 = makeRandom();
  console.log(randomArray[randomNumber2].imageAddress + randomNumber2 );
  while (randomNumber1 === randomNumber2) {
    randomNumber1 = makeRandom();
  }
  var img1 = document.createElement('img');
  img1.src = randomArray[randomNumber1].imageAddress;
  document.body.appendChild(img1);
  document.body.appendChild(document.createElement('IMG')).src = randomArray[randomNumber2].imageAddress;

  var randomNumber3 = makeRandom();
  console.log(randomArray[randomNumber1].imageAddress + randomNumber1); 
  while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2) {
    randomNumber3 = makeRandom();
  }

  document.body.appendChild(document.createElement('img')).src = randomArray[randomNumber3].imageAddress;
  console.log(randomArray[randomNumber3].imageAddress);
}


function handleClick() {
  console.log("user clicked!");
  totalClicks ++
  console.log(totalClicks);
}
var imgTags = document.getElementsByTagName('IMG');

function imageClicks () {
  for (var i=0;i<imgTags.length;i++) {
    imgTags[i].addEventListener("click", handleClick);
    // console.table(imgTags[i]);
  }
}

render();
imageClicks();




// var ImgClick = document.getElementsByTagName('img').addEventListener('click', handleClick);

