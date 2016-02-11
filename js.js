function randomQuote() {
  var canvas = document.getElementById('content');
  var bg = document.getElementById('main');
  var back = document.getElementById('footer');
  var choice = randNum();
  var title = document.getElementById('heading');
  
  
  switch (choice) {
      case 1:
      title.style.color = 'red';
      canvas.innerHTML = '"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it". - Maurice Switzer'
      break;
    case 2: 
       title.style.color = 'green';
      canvas.innerHTML = ' "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car." - Bob Monkhouse'
      break; 
    case 3: 
       title.style.color = 'blue';
      canvas.innerHTML = '"I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness." - Emo Philips'
      break; 
    case 4:
      title.style.color = 'purple';
       canvas.innerHTML = '"The trouble with eating Italian food is that five or six days later, you’re hungry again." - George Miller'
      break;
    case 5:
       title.style.color = 'orange';
      canvas.innerHTML = '"It is the mark of an educated mind to be able to entertain a thought without accepting it." - Aristotle'
      break;
    case 6:
       title.style.color = 'black';
      canvas.innerHTML = '"Done is better than perfect." - Sheryl Sandberg'
      break;
    case 7:
       title.style.color = 'pink';
      canvas.innerHTML = '"There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there." - Indira Gandhi'
      break;
    case 8:
       title.style.color = 'yellow';
      canvas.innerHTML = ' "Many receive advice, only the wise profit from it." - Harper Lee '
      break; 
    case 9:
       title.style.color = 'grey';
      canvas.innerHTML = '"Men do not differ much about what things they will call evils; they differ enormously about what evils they will call excusable." - G.K Chesterton'
      break;
    case 10:
       title.style.color = 'brown';
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
