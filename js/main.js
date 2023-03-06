const gridDom = document.getElementById('grid');
const btnDom = document.getElementById('action-button')

btnDom.addEventListener('click', function(){

    const difficoltà = document.getElementById('selezione-difficolta');
    const dfc = difficoltà.value;
    var nsquare;

    switch(dfc){
        case 'easy':
        var nsquare = 100;
        break;
        
        case 'hard':
        var nsquare = 81;
        break;

        case 'insane':
        var nsquare = 49;
        break;

    }
         
    console.log(nsquare);
    
    
    gridDom.innerHTML = "";
    creagriglia(nsquare);
   
});
    

    
function creanuovoquadrato(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}


function creagriglia (nsquare){
    for(i=0; i < nsquare; i++){
        const quadratocorrente = creanuovoquadrato();
        
            quadratocorrente.addEventListener('click', function() {
            this.classList.toggle('clicked');
            console.log(quadratocorrente.innerHTML);
           
        });

        gridDom.append(quadratocorrente);
        quadratocorrente.append(i);
            
     }
}; 
