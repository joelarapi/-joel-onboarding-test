const boxContainer = document.querySelector('.box-container');
const loadMoreButton = document.getElementById('load-more');
const boxCount = 20; 
let currentIndex = 1;
const batchSize = 4; 


function createBox() {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = `Box ${currentIndex}`;
  boxContainer.appendChild(box);
  currentIndex++;
}


function loadMoreBoxes() {
  const endIndex = currentIndex + batchSize;
  for (let i = currentIndex; i < endIndex && i <= boxCount; i++) {
    createBox();
  }
  currentIndex = endIndex;

 
  if (currentIndex > boxCount) {
    loadMoreButton.style.display = 'none';
  }
}


loadMoreBoxes();


loadMoreButton.addEventListener('click', loadMoreBoxes);