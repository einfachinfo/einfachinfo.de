const button = document.getElementById('toggle');

button.addEventListener('click', () => {
  if (button.textContent === 'Abitur') {
    console.log("test");
    button.textContent = 'Studium';
  } else {
    button.textContent = 'Abitur';
  }
});





const menuItems = document.querySelectorAll('#menu li');

menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    
/*    menuItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.id !== 'main-submenu') {
        otherItem.classList.remove('active');
      }
    }); */


    event.stopPropagation();
    
    item.classList.toggle('active');


  });
});

