document.querySelectorAll('.xp-section').forEach(section => {
  section.addEventListener('click', (event) => {
    const period = event.target.getAttribute('data-period');
    scrollToPeriodSmooth(period);
  });
});

function scrollToPeriodSmooth(period) {
  const targetElement = document.getElementById(period);
  if (!targetElement) return;

  // Vypočítáme vzdálenost do cíle
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // Délka trvání animace
  const duration = 800; // v milisekundách (např. 800 ms = 0.8 sekundy)
  let startTime = null;

  // Animace hladkého posunu
  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Funkce pro hladké zrychlení a zpomalení (easing)
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Nastavíme výchozí stav při načítání stránky
document.addEventListener('DOMContentLoaded', function() {
var datumElements = document.querySelectorAll('.datum');
datumElements.forEach(function(datumElement) {
    datumElement.style.display = 'none';
});
});

function zmenText() {
var datumElements = document.querySelectorAll('.datum');
datumElements.forEach(function(datumElement) {
    if (datumElement.style.display === 'none') {
        datumElement.style.display = 'inline';
    } else {
        datumElement.style.display = 'none';
    }
});
}


window.addEventListener('scroll', function() {
  const imageBackground = document.querySelector('.image-background');
  const scrollPosition = window.scrollY;

  // Tento bod určuje, kdy se obrázek na pozadí přestane zobrazovat a začne bílé pozadí
  const changePoint = window.innerHeight / 2;

  if (scrollPosition >= changePoint) {
    imageBackground.style.backgroundPosition = 'center bottom'; // Posun pozadí obrázku, aby byl vidět pouze horní polovina
    imageBackground.classList.add('white-bg'); // Po dosažení bodu se přidá bílý background
  } else {
    imageBackground.style.backgroundPosition = 'center top'; // Udržuje obrázek fixovaný v horní části
    imageBackground.classList.remove('white-bg'); // Odstraní bílý background
  }
});
