
function RandomImage (name, src) {
  this.name = name;
  this.clicks = 0;
  this.src = src;
  this.totalViews = 0;
}

var totalClicks = 0;

var randomArray = [
  new RandomImage('bathroom', './img/bag.jpg'),
  new RandomImage('bathroom', './img/bathroom.jpg'),
  new RandomImage('banana', './img/banana.jpg'),
  new RandomImage('boots', './img/boots.jpg'),
  new RandomImage('breakfast', './img/breakfast.jpg'),
  new RandomImage('bubblegum', './img/bubblegum.jpg'),
  new RandomImage('chair', './img/cthulhu.jpg'),
  new RandomImage('chair', './img/chair.jpg'),
  new RandomImage('dragon', './img/dragon.jpg'),
  new RandomImage('dragon', './img/dog-duck.jpg'),
  new RandomImage('pen', './img/pen.jpg'),
  new RandomImage('pet', './img/pet.jpg'),
  new RandomImage('scissors', './img/scissors.jpg'),
  new RandomImage('shark', './img/shark.jpg'),
  new RandomImage('sweep', './img/sweep.jpg'),
  new RandomImage('tauntaun', './img/tauntaun.jpg'),
  new RandomImage('unicorn','./img/unicorn.jpg' ),
  new RandomImage('gif', './img/usb.gif'),
  new RandomImage('gif', './img/water-can.jpg'),
  new RandomImage('gif', './img/wine-glass.jpg')
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
  console.log(img1);

  randomArray[randomNumber1].totalViews++;


  var img2 = document.getElementById('img2');
  img2.setAttribute('data-index', randomNumber2);
  img2.src = randomArray[randomNumber2].src;
  console.log(img2);
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
  if (totalClicks >= 5) {
    for (var i=0;i<imgTags.length;i++) {
      imgTags[i].removeEventListener('click', handleClick);
      localStorage.setItem('completed', JSON.stringify(true));
      localStorage['data'] = JSON.stringify(randomArray);
      createText(randomArray);
    }
  }
  render();
  console.log(totalClicks);
}



// randomArray.forEach(function(RandomImage) {
//   clickArray.push(RandomImage.clicks);

// if (window.localStorage) {
//   localStorage.setItem('name', JSON.stringify(RandomImage[0].name));
// }
function createText(dataArray) {

  var newArray = [];
  var clickArray = [];
  
  dataArray.forEach(function(RandomImage) {
    newArray.push(RandomImage.name);
    clickArray.push(RandomImage.clicks);
  });
  
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: newArray,
      datasets: [{
        label: '# of Votes',
        data: clickArray,
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function loadData(){
  if (localStorage['completed'])
  {
    createText(JSON.parse(localStorage['data']));
  } else {
    render();
    imageClicks();
  }
}

loadData();


