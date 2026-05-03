function getLang() {
  return localStorage.getItem("lang") || "ar";
}

function t(key) {
  const lang = getLang();
  return translations[lang][key] || key;
}

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

  counters.forEach((element) => {
    const targetText = element.innerText;
    const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ""));
    const suffix = targetText.replace(/[0-9]/g, "");

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
    name: "user_1_name",
    location: "user_1_location",
    avatar: "assets/images/يوسف الدوس.png",
    text: "user_1_text",
  },
  {
    name: "user_2_name",
    location: "user_2_location",
    avatar: "assets/images/محمود زعيتر 2.png",
    text: "user_2_text",
  },
  {
    name: "user_3_name",
    location: "user_3_location",
    avatar: "assets/images/يوسف الدوس.png",
    text: "user_3_text",
  },
  {
    name: "user_4_name",
    location: "user_4_location",
    avatar: "assets/images/محمود زعيتر 2.png",
    text: "user_4_text",
  },
  {
    name: "user_5_name",
    location: "user_5_location",
    avatar: "assets/images/يوسف الدوس.png",
    text: "user_5_text",
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

  if (avatar) avatar.src = t(user.avatar);
  if (name) name.textContent = t(user.name);
  if (location) location.textContent = t(user.location);
  if (text) text.textContent = t(user.text);
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

// ====== البيانات ======

let commentsData = [
  { av: "av-green", letter: "أ", text: "قصة ملهمة رغم كل التحديات", time: 1 },
  { av: "av-orange", letter: "م", text: "حكاية بتعطي دافع للاستمرار", time: 2 },
  {
    av: "av-blue",
    letter: "F",
    text: "إصرار يستحق الاحترام",
    time: 3,
    style: "background:#e1723b;color:#fff;font-weight:600",
  },
];

const extraComments = [
  { av: "av-gray", letter: "ي", text: "ما توقعت أشوف قصة بهالمستوى" },
  { av: "av-green", letter: "ن", text: "شكراً على هالمحتوى الرائع" },
  { av: "av-orange", letter: "ر", text: "بتمنى أشوف المزيد من هيك قصص" },
  { av: "av-blue", letter: "س", text: "قصة مؤثرة جداً ما نسيتها" },
  { av: "av-gray", letter: "خ", text: "والله استفدت كثير من هالتجربة" },
];

let showing = false;
let currentOrder = "newest";

function renderComments() {
  const list = document.getElementById("commentsList");

  const sorted =
    currentOrder === "newest" ? [...commentsData].reverse() : [...commentsData];

  list.style.opacity = "0";
  list.style.transition = "opacity 0.2s";

  setTimeout(() => {
    list
      .querySelectorAll(".comment-item:not(.extra-comment)")
      .forEach((el) => el.remove());

    sorted.forEach((c) => {
      const d = document.createElement("div");
      d.className = "comment-item";
      d.innerHTML = `<div class="avatar-circle ${c.av}" ${c.style ? `style="${c.style}"` : ""}>${c.letter}</div><span>${c.text}</span>`;
      list.appendChild(d);
    });

    list.style.opacity = "1";
    list.scrollTop = currentOrder === "newest" ? 0 : list.scrollHeight;
  }, 200);
}

function setTab(el, type) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  currentOrder = type === "الأحدث" ? "newest" : "oldest";
  renderComments();
}

function showMore() {
  if (showing) return;
  showing = true;

  const list = document.getElementById("commentsList");
  const btn = document.querySelector(".show-more");

  extraComments.forEach((c, i) => {
    setTimeout(() => {
      const d = document.createElement("div");
      d.className = "comment-item extra-comment";
      d.style.opacity = "0";
      d.style.transition = "opacity 0.3s";
      d.innerHTML = `<div class="avatar-circle ${c.av}">${c.letter}</div><span>${c.text}</span>`;
      list.appendChild(d);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          d.style.opacity = "1";
          list.scrollTop = list.scrollHeight;
        });
      });
    }, i * 150);
  });

  setTimeout(
    () => {
      btn.textContent = t("show_less");

      btn.style.color = "#e1723b";
      btn.style.cursor = "pointer";
      showing = false;
      btn.onclick = showLess;
    },
    extraComments.length * 150 + 100,
  );
}

function showLess() {
  const list = document.getElementById("commentsList");
  const btn = document.querySelector(".show-more");

  list.querySelectorAll(".extra-comment").forEach((el) => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 300);
  });

  setTimeout(() => {
    list.scrollTop = 0;
  }, 300);

  btn.textContent = t("show_more");
  btn.style.color = "#e1723b";
  btn.onclick = showMore;
}

function addComment() {
  const input = document.getElementById("newComment");
  const text = input.value.trim();
  if (!text) return;

  const colors = ["av-green", "av-orange", "av-blue", "av-gray"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const firstLetter = text[0];

  // أضفه للـ data
  commentsData.push({
    av: randomColor,
    letter: firstLetter,
    text,
    time: commentsData.length + 1,
  });

  // ارسمه مباشرة
  const list = document.getElementById("commentsList");
  const d = document.createElement("div");
  d.className = "comment-item";
  d.style.opacity = "0";
  d.style.transform = "translateY(10px)";
  d.style.transition = "opacity 0.3s, transform 0.3s";
  d.innerHTML = `<div class="avatar-circle ${randomColor}">${firstLetter}</div><span>${text}</span>`;

  if (currentOrder === "newest") {
    list.insertBefore(d, list.firstChild);
    setTimeout(() => {
      list.scrollTop = 0;
    }, 50);
  } else {
    list.appendChild(d);
    setTimeout(() => {
      list.scrollTop = list.scrollHeight;
    }, 50);
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      d.style.opacity = "1";
      d.style.transform = "translateY(0)";
    });
  });

  // حدّث العداد
  const counter = document.querySelector(".comments-count");
  const num = parseInt(counter.textContent.match(/\d+/)[0]) + 1;
  counter.textContent = `الكومنت (${num})`;

  input.value = "";
  input.style.height = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  renderComments();

  document.getElementById("newComment").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addComment();
    }
  });

  document.getElementById("newComment").addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
});

function togglePlay(element) {
  // الحصول على عنصر الفيديو (الـ reel-item الذي يحتوي على الـ play-overlay)
  const reelItem = element.closest(".reel-item");
  const video = reelItem.querySelector("video");
  const playOverlay = element;

  if (video.paused) {
    // تشغيل الفيديو
    video.play();
    // إخفاء أيقونة التشغيل
    playOverlay.style.opacity = "0";
    playOverlay.style.pointerEvents = "none";
    // إضافة كلاس playing
    reelItem.classList.add("playing");
  } else {
    // إيقاف الفيديو
    video.pause();
    // إظهار أيقونة التشغيل
    playOverlay.style.opacity = "1";
    playOverlay.style.pointerEvents = "all";
    // إزالة كلاس playing
    reelItem.classList.remove("playing");
  }
}

// دالة جديدة للتعامل مع الضغط على الفيديو مباشرة
function toggleVideoPlay(videoElement) {
  const reelItem = videoElement.closest(".reel-item");
  const playOverlay = reelItem.querySelector(".play-overlay");

  if (videoElement.paused) {
    // تشغيل الفيديو
    videoElement.play();
    if (playOverlay) {
      playOverlay.style.opacity = "0";
      playOverlay.style.pointerEvents = "none";
    }
    reelItem.classList.add("playing");
  } else {
    // إيقاف الفيديو
    videoElement.pause();
    if (playOverlay) {
      playOverlay.style.opacity = "1";
      playOverlay.style.pointerEvents = "all";
    }
    reelItem.classList.remove("playing");
  }
}

// دوال مساعدة للأزرار الأخرى
function toggleLike(button) {
  const icon = button.querySelector("i");
  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    icon.style.color = "red";
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    icon.style.color = "white";
  }
}

function toggleSave(button) {
  const icon = button.querySelector("i");
  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }
}

function shareVideo() {
  alert("مشاركة الفيديو");
}

// إضافة مراقبة للتمرير
const reelsContainer = document.getElementById("reelsContainer");
let scrollTimeout;

if (reelsContainer) {
  reelsContainer.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const reelItems = document.querySelectorAll(".reel-item");
      const containerRect = reelsContainer.getBoundingClientRect();

      reelItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const video = item.querySelector("video");
        const playOverlay = item.querySelector(".play-overlay");
        const isVisible =
          itemRect.top >= containerRect.top &&
          itemRect.bottom <= containerRect.bottom;

        if (!isVisible && !video.paused) {
          video.pause();
          if (playOverlay) {
            playOverlay.style.opacity = "1";
            playOverlay.style.pointerEvents = "all";
          }
          item.classList.remove("playing");
        }
      });
    }, 100);
  });
}

const video = document.querySelector(".my-video");
const progress = document.querySelector(".progress");

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = percent + "%";
});

const progressBar = document.querySelector(".progress-bar");

progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const newTime = (clickX / width) * video.duration;
  video.currentTime = newTime;
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
