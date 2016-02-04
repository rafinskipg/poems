var poems = [];
var poemIndex;
var poemTitle, poemBody;
var prevButton, nextButton;
var currentPoemDisplayCounter, totalPoemsDisplayCounter;

function showPoem(index){
  if (index < 0){
    index = poems.length - 1;
  }else if(index >= poems.length){
    index = 0;
  }

  poemIndex = index;
  poemTitle.innerText = poems[index].querySelector('.title').innerText
  poemBody.innerHTML = poems[index].querySelector('.content').innerHTML
  clearStyles(poemBody);
  copyStyles(poems[index], poemBody);
  updatePoemInfo(poemIndex);
}

function clearStyles(element){
  element.removeAttribute('style')
}

function copyStyles(from, to){
  for (var i= from.style.length; i-->0;) {
    var name = from.style[i];
    to.style.setProperty(name,
        from.style.getPropertyValue(name),
        priority = from.style.getPropertyPriority(name)
    );
  }
}

function initCounter(){
  currentPoemDisplayCounter = document.querySelector('.at')
  totalPoemsDisplayCounter = document.querySelector('.total')
  totalPoemsDisplayCounter.innerText = poems.length;
}

function updatePoemInfo(index){
  var realValue = index + 1;
  currentPoemDisplayCounter.innerText = realValue;
}

function bindControlsActions(){
  prevButton = document.querySelector('.prev')
  nextButton = document.querySelector('.next')

  prevButton.onclick = function(){
    showPoem(poemIndex - 1);
  }

  nextButton.onclick = function(){
    showPoem(poemIndex + 1);
  }

  window.addEventListener('keyup', function(e){
    if(e.which === 37 || e.which === 39){
      if(e.which === 37){
        showPoem(poemIndex - 1);
      }else{
        showPoem(poemIndex + 1);
      }
    }
  });

}

window.onload = function(){
  poems = document.querySelectorAll('.poem');
  poemTitle = document.querySelector('.poem-title')
  poemBody = document.querySelector('.poem-text')
  
  initCounter();
  showPoem(0);
  bindControlsActions();
  console.log(poems);
}