function newNodeChild (newLi){
    const unOrderedList = document.querySelector('ul');
    unOrderedList.appendChild(newLi)
}

function ipsumsChild (newUl){
    const ipsumDiv = document.querySelector('#lorem')
    ipsumDiv.appendChild(newUl)
}

function returnText (addedText){
    const hello = document.createElement('li');
    hello.innerText = addedText;
    return hello;
}

function imageString (a,b){
    const a = document.createElement('img');
    const b = 'newSource';
    imageString(a,b)
}

function dosElements(){

}

function tagIt (){

}

function () {
    
}

// newNodeChild(returnText('null and void'))
// const newLine = returnText('I\'m a new line!')
// newNodeChild(newLine)
// newNodeChild(returnText('apples'))
const newLi = returnText ('good');
const secondLi = returnText ('morning');
const thirdLi = returnText ('class');
newNodeChild(newLi)
newNodeChild(secondLi)
newNodeChild(thirdLi)

// const newImage = document.createElement('img');
// someFunctionName(newImage, 'www.dinoimages.com/dino.jpg')

//const newLi = document.createElement('li');
//addNodeElement(newLi)