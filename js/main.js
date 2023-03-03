const gridDom = document.getElementById('grid');

for(i=0; i < 100; i++){
    const quadratocorrente = creanuovoquadrato();

    quadratocorrente.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
    

    gridDom.append(quadratocorrente);
    quadratocorrente.append(i);
}


function creanuovoquadrato(){
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}