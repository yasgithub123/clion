const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination2",
  },

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);



let isVisible = false;

const togglePopup = () => {
  if (isVisible) {
    // document.getElementById("popup").style.display = "none";
    document.getElementById("popup").style.pointerEvents = "none";
    document.getElementById("popup").style.opacity = "0";
    isVisible = false;
  } else {
    document.getElementById("popup").style.pointerEvents = "auto";
    document.getElementById("popup").style.opacity = "1";
    isVisible = true;
  }
};

