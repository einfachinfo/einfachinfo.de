const button = document.getElementById('toggle');

button.addEventListener('click', () => {
  if (button.textContent === 'Abitur') {
    console.log("test");
    button.textContent = 'Studium';
  } else {
    button.textContent = 'Abitur';
  }
});



const submenus = document.querySelectorAll('#menu ul');

submenus.forEach(submenu => {
  let timeout;

  submenu.addEventListener('mouseenter', () => {
    submenu.style.opacity = 1;
    clearTimeout(timeout); // Check if timeout exists before clearing
  });

  submenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      submenu.style.opacity = 0;
    }, 500); // Adjusted delay to 500ms
  });
});