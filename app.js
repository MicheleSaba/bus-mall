
function RandomImage (name, imageAddress) {
  this.name = name; 
  // this.clicks = clicks; 
  this.imageAddress = imageAddress;
  // this.totalViews = totalViews; 
}

 //function totalViews() {

// }



// var totalClicks = 0; 



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
RandomImage.prototype.render = function() {
  // for (var i = 0; i < 3; i++) {
  var j = Math.floor(Math.random() * randomArray.length);
  document.body.appendChild(document.createElement('IMG')).src = randomArray[j].imageAddress;
  var k = Math.floor(Math.random() * randomArray.length);
  console.log(randomArray[j].imageAddress + j );
  if (k === j && k !== randomArray.length) {
    k ++;
  }
  else if (k === j && k !== randomArray.length[0]) {
    k --;
  }
  else {
    k + 2
  }
  document.body.appendChild(document.createElement('IMG')).src = randomArray[k].imageAddress;
  var l = Math.floor(Math.random() * randomArray.length);
  console.log(randomArray[k].imageAddress + k); 
  if (l === k || l === j && l !== randomArray.length) {
    l ++;
  }
  else if (l === j || l === k && l !== randomArray.length[0]) {
    l --; 
  }
  else {
    l = 0;
  }
  document.body.appendChild(document.createElement('IMG')).src = randomArray[l].imageAddress;
  console.log(randomArray[l].imageAddress + l);
}


function handleClick() {
  console.log('hello');
}

function imageClicks () {
  var imgTags = document.getElementsByTagName("IMG");
  for (var i=0;i<imgTags.length;i++) {
    imgTags[i].addEventListener("click", handleClick());
  }
}



Bathroom.render();
imageClicks();




// var ImgClick = document.getElementsByTagName('img').addEventListener('click', handleClick);

