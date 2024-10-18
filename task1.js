function flipCard(button) {
  const cardContent = button.closest('.content');
  cardContent.style.transform = cardContent.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  button.innerText = button.innerText === 'Details' ? 'Back' : 'Details';
}
