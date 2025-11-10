document.addEventListener('DOMContentLoaded', function () {
  // ========== NAVBAR MOBILE ==========
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const closeBtn = document.getElementById('x');
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section[id]');

  menuToggle?.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  closeBtn?.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
      menu.classList.remove('show');
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => link.classList.remove('active'));
        const currentLink = document.querySelector(`nav a[href="#${id}"]`);
        if (currentLink) {
          currentLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => {
    observer.observe(section);
  });

  

  // ========== SERRVESES SWIPER ==========

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // ========== VALIDATION FORM ==========

  document.getElementById('contactForm').addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

  
    document.querySelectorAll('.eroro').forEach(el => el.textContent = '');
    [name, email, phone, message].forEach(input => input.style.border = '');

    let hasError = false;

 
    if (name.value.trim() === "") {
      showError(name, " Name is required");
      hasError = true;
    }

    if (email.value.trim() === "") {
      showError(email, " Email is required");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      showError(email, " Invalid email format");
      hasError = true;
    }

    if (phone.value.trim() === "") {
      showError(phone, " Phone is required");
      hasError = true;
    }

    if (message.value.trim() === "") {
      showError(message, " Message is required");
      hasError = true;
    }


    if (!hasError) {
      document.getElementById('contactForm').submit();
    }
  });


  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMsg = formGroup.querySelector('.eroro');
    if (errorMsg) errorMsg.textContent = message;
    input.style.border = "2px solid #ff4d4d";
  }






  // ========== FILTER PORTFOLIO ==========
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        item.style.display = (filterValue === 'all' || item.getAttribute('data-category') === filterValue)
          ? 'block'
          : 'none';
      });
    });
  });

  // ========== ANIMATE SKILLS ==========
  const skillItems = document.querySelectorAll('.skill-item');

  const animateSkills = () => {
    skillItems.forEach(item => {
      const progressFill = item.querySelector('.progress-fill');
      const width = progressFill.style.width;
      progressFill.style.width = '0';
      setTimeout(() => {
        progressFill.style.width = width;
      }, 100);
    });
  };

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const expertiseSection = document.querySelector('.expertise');
  if (expertiseSection) {
    skillObserver.observe(expertiseSection);
  }
  // ========== cards projets pour mobail ==========
  const btnCards = document.querySelectorAll(".portfolio-overlay")
  btnCards.forEach((cards =>{
    cards.addEventListener("click", ()=>{
      cards.classList.toggle("active-overlay");

    })
  }))
});

// ========== 1 SIDEBAR APP BILL COUNTER ==========
document.getElementById("buuton-page")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("sidebar-page")?.classList.add("open");
});

document.getElementById("close-sidebar")?.addEventListener("click", function () {
  document.getElementById("sidebar-page")?.classList.remove("open");
});

// ========== 2 SIDEBAR RESTAURANT MANAGEMENT ==========
document.getElementById("c-projet")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("s-p")?.classList.add("op");
});

document.getElementById("clos")?.addEventListener("click", function () {
  document.getElementById("s-p")?.classList.remove("op");
});


// ========== 3 SIDEBAR TO DO LIST ==========
document.getElementById("list-projet")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("td")?.classList.add("tp");
});

document.getElementById("t-clos")?.addEventListener("click", function () {
  document.getElementById("td")?.classList.remove("tp");
});


// ========== 4 SIDEBAR SWEET STORE ==========
document.getElementById("sweet")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("sw")?.classList.add("swp");
});

document.getElementById("w-clos")?.addEventListener("click", function () {
  document.getElementById("sw")?.classList.remove("swp");
});


// ========== 4 SIDEBAR WEATHER APP ==========
document.getElementById("weather")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("wet")?.classList.add("wat");
});

document.getElementById("clos-wet")?.addEventListener("click", function () {
  document.getElementById("wet")?.classList.remove("wat");
});

// ========== 4 SIDEBAR NOTE APP ==========
document.getElementById("note-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("not")?.classList.add("addnote");
});

document.getElementById("close-not")?.addEventListener("click", function () {
  document.getElementById("not")?.classList.remove("addnote");
});


// ========== 4 SIDEBAR RESTVATION TERRAIN ==========
document.getElementById("terrain-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("teran")?.classList.add("ann");
});

document.getElementById("close-ann")?.addEventListener("click", function () {
  document.getElementById("teran")?.classList.remove("ann");
});