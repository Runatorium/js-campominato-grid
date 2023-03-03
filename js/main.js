const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')
let play = 0;
let grid=0;

btnDom.addEventListener('click', function(){
    
    if(grid<1){
    for(i=0; i < 100; i++){
        const quadratocorrente = creanuovoquadrato();
        
            quadratocorrente.addEventListener('click', function() {
            this.classList.toggle('clicked');
            console.log(quadratocorrente.innerHTML);
           
        });

        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            

     }
    }else{
        console.log('grliglia già generata')
    }
    grid++
});
    

    
function creanuovoquadrato(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}
