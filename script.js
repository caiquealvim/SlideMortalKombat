const images = [
{'id' : '1', 'url' : './img/gelo.jpg'},
{'id' : '2', 'url' : './img/face.png'},
{'id' : '3', 'url' : './img/VS.jpg'},
{'id' : '4', 'url' : './img/mortal.jpg'},
{'id' : '5', 'url' : './img/noob.jpg'},
{'id' : '6', 'url' : './img/aqui.jpg'},
{'id' : '7', 'url' : './img/sub.webp'},
{'id' : '8', 'url' : './img/tree.webp'}
]

const container   = document.querySelector('#container-items');

const loadImages = (images,container) => {
    images.forEach(image => {
    container.innerHTML += `
        <div class ='item'>
        <img src = '${image.url}'>
        </div>
    `      
    });




}

loadImages ( images,container);
let items = document.querySelectorAll('.item');

const previous = () =>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const next = () =>{
    const lastIntem = items [items.length -1];
    container.insertBefore (lastItem, items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click',previous);
document.querySelector('#next').addEventListener('click',previous);