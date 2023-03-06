const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')

btnDom.addEventListener('click', function(){
    
    gridDom.innerHTML = "";
    
    creagriglia();
   
});
    

    
function creanuovoquadrato(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}


function creagriglia (){
    for(i=0; i < 100; i++){
        const quadratocorrente = creanuovoquadrato();
        
            quadratocorrente.addEventListener('click', function() {
            this.classList.toggle('clicked');
            console.log(quadratocorrente.innerHTML);
           
        });

        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            
     }
}; 
