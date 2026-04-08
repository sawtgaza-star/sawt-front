$(document).ready(function () {
  $(".creators-slider").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-right'></i>",
      "<i class='fa fa-chevron-left'></i>",
    ],
    responsive: {
      0: { items: 1, nav: true },
      768: { items: 2, nav: true },
      1000: { items: 4, nav: true },
    },
  });
});

const mybutton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

const cardContainer = document.querySelector(".main-container");

const observerOptions = {
  threshold: 0.5,
};

document.addEventListener("DOMContentLoaded", () => {
    // جلب كل العناصر التي تحمل كلاس counter
    const counters = document.querySelectorAll(".counter");

    counters.forEach(element => {
        const targetText = element.innerText;
        const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));
        const suffix = targetText.replace(/[0-9]/g, ''); 
        
        let currentNumber = 0;
        const duration = 2000; 
        const stepTime = Math.abs(Math.floor(duration / targetNumber));

        const timer = setInterval(() => {
            currentNumber += 1;
            element.innerText = currentNumber + suffix;
            
            if (currentNumber >= targetNumber) {
                clearInterval(timer);
            }
        }, stepTime);
    });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // التحقق من أن الشاشة أصغر من 992px (جوال أو تابلت)
    if (window.innerWidth <= 992) {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("is-flipped");
        }, 1000);
      }
    }
  });
}, observerOptions);

observer.observe(cardContainer);

const users = [
  {
    name: "فرح حرز",
    location: "فلسطين - غزة",
    avatar: "assets/images/يوسف الدوس.png",
    text: "تجربتي مع منصة صوت كانت مميزة جداً، حسيت إنها فعلاً تعطي مساحة حقيقية لكل شخص يعبّر عن أفكاره ويوصل صوته. الأدوات سهلة والاستخدام بسيط.",
  },
  {
    name: "محمود زعيتر",
    location: "فلسطين - الضفة",
    avatar: "assets/images/محمود زعيتر 2.png",
    text: "منصة صوت غيّرت طريقة تعاملي مع المحتوى الرقمي، صار عندي مكان أعبّر فيه بحرية وأتواصل مع ناس بنفس الاهتمامات. تجربة ما توقعتها بهالمستوى.",
  },
  {
    name: "يوسف الدوس",
    location: "فلسطين - رام الله",
    avatar: "assets/images/يوسف الدوس.png",
    text: "استخدمت المنصة من أول إطلاقها وشفت كيف تطورت. الفريق يسمع للمستخدمين فعلاً والتحديثات بتجي على أساس احتياجاتنا. هذا الشي نادر هالأيام.",
  },
  {
    name: "سارة العمر",
    location: "فلسطين - نابلس",
    avatar: "assets/images/محمود زعيتر 2.png",
    text: "بدأت أستخدم صوت للتعبير عن أفكاري الإبداعية ولقيت مجتمع داعم ومتفاعل. المنصة بتعطيك إحساس إنك محاط بناس بتفهمك وبتشجعك تكمل.",
  },
  {
    name: "أحمد النجار",
    location: "فلسطين - جنين",
    avatar: "assets/images/يوسف الدوس.png",
    text: "الواجهة سهلة والتجربة سلسة من أول دقيقة. ما احتجت أي مساعدة لأفهم كيف تشتغل المنصة. هذا دليل على اهتمام الفريق بتجربة المستخدم.",
  },
];

function updateCardContent(index, carouselId) {
  const user = users[index];
  if (!user) return;

  const isMobile = carouselId === "mobileCarousel";
  const cardSelector = isMobile
    ? ".mobile-slider .opinion-card, .mobile-slider .carousel-item.active"
    : ".opinion-card-wrapper .opinion-card";

  // تحديث الصورة الكبيرة
  const scope = isMobile
    ? document.querySelector(".mobile-slider")
    : document.querySelector(".opinion-card-wrapper");
  if (!scope) return;

  const avatar = scope.querySelector(".user-avatar");
  const name = scope.querySelector("strong");
  const location = scope.querySelector(".text-muted.small");
  const text = scope.querySelector(".opinion-text");

  if (avatar) avatar.src = user.avatar;
  if (name) name.textContent = user.name;
  if (location) location.textContent = user.location;
  if (text) text.textContent = user.text;
}

function goToSlide(carouselId, type, index) {
  const el = document.getElementById(carouselId);
  const carousel = bootstrap.Carousel.getOrCreateInstance(el);
  carousel.to(index);

  const selector =
    type === "desktop" ? ".avatar-indicator" : ".avatar-indicator-mobile";
  document.querySelectorAll(selector).forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });

  updateCardContent(index, carouselId);
}

document.addEventListener("DOMContentLoaded", () => {
  // تحميل أول مستخدم ابتداءً
  updateCardContent(0, "opinionsCarousel");
  updateCardContent(0, "mobileCarousel");

  ["opinionsCarousel", "mobileCarousel"].forEach((id) => {
    const el = document.getElementById(id);
    const type = id === "opinionsCarousel" ? "desktop" : "mobile";
    const selector =
      type === "desktop" ? ".avatar-indicator" : ".avatar-indicator-mobile";

    el.addEventListener("slid.bs.carousel", (e) => {
      document.querySelectorAll(selector).forEach((img, i) => {
        img.classList.toggle("active", i === e.to);
      });
      updateCardContent(e.to, id);
    });
  });
});
