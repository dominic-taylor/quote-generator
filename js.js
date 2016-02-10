function randomQuote() {
  var canvas = document.getElementById('content');
  //var title = document.getElementById('heading');
  var back = document.getElementById('footer');
  var choice = randNum();
  var title = document.getElementById('h1');
 // title.style.color = 'red';
 // title.innerHTML. = ''
  switch (choice) {
    case 1:

      console.log(' 1');
      canvas.innerHTML = '"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it". - Maurice Switzer'
      break;
    case 2: 
      console.log(2);
      canvas.innerHTML = ' "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car." - Bob Monkhouse'
      break; 
    case 3: 
      console.log(3);
      canvas.innerHTML = '"I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness." - Emo Philips'
      break; 
    case 4:
      console.log(4);
      canvas.innerHTML = '"The trouble with eating Italian food is that five or six days later, you’re hungry again." - George Miller'
      break;
    case 5:
      console.log(5);
      canvas.innerHTML = '"It is the mark of an educated mind to be able to entertain a thought without accepting it." - Aristotle'
      break;
    case 6:
      console.log(6);
      canvas.innerHTML = '"Done is better than perfect." - Sheryl Sandberg'
      break;
    case 7:
      console.log(7);
      canvas.innerHTML = '"There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there." - Indira Gandhi'
      break;
    case 8:
      console.log(8);
      canvas.innerHTML = ' "Many receive advice, only the wise profit from it." - Harper Lee '
      break; 
    case 9:
      console.log(9);
      canvas.innerHTML = '"Men do not differ much about what things they will call evils; they differ enormously about what evils they will call excusable." - G.K Chesterton'
      break;
    case 10:
      console.log(10);
      canvas.innerHTML = '"There is nothing so annoying as to have two people go right on talking when you’re interrupting." - Mark Twain'
      break;           
    default:
      console.log('default');
  } 
}

function randNum(){
  var images = 10;
  var number = Math.floor(Math.random(1) * images) + 1;
  console.log(number);
  return number;
}
