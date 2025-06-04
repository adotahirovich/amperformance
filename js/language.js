// Language data
const translations = {
  bs: {
    currency: 'KM',
    nav: {
      chooseCar: 'Izaberi Auto',
      about: 'O Nama',
      contact: 'Kontakt',
      cart: 'Korpa'
    },
    home: {
      welcome: 'Dobrodošli u AMPerformance',
      subtitle: 'Vaš partner za vrhunske auto dijelove i tuning',
      searchParts: 'Pretraži Dijelove',
      popularCategories: 'Popularne Kategorije',
      categories: {
        exhaust: 'Izduvni Sistemi',
        exterior: 'Eksterijer',
        interior: 'Interijer'
      },
      supportedBrands: 'Podržani Brendovi'
    },
    footer: {
      contact: 'Kontakt',
      quickNav: 'Brza Navigacija',
      followUs: 'Pratite Nas',
      rights: 'Sva prava zadržana'
    },
    cart: {
      empty: 'Vaša korpa je prazna',
      subtotal: 'Ukupno',
      shipping: 'Poštarina',
      total: 'Ukupno sa poštarinom',
      checkout: 'Nastavite na Checkout',
      addToCart: 'Dodaj u Korpu',
      remove: 'Ukloni'
    },
    contact: {
      title: 'Kontaktirajte Nas',
      subtitle: 'Tu smo da odgovorimo na sva vaša pitanja',
      workHours: 'Radno Vrijeme',
      contactInfo: 'Kontakt Informacije',
      form: {
        name: 'Ime i Prezime',
        subject: 'Predmet',
        message: 'Poruka',
        send: 'Pošalji Poruku'
      },
      location: 'Naša Lokacija'
    },
    about: {
      title: 'O Nama',
      subtitle: 'Vaš pouzdani partner za auto performanse od 2020. godine',
      ourStory: 'Naša Priča',
      ourMission: 'Naša Misija',
      whyUs: 'Zašto AMPerformance',
      partners: 'Naši Partneri'
    }
  },
  en: {
    currency: 'USD',
    nav: {
      chooseCar: 'Choose Car',
      about: 'About Us',
      contact: 'Contact',
      cart: 'Cart'
    },
    home: {
      welcome: 'Welcome to AMPerformance',
      subtitle: 'Your partner for premium auto parts and tuning',
      searchParts: 'Search Parts',
      popularCategories: 'Popular Categories',
      categories: {
        exhaust: 'Exhaust Systems',
        exterior: 'Exterior',
        interior: 'Interior'
      },
      supportedBrands: 'Supported Brands'
    },
    footer: {
      contact: 'Contact',
      quickNav: 'Quick Navigation',
      followUs: 'Follow Us',
      rights: 'All rights reserved'
    },
    cart: {
      empty: 'Your cart is empty',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      total: 'Total with shipping',
      checkout: 'Proceed to Checkout',
      addToCart: 'Add to Cart',
      remove: 'Remove'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to answer all your questions',
      workHours: 'Working Hours',
      contactInfo: 'Contact Information',
      form: {
        name: 'Full Name',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      },
      location: 'Our Location'
    },
    about: {
      title: 'About Us',
      subtitle: 'Your trusted partner for auto performance since 2020',
      ourStory: 'Our Story',
      ourMission: 'Our Mission',
      whyUs: 'Why AMPerformance',
      partners: 'Our Partners'
    }
  }
};

// Exchange rates
const exchangeRates = {
  KM_TO_USD: 0.55 // 1 KM = 0.55 USD
};

// Current language
let currentLang = localStorage.getItem('language') || 'bs';

// Update currency display
function updatePrices() {
  const priceElements = document.querySelectorAll('.price');
  priceElements.forEach(element => {
    const priceText = element.textContent;
    const price = parseFloat(priceText);
    
    if (currentLang === 'en') {
      const usdPrice = (price * exchangeRates.KM_TO_USD).toFixed(2);
      element.textContent = `${usdPrice} USD`;
    } else {
      const kmPrice = (price / exchangeRates.KM_TO_USD).toFixed(2);
      element.textContent = `${kmPrice} KM`;
    }
  });
}

// Update text content based on language
function updateContent() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const keys = key.split('.');
    let translation = translations[currentLang];
    
    for (const k of keys) {
      translation = translation[k];
    }
    
    if (translation) {
      element.textContent = translation;
    }
  });
}

// Language switcher click handler
function handleLanguageSwitch(event) {
  const lang = event.target.getAttribute('data-lang');
  if (lang && lang !== currentLang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active states
    document.querySelectorAll('.language-selector a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-lang') === lang);
    });
    
    updateContent();
    updatePrices();
  }
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', () => {
  // Set up language switcher links
  const languageLinks = document.querySelectorAll('.language-selector a');
  languageLinks.forEach(link => {
    if (!link.getAttribute('data-lang')) {
      link.setAttribute('data-lang', link.textContent.toLowerCase());
    }
    link.addEventListener('click', handleLanguageSwitch);
  });
  
  // Set initial active state
  document.querySelector(`[data-lang="${currentLang}"]`)?.classList.add('active');
  
  // Initial content update
  updateContent();
  updatePrices();
});