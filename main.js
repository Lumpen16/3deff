const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('mousemove', (event) => {
    const cardItem = card.querySelector('.card-item');
    const halfOfCardHeight = cardItem.offsetHeight / 2;
    cardItem.innerText = `${event.offsetX} ${event.offsetY}`;
    cardItem.style.transform =  `rotateX(${-(event.offsetY - halfOfCardHeight)/10}deg) rotateY(${(event.offsetX - halfOfCardHeight)/10}deg)`
}))

cards.forEach(card => card.addEventListener('mouseout', () => {
    const cardItem = card.querySelector('.card-item');
    cardItem.style.transform = `rotate(0)`
}))

 