
const playButton = document.querySelector('.play-button');
const defaultText = document.querySelector('.default-text');
const grid = document.querySelector('.grid');


// click su Play
playButton.addEventListener('click', function(){

  //scompare testo, compare griglia, reset griglia
  defaultText.classList.add('d-none');
  grid.classList.remove('d-none');
  grid.innerHTML="";


  let selectedDifficulty = document.getElementById('difficulty').value;
  console.log(selectedDifficulty);
  
  // creazione griglia in base alla difficoltà
  if(selectedDifficulty == 1){

    for(i = 0 ; i < 100; i++){
      const square = createSquares(grid);
      square.classList.add('easy');  
      square.innerHTML = i + 1;  

      square.addEventListener('click', function(){
        this.classList.add('clicked');    
      });    
    };

    }else if(selectedDifficulty == 2){

    for(i = 0 ; i < 81; i++){
      const square = createSquares(grid);
      square.classList.add('hard');
      square.innerHTML = i + 1;  

      square.addEventListener('click', function(){
        this.classList.add('clicked');    
      });    
    };

  }else{

    for(i = 0 ; i < 49; i++){
      const square = createSquares(grid);
      square.classList.add('crazy');
      square.innerHTML = i + 1;  
      console.log(square);

      square.addEventListener('click', function(){
        this.classList.add('clicked');    
      });    
    };

  };

});



/**
 * Generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquares (target){

  const square = document.createElement('div');
  square.className = 'square';
  
  target.append(square);

  return square;
}