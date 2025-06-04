const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const lifeFilter = document.getElementById('lifeFilter');

// Backup the original slides
const originalSlides = Array.from(document.querySelectorAll('.swiper-slide')).map(slide => slide.cloneNode(true));

// Swiper setup
const swiper = new Swiper('.wrapper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

function filterCards() {
  const searchValue = searchInput.value.toLowerCase();
  const priceValue = priceFilter.value;
  const lifeValue = lifeFilter.value;

  // Filter slides
  const filtered = originalSlides.filter(card => {
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const price = card.getAttribute('data-price');
    const life = card.getAttribute('data-life');

    const matchesSearch = name.includes(searchValue);
    const matchesPrice = !priceValue || price === priceValue;
    const matchesLife = !lifeValue || life === lifeValue;

    return matchesSearch && matchesPrice && matchesLife;
  });

  // Replace Swiper slides
  swiper.removeAllSlides();
  swiper.appendSlide(filtered);
}

searchInput.addEventListener('input', filterCards);
priceFilter.addEventListener('change', filterCards);
lifeFilter.addEventListener('change', filterCards);
