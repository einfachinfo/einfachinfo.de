function classToggle() {
  const button = document.getElementById('toggle');
  this.classList.toggle('abitur');
  this.classList.toggle('studium');

  if (button.className === 'studium') {
    button.textContent = 'Studium';
  } else {
    button.textContent = 'Abitur';
  }
};
document.querySelector('#toggle').addEventListener('click', classToggle);

// Wähle alle Menüelemente, die ein Untermenü haben
const menuItems = document.querySelectorAll('#menu-container #menu > li');
const submenuItems = document.querySelectorAll('#menu-container #menu li ul li');

// Füge einen Klick-Listener zum Hauptmenü hinzu
menuItems.forEach(item => {
  const submenu = item.querySelector('ul');

  if (submenu) {
    item.addEventListener('click', function (event) {
      // Verhindere das Standard-Klickverhalten
      event.stopPropagation();

      // Toggle der Klasse 'active' für das Hauptmenü
      const isActive = item.classList.toggle('active');

      // Setze die Sichtbarkeit basierend auf dem aktiven Zustand
      submenu.style.display = isActive ? 'block' : 'none';

      // Schließe alle anderen Menüs
      menuItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherSubmenu = otherItem.querySelector('ul');
          if (otherSubmenu) {
            otherSubmenu.style.display = 'none';
          }
        }
      });
    });
  }
});

// Füge Klick-Listener für jedes Untermenü-Element hinzu
submenuItems.forEach(subItem => {
  subItem.addEventListener('click', function (event) {
    // Verhindere das Standard-Klickverhalten
    event.stopPropagation();

    // Schließe alle anderen Untermenüs
    submenuItems.forEach(otherSubItem => {
      if (otherSubItem !== subItem) {
        otherSubItem.classList.remove('active');
        const subSubmenu = otherSubItem.querySelector('.subsubmenu');
        if (subSubmenu) {
          subSubmenu.style.display = 'none';
        }
      }
    });

    // Öffne oder schließe das geklickte Untermenü
    subItem.classList.toggle('active');
    const subSubmenu = subItem.querySelector('.subsubmenu');
    if (subSubmenu) {
      subSubmenu.style.display = subItem.classList.contains('active') ? 'block' : 'none';
    }
  });
});

// Füge Klick-Listener zum Dokument hinzu, um das Menü und die Untermenüs zu schließen, wenn außerhalb geklickt wird
document.addEventListener('click', function () {
  menuItems.forEach(item => {
    item.classList.remove('active');
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });

  submenuItems.forEach(subItem => {
    subItem.classList.remove('active');
    const subSubmenu = subItem.querySelector('.subsubmenu');
    if (subSubmenu) {
      subSubmenu.style.display = 'none';
    }
  });
});

