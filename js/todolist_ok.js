var ul = document.getElementById('list'),
    removeAll = document.getElementById('removeAll'),
    add = document.getElementById('add');
    count = document.getElementById('count');

function addLi(targetUl) {
  var inputText = document.getElementById('text').value,
      li = document.createElement('li'),
      textNode = document.createTextNode(inputText + ' '),
      startButton = document.createElement('button');
      removeButton = document.createElement('button');
      textCountdown = document.createElement('div');

  if (inputText.split(' ').join('').length === 0) {
//     Check for empty inputs (only spaces are not enough)
    alert('No input');
    return false;
  }

  startButton.className = 'start';
  textCountdown.id = 'countDowndiv';
  startButton.innerHTML = ' START!';
  //startButton.setAttribute('onclick', 'start("'+inputText+'");');
  startButton.setAttribute('onclick', 'start();');
  removeButton.className = 'removeMe';
  removeButton.innerHTML = ' DONE!';
  removeButton.setAttribute('onclick', 'removeMe(this);');


  li.appendChild(textNode);
  li.appendChild(startButton);
  li.appendChild(removeButton);
  li.appendChild(textCountdown);

  targetUl.appendChild(li);
}

function start() {
  countdown(document.getElementById('text2').value,1,1);
  //document.getElementById('cd').innerHTML += "<div id='"+id+"'></div>";
  alert("start");
  //document.getElementById('cd').appendChild('cd');
  document.getElementById('cd').childNodes.length+1;
}

function countdown(minuti, secondi, msecondi) {
  //console.log(minuti+secondi+msecondi);
  if(minuti == 0 && secondi == 0 && msecondi == 0) {
    alert("La pappa è pronta!!!");
  }

  if(msecondi <= 0) {
    msecondi = 9;
    secondi--;
  }
  if(!minuti == 0 && secondi == 0 && msecondi == 1) {
    secondi = 59;
    msecondi = 9;
    minuti--;
  }

  if(secondi <= -1) {
    msecondi = 0;
    secondi++;
  } else {
    msecondi--;

//stampa a video il countdown
document.getElementById("countDowndiv").innerHTML = minuti + " : " + secondi + " : " + msecondi;
setTimeout("countdown("+minuti+", "+secondi+", "+msecondi+")", 100);
}
}

function removeMe(item){
  var parent = item.parentElement;
  document.getElementById("cd").innerHTML = '';
  parent.parentElement.removeChild(parent);

}

add.onclick = function () {
  addLi(ul);
  //countdown(document.getElementById('text2').value,1,1);
};

removeAll.onclick = function () {
  ul.innerHTML = '';
  document.getElementById("cd").innerHTML = '';
};
