// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector(".nav_container nav");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  // 1. toggle en klasse på nav vja. vlasslist. toggle.
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menuShown i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    btn.textContent = "Luk";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "Menu";
  }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);
