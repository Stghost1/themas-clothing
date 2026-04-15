/* ═══════════════════════════════════════════════════════════
   THEMAS — High-End Fashion House
   Interactions & Animations
   ═══════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  // ── Product Data ──
  const PRODUCTS = [
    {
      id: 1,
      brand: 'THEMAS Couture',
      name: 'Silk Draped Evening Gown',
      priceRetail: '₦185,000',
      priceWholesale: '₦95,000',
      desc: 'A masterfully crafted evening gown in pure silk crepe de chine, featuring an asymmetric drape detail, hand-finished seams, and a flattering bias cut. Perfect for galas, soirées, and unforgettable evenings.',
      image: 'assets/images/womenswear_collection.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      brand: 'THEMAS Men',
      name: 'Tailored Linen Blazer',
      priceRetail: '₦125,000',
      priceWholesale: '₦68,000',
      desc: 'Impeccably tailored in premium Italian linen, this single-breasted blazer features a half-canvas construction, mother-of-pearl buttons, and a subtly structured shoulder. Ideal for warm-weather sophistication.',
      image: 'assets/images/menswear_collection.png',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      brand: 'THEMAS Street',
      name: 'Urban Utility Jacket',
      priceRetail: '₦52,500',
      priceWholesale: '₦32,000',
      desc: 'Streetwear meets function — this utility jacket features water-resistant cotton-nylon blend, magnetic closure pockets, and an adjustable drawcord waist. A modern staple for the urban explorer.',
      image: 'assets/images/streetwear_casual.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 4,
      brand: 'THEMAS Accessories',
      name: 'Artisan Leather Tote',
      priceRetail: '₦98,000',
      priceWholesale: '₦55,000',
      desc: 'Handcrafted from full-grain vegetable-tanned leather, this generous tote features reinforced stitching, brass hardware, and an internal organizer compartment. Ages beautifully with use.',
      image: 'assets/images/accessories_collection.png',
      sizes: ['One Size']
    },
    {
      id: 5,
      brand: 'THEMAS Kids',
      name: 'Heritage Dungarees Set',
      priceRetail: '₦35,000',
      priceWholesale: '₦18,000',
      desc: 'A playful yet refined dungarees set in organic cotton, featuring adjustable straps, snap-button details, and a matching striped tee. Designed for comfort and effortless style.',
      image: 'assets/images/kids_collection.png',
      sizes: ['2Y', '3Y', '4Y', '5Y', '6Y']
    },
    {
      id: 6,
      brand: 'THEMAS Fabrics',
      name: 'Premium Ankara Fabric (6 yards)',
      priceRetail: '₦28,000',
      priceWholesale: '₦12,500',
      desc: 'Vibrant, richly printed Ankara in 100% combed cotton — 6-yard cut for maximum versatility. Bold geometric patterns with excellent colour fastness. Perfect for both traditional and contemporary designs.',
      image: 'assets/images/fabrics_textiles.png',
      sizes: ['6 yards']
    },
    {
      id: 7,
      brand: 'THEMAS Couture',
      name: 'Cashmere Wrap Coat',
      priceRetail: '₦245,000',
      priceWholesale: '₦140,000',
      desc: 'Luxuriously soft double-face cashmere wrap coat with a waterfall collar, detachable belt, and fully lined interior. The ultimate statement piece for transitional seasons.',
      image: 'assets/images/womenswear_collection.png',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 8,
      brand: 'THEMAS Men',
      name: 'Merino Wool Turtleneck',
      priceRetail: '₦56,000',
      priceWholesale: '₦35,000',
      desc: 'Fine-gauge merino wool turtleneck with a sculpted ribbed collar and cuffs. Lightweight yet warm, with a sleek silhouette that layers effortlessly under tailoring or stands alone with poise.',
      image: 'assets/images/menswear_collection.png',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 9,
      brand: 'THEMAS Couture',
      name: 'Embroidered Midi Skirt',
      priceRetail: '₦72,000',
      priceWholesale: '₦38,000',
      desc: 'A beautifully embroidered midi skirt in cotton-silk blend, featuring intricate floral motifs along the hem, a concealed zip closure, and a flattering A-line silhouette. Pairs effortlessly from brunch to evening.',
      image: 'assets/images/womenswear_collection.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 10,
      brand: 'THEMAS Men',
      name: 'Double-Breasted Wool Overcoat',
      priceRetail: '₦210,000',
      priceWholesale: '₦115,000',
      desc: 'Commanding presence in premium virgin wool — this double-breasted overcoat features peak lapels, a structured silhouette, and a satin-lined interior. Built for winters that demand elegance.',
      image: 'assets/images/menswear_collection.png',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 11,
      brand: 'THEMAS Street',
      name: 'Oversized Graphic Hoodie',
      priceRetail: '₦33,750',
      priceWholesale: '₦22,000',
      desc: 'Heavy-weight 400gsm French terry hoodie with oversized fit, dropped shoulders, and screen-printed graphic art by Lagos-based illustrators. Kangaroo pocket, ribbed cuffs, adjustable drawcord hood.',
      image: 'assets/images/streetwear_casual.png',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 12,
      brand: 'THEMAS Accessories',
      name: 'Gold-Plated Chain Necklace Set',
      priceRetail: '₦42,000',
      priceWholesale: '₦22,000',
      desc: 'A curated set of three layering necklaces in 18K gold-plated stainless steel — a delicate choker, a pendant chain, and a chunky link necklace. Tarnish-resistant and hypoallergenic.',
      image: 'assets/images/accessories_collection.png',
      sizes: ['One Size']
    },
    {
      id: 13,
      brand: 'THEMAS Kids',
      name: 'Puffed Sleeve Cotton Dress',
      priceRetail: '₦25,500',
      priceWholesale: '₦14,000',
      desc: 'An adorable puffed-sleeve dress in breathable organic cotton with a Peter Pan collar, mother-of-pearl buttons, and a full skirt. Fully lined for all-day comfort.',
      image: 'assets/images/kids_collection.png',
      sizes: ['2Y', '3Y', '4Y', '5Y', '6Y', '8Y']
    },
    {
      id: 14,
      brand: 'THEMAS Couture',
      name: 'Structured Power Blazer',
      priceRetail: '₦135,000',
      priceWholesale: '₦72,000',
      desc: 'A sharp, architecturally tailored blazer in stretch wool-crepe — padded shoulders, nipped waist, and flap pockets. The confidence piece every wardrobe deserves.',
      image: 'assets/images/womenswear_collection.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 15,
      brand: 'THEMAS Street',
      name: 'Cargo Jogger Pants',
      priceRetail: '₦38,000',
      priceWholesale: '₦20,000',
      desc: 'Relaxed-fit cargo joggers in ripstop cotton with elasticated cuffs, multiple utility pockets with snap-buttons, and an adjustable drawstring waist. Built for movement, styled for the streets.',
      image: 'assets/images/streetwear_casual.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 16,
      brand: 'THEMAS Fabrics',
      name: 'Luxury Jacquard Fabric (6 yards)',
      priceRetail: '₦45,000',
      priceWholesale: '₦22,000',
      desc: 'Exquisite jacquard-woven fabric with an intricate damask pattern — heavy drape, rich sheen, and dimensional texture. Ideal for evening wear, upholstery, and statement garments.',
      image: 'assets/images/fabrics_textiles.png',
      sizes: ['6 yards']
    }
  ];

  // Mega dropdown image mapping
  const DROPDOWN_IMAGES = {
    womenswear: { src: 'assets/images/womenswear_collection.png', label: 'Womenswear' },
    menswear: { src: 'assets/images/menswear_collection.png', label: 'Menswear' },
    streetwear: { src: 'assets/images/streetwear_casual.png', label: 'Streetwear' },
    kids: { src: 'assets/images/kids_collection.png', label: 'Kids' },
  };





  /* ═══════════════════════════════════
     NAVIGATION
     ═══════════════════════════════════ */

  function initNavigation() {
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const megaDropdown = document.getElementById('megaDropdown');
    const megaPreviewImg = document.getElementById('megaPreviewImg');
    const megaPreviewLabel = document.getElementById('megaPreviewLabel');
    let dropdownTimeout;

    // Scroll — add/remove scrolled class
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });

          // Close mobile nav if open
          closeMobileNav();
        }
      });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { rootMargin: '-40% 0px -60% 0px' };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const matchingLinks = document.querySelectorAll(`.nav__link[data-section="${entry.target.id}"]`);
          matchingLinks.forEach(l => l.classList.add('active'));
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Mega Dropdown
    navLinks.forEach(link => {
      const dropdownKey = link.dataset.dropdown;
      if (!dropdownKey) return;

      link.addEventListener('mouseenter', () => {
        clearTimeout(dropdownTimeout);
        const data = DROPDOWN_IMAGES[dropdownKey];
        if (data) {
          megaPreviewImg.src = data.src;
          megaPreviewLabel.textContent = data.label;
        }
        megaDropdown.classList.add('open');
        megaDropdown.setAttribute('aria-hidden', 'false');
      });

      link.addEventListener('mouseleave', () => {
        dropdownTimeout = setTimeout(() => {
          megaDropdown.classList.remove('open');
          megaDropdown.setAttribute('aria-hidden', 'true');
        }, 200);
      });
    });

    megaDropdown.addEventListener('mouseenter', () => {
      clearTimeout(dropdownTimeout);
    });

    megaDropdown.addEventListener('mouseleave', () => {
      megaDropdown.classList.remove('open');
      megaDropdown.setAttribute('aria-hidden', 'true');
    });
  }


  /* ═══════════════════════════════════
     MOBILE NAVIGATION
     ═══════════════════════════════════ */

  function initMobileNav() {
    const toggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('mobileNavClose');

    toggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      mobileNav.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', closeMobileNav);

    // Close on link click
    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Mobile market switcher
    mobileNav.querySelectorAll('.mobile-nav__market-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        mobileNav.querySelectorAll('.mobile-nav__market-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setMarketMode(btn.dataset.market);
      });
    });
  }

  function closeMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileToggle');
    if (mobileNav) {
      mobileNav.classList.remove('open');
      mobileNav.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }


  /* ═══════════════════════════════════
     MARKET SWITCHER
     ═══════════════════════════════════ */

  function initMarketSwitcher() {
    const retailBtn = document.getElementById('retailBtn');
    const wholesaleBtn = document.getElementById('wholesaleBtn');

    retailBtn.addEventListener('click', () => {
      setMarketMode('retail');
      retailBtn.classList.add('active');
      retailBtn.setAttribute('aria-pressed', 'true');
      wholesaleBtn.classList.remove('active');
      wholesaleBtn.setAttribute('aria-pressed', 'false');
    });

    wholesaleBtn.addEventListener('click', () => {
      setMarketMode('wholesale');
      wholesaleBtn.classList.add('active');
      wholesaleBtn.setAttribute('aria-pressed', 'true');
      retailBtn.classList.remove('active');
      retailBtn.setAttribute('aria-pressed', 'false');
    });
  }

  function setMarketMode(mode) {
    if (mode === 'wholesale') {
      document.body.classList.add('wholesale-mode');
    } else {
      document.body.classList.remove('wholesale-mode');
    }

    // Sync all switcher UI
    document.querySelectorAll('[data-market]').forEach(btn => {
      if (btn.dataset.market === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }


  /* ═══════════════════════════════════
     PRODUCT MODAL
     ═══════════════════════════════════ */

  function initProductModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('modalClose');

    // Quick view buttons
    document.querySelectorAll('.product-card__quick-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.product-card');
        const productId = parseInt(card.dataset.product);
        openProductModal(productId);
      });
    });

    // Product card click
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const productId = parseInt(card.dataset.product);
        openProductModal(productId);
      });
    });

    // Close
    closeBtn.addEventListener('click', closeProductModal);
    overlay.addEventListener('click', closeProductModal);

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProductModal();
    });

    // Size buttons
    document.querySelectorAll('.modal__size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal__size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Add to cart button (demo)
    document.getElementById('modalAddCart').addEventListener('click', () => {
      const btn = document.getElementById('modalAddCart');
      const original = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = 'var(--charcoal)';
      btn.style.color = 'var(--gold-light)';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 1800);
    });
  }

  function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const isWholesale = document.body.classList.contains('wholesale-mode');

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalBrand').textContent = product.brand;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalPrice').textContent = isWholesale ? product.priceWholesale : product.priceRetail;
    document.getElementById('modalDesc').textContent = product.desc;

    // Update size buttons
    const sizesContainer = document.querySelector('.modal__sizes-options');
    sizesContainer.innerHTML = product.sizes.map((size, i) =>
      `<button class="modal__size-btn${i === 0 ? ' active' : ''}" data-size="${size}">${size}</button>`
    ).join('');

    // Re-bind size buttons
    sizesContainer.querySelectorAll('.modal__size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizesContainer.querySelectorAll('.modal__size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('modalOverlay').classList.add('open');
    document.getElementById('productModal').classList.add('open');
    document.getElementById('modalOverlay').setAttribute('aria-hidden', 'false');
    document.getElementById('productModal').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.getElementById('productModal').classList.remove('open');
    document.getElementById('modalOverlay').setAttribute('aria-hidden', 'true');
    document.getElementById('productModal').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }


  /* ═══════════════════════════════════
     NEWSLETTER FORM
     ═══════════════════════════════════ */

  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail');
      const btn = document.getElementById('newsletterSubmit');
      const originalText = btn.textContent;

      btn.textContent = '✓ Subscribed!';
      btn.style.background = 'var(--charcoal)';
      btn.style.color = 'var(--gold-light)';
      email.value = '';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    });
  }





  /* ═══════════════════════════════════
     STATS — Display Final Values Immediately
     ═══════════════════════════════════ */

  function initStats() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.textContent.includes('+') ? '+' : '';
      el.textContent = target + suffix;
    });
  }








  /* ═══════════════════════════════════
     LAZY IMAGE LOADING
     ═══════════════════════════════════ */

  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported — images already have loading="lazy"
      return;
    }

    // Fallback with Intersection Observer
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // trigger load
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    images.forEach(img => imageObserver.observe(img));
  }


  /* ═══════════════════════════════════
     INITIALIZE
     ═══════════════════════════════════ */

  function init() {
    initNavigation();
    initMobileNav();
    initMarketSwitcher();
    initProductModal();
    initNewsletter();
    initStats();
    initLazyImages();
  }

  // DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
