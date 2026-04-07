$(document).ready(function(){
  $(".creators-slider").owlCarousel({
    rtl: true,
    loop: true,      
    margin: 20,
    nav: true,     
    dots: false,
    navText: [
        "<i class='fa fa-chevron-right'></i>",
        "<i class='fa fa-chevron-left'></i>"
    ],
    responsive: {
      0: { items: 1, nav: true },
      768: { items: 2, nav: true },
      1000: { items: 4, nav: true }
    }
  });
});

    const mybutton = document.getElementById("backToTop");

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

const cardContainer = document.querySelector('.main-container');

const observerOptions = {
    threshold: 0.5 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // التحقق من أن الشاشة أصغر من 992px (جوال أو تابلت)
        if (window.innerWidth <= 992) { 
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-flipped');
                }, 1000);
            }
        }
    });
}, observerOptions);

observer.observe(cardContainer);

