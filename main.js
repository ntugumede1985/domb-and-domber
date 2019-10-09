function addNodeElement (newLi){
    document.querySelector('ul')
    const newLi = document.createElement('li');
    addNodeElement(newLi)
    document.appendChild(newLi)
}

function addNodeElement (newUl){
    document.querySelector('#lorem');
    const newUl = document.createElement('ul');
    addNodeElement(newUl)
    document.appendChild(newUl)
}

function returnText (addedText){
    const hello = document.createElement('li');
    hello.innerText = addedText;
    return hello;
}

function imageString (sourceImage){
    
}

//const newLi = document.createElement('li');
//addNodeElement(newLi)