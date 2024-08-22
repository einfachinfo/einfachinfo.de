const button = document.getElementById('toggle');

button.addEventListener('click', () => {
  if (button.textContent === 'Abitur') {
    console.log("test");
    button.textContent = 'Studium';
  } else {
    button.textContent = 'Abitur';
  }
});