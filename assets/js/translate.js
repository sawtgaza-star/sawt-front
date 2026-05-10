/* =========================================================
   Sawt — Language Translation Module (AR / EN)
   ---------------------------------------------------------
   - Toggles language between Arabic and English
   - Persists choice in localStorage
   - Switches document direction (rtl / ltr)
   - Translates any element with [data-i18n]
   - Translates placeholders via [data-i18n-placeholder]
   - Translates titles/aria-labels via [data-i18n-title]
   ========================================================= */

const translations = {
  ar: {
    // Top bar
    follow_us: "تابعونا على :",
    email: "info@sawtgaza.com",
    phone: "+972567247177",

    // Nav
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_content: "محتوانا",
    nav_team: "الفريق",
    nav_creators: "صناع المحتوى",
    nav_incubator: "حاضنة صوت",
    nav_media: "صوت ميديا",
    search_placeholder: "ابحث هنا...",

    // Hero
    hero_title: "منصة صوت",
    hero_subtitle: "نروي قصص غزة بكرامة... ونبني جيلاً جديداً من صناع المحتوى",
    hero_btn_watch: "مشاهدة الأعمال",
    hero_btn_collab: "تعاون معنا",
    hero_btn_support: "ادعم صوت",

    // Stats
    stat_team: "أعضاء الفريق",
    stat_followers: "متابع",
    stat_views: "مشاهدة",
    stat_videos: "فيديو",
    stat_stories: "قصة",
    one_thousand: "ألف",

    // Sout section
    welcome_label: "أهلاً بكم في صوت",
    welcome_title: "كل فكرة إلها صوت... وصوت بيجمعهم",
    welcome_lead: "في صوت، كل فكرة بتلاقي مكانها!",
    welcome_desc: "استكشف محتوى متنوع، عبّر عن نفسك، وشارك صوتك مع العالم.",
    feature_voice: "مساحة لأصواتكم",
    feature_creativity: "تمكين الإبداع",
    support_creators: "ندعم صناع المحتوى",
    professional_team: "فريق محترف، محتوى مميز، وخدمات تساعد صوتك يوصل",
    discover_more: "اكتشف المزيد",

    // News section
    news_title_pre: "آخر",
    news_title_highlight: "أخبارنا",
    news_subtitle: "شاهد أحدث القصص والفيديوهات من منصة صوت",
    view_all_news: "عرض جميع الأخبار",

    // Creators section
    creators_title_pre: "صُناع",
    creators_title_highlight: "المحتوى",
    creators_subtitle:
      "تعرف على صُنّاع المحتوى في صوت، حيث كل فكرة إلها صوت، وكل مبدع إله حكاية.",
    view_all: "عرض الكل",

    // Platform sections
    platform_title_pre: "أقسام",
    platform_title_highlight: "المنصة",
    platform_subtitle: "كل فكرة إلها صوت... وصوت بيجمعهم",
    read_more: "اقرأ المزيد",

    // Partners
    partners_title_pre: "شركاؤنا في",
    partners_title_highlight: "صوت",
    partners_desc:
      "معًا نبني صوتًا حيًّا، مساحة تجمع الحكايات، تُشعل الأمل، وتمنح كل إنسان فرصة يُسمَع",
    be_partner: "كن شريكاً لصوت",

    // Stories
    stories_label: "قصص من الواقع",
    stories_title: "اكتشف تجارب حقيقية من أشخاص شاركوا قصصهم معنا",
    tell_story: "احكي قصتك",
    comments_count_label: "الكومنت",
    tab_oldest: "الأقدم",
    tab_newest: "الأحدث",
    comment_placeholder: "اترك تعليقك هنا...",
    show_more: "عرض المزيد ↓",
    show_less: "عرض أقل ↑",

    // Opinions
    opinions_label: "آراء المستخدمين",
    opinions_title:
      "نؤمن أن رأيك هو جزء من تطويرنا .. شاركنا تجربتك وساعدنا نكون أفضل",
    share_opinion: "شاركنا رأيك",

    // Team
    team_title_pre: "أعضاء",
    team_title_highlight: "فريقنا",
    team_subtitle: "تعرّف على فريق صوت، مبدعين يصنعون الفرق",
    view_profile: "عرض الملف الشخصي",

    // Footer
    footer_about:
      "منصة صوت، تأسست لتكون مساحة للمبدعين، تجمع الحاضنة، صوت ميديا، والصوت نفسه، لتقديم محتوى ملهم وتجارب فريدة لكل من يسعى لصوته أن يُسمع.",
    footer_main_sections: "الأقسام الرئيسية",
    footer_quick_links: "روابط سريعة",
    footer_backstage: "الكواليس",
    footer_media_kit: "MEDIA KIT",
    footer_blog: "المدونة",
    footer_faq: "الأسئلة الشائعة",
    footer_stay_updated: "ابقَ على اطلاع",
    footer_subscribe: "اشترك في نشرتنا الإخبارية ..",
    footer_email_placeholder: "ادخل بريدك الالكتروني",
    footer_rights: "© جميع الحقوق محفوظة. 2026",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام",

    // Sout description (multi-line)
    welcome_desc_line1:
      "استكشف محتوى متنوع، عبّر عن نفسك، وشارك صوتك مع العالم.",
    welcome_desc_line2:
      "من خلال تجربة تفاعلية مليئة بالإبداع والإلهام، رح تقدر تطور أفكارك وتوصل",
    welcome_desc_line3: "لجمهور أوسع.",
    welcome_desc_line4: "وصوت بيكون معك خطوة بخطوة لتخلي صوتك يوصل أبعد.",

    // News cards
    news_card1_title: "صانع المحتوى في غزة",
    news_card2_title: "الأم في غزة",
    news_card3_title: "المبتورين قضية مهمشة",
    news_desc:
      "نشارككم آخر تحديثات صانع المحتوى في غزة، حيث نعمل على إبراز قصص المبدعين وإيصال صوتهم.",
    news_date: "5 مارس 2026",
    news_duration: "10 دقائق",

    // Creators cards
    creator_share: "شارك مع صوت",
    creator_name: "محمود زعيتر",
    creator_role: "ممثل كوميدي",
    creator_bio: "صانع محتوى وفنان كوميدي فلسطيني من قطاع غزة",
    creator_quote:
      "تجربتي مع صوت كانت مختلفة، أخيراً لقيت مكان بيفهمني كمبدع ....",
    view_more: "عرض المزيد",

    // Platform cards
    platform_card1_title: "منصة المحتوى",
    platform_card1_desc:
      "مكتبة غنية بالفيديوهات والقصص الإنسانية التي تروي واقع غزة بكرامة واحترافية.",
    platform_card2_title: "حاضنة صوت",
    platform_card2_desc:
      "برامج تدريبية متخصصة لتطوير مهارات صناع المحتوى وتمكينهم من الإبداع والنمو.",
    platform_card3_title: "صوت ميديا",
    platform_card3_desc:
      "شركة إنتاج إعلامي احترافية تقدم خدمات متكاملة من الكتابة إلى التسويق.",

    // Reels
    reel_title: "قصة أمل من غزة: كيف تحدى الحصار",
    reel_views: "20K مشاهدة",

    // Comments
    comments_full_label: "الكومنت (250)",
    comment_1: "قصة ملهمة رغم كل التحديات",
    comment_2: "حكاية بتعطي دافع للاستمرار",
    comment_3: "إصرار يستحق الاحترام",

    // Opinions
    opinion_user_name: "فرح حرز",
    opinion_user_location: "فلسطين - غزة",
    opinion_text:
      "تجربتي مع منصة صوت كانت مميزة جداً، حسيت إنها فعلاً تعطي مساحة حقيقية لكل شخص يعبّر عن أفكاره ويوصل صوته. الأدوات سهلة والاستخدام بسيط وكمان التفاعل مع المحتوى والمجتمع خلاني أكون جزء من بيئة إبداع.",

    user_1_name: "فرح حرز",
    user_1_location: "فلسطين - غزة",
    user_1_text:
      "تجربتي مع منصة صوت كانت مميزة جداً، حسيت إنها فعلاً تعطي مساحة حقيقية لكل شخص يعبّر عن أفكاره ويوصل صوته. الأدوات سهلة والاستخدام بسيط.",

    user_2_name: "محمود زعيتر",
    user_2_location: "فلسطين - الضفة",
    user_2_text:
      "منصة صوت غيّرت طريقة تعاملي مع المحتوى الرقمي، صار عندي مكان أعبّر فيه بحرية وأتواصل مع ناس بنفس الاهتمامات. تجربة ما توقعتها بهالمستوى.",

    user_3_name: "يوسف الدوس",
    user_3_location: "فلسطين - رام الله",
    user_3_text:
      "استخدمت المنصة من أول إطلاقها وشفت كيف تطورت. الفريق يسمع للمستخدمين فعلاً والتحديثات بتجي على أساس احتياجاتنا. هذا الشي نادر هالأيام.",

    user_4_name: "سارة العمر",
    user_4_location: "فلسطين - نابلس",
    user_4_text:
      "بدأت أستخدم صوت للتعبير عن أفكاري الإبداعية ولقيت مجتمع داعم ومتفاعل. المنصة بتعطيك إحساس إنك محاط بناس بتفهمك وبتشجعك تكمل.",

    user_5_name: "أحمد النجار",
    user_5_location: "فلسطين - جنين",
    user_5_text:
      "الواجهة سهلة والتجربة سلسة من أول دقيقة. ما احتجت أي مساعدة لأفهم كيف تشتغل المنصة. هذا دليل على اهتمام الفريق بتجربة المستخدم.",
    // Team members
    team_member_1: "هديل طافش",
    team_member_2: "محمد الأشقر",
    team_member_3: "محمود الصالح",
    team_member_4: "هديل طافش",
    team_member_5: "انس مليحة",
    view_profile_arrow: "عرض الملف الشخصي >",

    // Footer
    footer_rights_brand: "SAWTGAZA",
    footer_copyright: "© جميع الحقوق محفوظة. 2026",

    // Aria
    toggle_lang: "تغيير اللغة",

    // about page
    about_header: "من نحن",
    about_desc:
      " منصة إعلامية رقمية تجمع بين المحتوى الإنساني، التدريب الاحترافي، والإنتاج الإعلامي.",
    about_register: "سجل الآن",
    about_collaborate: "تعاون معنا",
    successful_members: "عضو ناجح",
    about_platform_title: "نبذة عن منصة صوت",
    about_platform_question: "ما الذي يدفعنا لنكون صوتك؟",
    about_platform_desc:
      "نؤمن أن لكل إنسان قصة تستحق أن تُروى، لذلك جاءت صوت لتكون مساحة حرة للتعبير، حيث يلتقي الأفراد لمشاركة تجاربهم وأفكارهم بصدق. نساعدك على إيصال صوتك إلى الآخرين، ونمنح المحتوى الإنساني مساحة حقيقية ليُرى، ويُسمع، ويترك أثرًا.",
    join_our_team_title_pre: "قد تكون قصتك بداية",
    join_our_team_title_highlight: "التغيير",
    join_our_team_desc:
      "كل صوت مهم، إذا كانت لديك قصة تستحق أن تُسمع فإن صوت ستدعمك من أول محادثة إلى التأثير العام.",
    join_our_team_join: "انضم الينا",
    join_our_team_support: "ادعم فريق صوت",
    leaders: "قادة",
    teams: "الفرق",
    leaders_of_teams_subtitle: "الوجوه خلف الحكاية",
    story_title: "قصتنا",
    story_subtitle: "من الصمت... إلى صوت يُسمع",
    story_values: "قيمنا",
    story_journey: "رحلتنا",
    story_offer: "ما نقدم",
    story_impact: "التأثير",
    story_paragraph_1:
      'بدأت رحلة <span class="highlight-word">"صوت"</span> في ظل ظروفٍ صعبة، حيث كانت الكثير من القصص الحقيقية مخفية، <span class="highlight-word">والأصوات</span> الصادقة مكتومة تحت ضغوط الإعلام التقليدي والسرديات المُسيّسة. آمنّا بأن الحقيقة تستحق أن تُروى، وأن لكل إنسان الحق في أن يُسمع صوته.',
    story_paragraph_2:
      'واجهنا تحدياتٍ كبيرة؛ من محدودية الموارد، وصعوبة الوصول إلى المناطق المتضررة، إلى محاولات التشكيك بالمصداقية. لكننا استمررنا، مدفوعين بإيمانٍ راسخ بأن الإعلام الحقيقي <span class="highlight-word">هو حقٌ للناس، وليس أداةً للسلطة</span>.',
  },

  en: {
    // Top bar
    follow_us: "Follow us :",
    email: "info@sawtgaza.com",
    phone: "+972567247177",

    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_content: "Our Content",
    nav_team: "Team",
    nav_creators: "Content Creators",
    nav_incubator: "Sawt Incubator",
    nav_media: "Sawt Media",
    search_placeholder: "Search here...",
    one_thousand: "K",
    // Hero
    hero_title: "Sawt Platform",
    hero_subtitle:
      "Telling Gaza's stories with dignity, building a new generation of content creators.",
    hero_btn_watch: "Watch Works",
    hero_btn_collab: "Collaborate With Us",
    hero_btn_support: "Support Sawt",

    // Stats
    stat_team: "Team Members",
    stat_followers: "Followers",
    stat_views: "Views",
    stat_videos: "Videos",
    stat_stories: "Stories",

    // Sout section
    welcome_label: "Welcome to Sawt",
    welcome_title: "Every idea has a voice... and Sawt brings them together",
    welcome_lead: "At Sawt, every idea finds its place!",
    welcome_desc:
      "Explore diverse content, express yourself, and share your voice with the world.",
    feature_voice: "A space for your voices",
    feature_creativity: "Empowering creativity",
    support_creators: "We support content creators",
    professional_team:
      "A professional team, distinguished content, and services that help your voice reach further",
    discover_more: "Discover More",

    // News section
    news_title_pre: "Our Latest",
    news_title_highlight: "News",
    news_subtitle: "Watch the latest stories and videos from Sawt platform",
    view_all_news: "View All News",

    // Creators section
    creators_title_pre: "Content",
    creators_title_highlight: "Creators",
    creators_subtitle:
      "Meet the content creators at Sawt, where every idea has a voice, and every creator has a story.",
    view_all: "View All",

    // Platform sections
    platform_title_pre: "Platform",
    platform_title_highlight: "Sections",
    platform_subtitle:
      "Every idea has a voice... and Sawt brings them together",
    read_more: "Read More",

    // Partners
    partners_title_pre: "Our Partners in",
    partners_title_highlight: "Sawt",
    partners_desc:
      "Together we build a living voice — a space that gathers stories, ignites hope, and gives every person a chance to be heard.",
    be_partner: "Become a Sawt Partner",

    // Stories
    stories_label: "Real-life Stories",
    stories_title:
      "Discover real experiences from people who shared their stories with us",
    tell_story: "Tell Your Story",
    comments_count_label: "Comments",
    tab_oldest: "Oldest",
    tab_newest: "Newest",
    comment_placeholder: "Leave your comment here...",
    show_more: "Show more ↓",
    show_less: "Show less ↑",

    // Opinions
    opinions_label: "User Opinions",
    opinions_title:
      "We believe your opinion is part of our growth. Share your experience and help us become better.",
    share_opinion: "Share Your Opinion",

    user_1_name: "Farah Harz",
    user_1_location: "Palestine - Gaza",
    user_1_text:
      "My experience with Sawt platform was very special. It truly gives a real space for everyone to express their thoughts and share their voice. The tools are easy and simple to use.",

    user_2_name: "Mahmoud Zuaiter",
    user_2_location: "Palestine - West Bank",
    user_2_text:
      "Sawt changed the way I deal with digital content. I finally have a place to express myself freely and connect with people who share the same interests.",

    user_3_name: "Yousef Al-Dos",
    user_3_location: "Palestine - Ramallah",
    user_3_text:
      "I used the platform since its launch and saw how it evolved. The team truly listens to users, and updates are based on our needs.",

    user_4_name: "Sara Al-Omar",
    user_4_location: "Palestine - Nablus",
    user_4_text:
      "I started using Sawt to express my creative ideas and found a supportive and interactive community that motivates me to continue.",

    user_5_name: "Ahmed Al-Najjar",
    user_5_location: "Palestine - Jenin",
    user_5_text:
      "The interface is simple and the experience is smooth from the first moment. I didn’t need any help to understand how it works.",

    // Team
    team_title_pre: "Our",
    team_title_highlight: "Team",
    team_subtitle: "Meet the Sawt team — creators who make a difference",
    view_profile: "View Profile",

    // Footer
    footer_about:
      "Sawt platform was founded to be a space for creators — bringing together the Incubator, Sawt Media, and the voice itself — to deliver inspiring content and unique experiences for everyone who wants their voice to be heard.",
    footer_main_sections: "Main Sections",
    footer_quick_links: "Quick Links",
    footer_backstage: "Backstage",
    footer_media_kit: "MEDIA KIT",
    footer_blog: "Blog",
    footer_faq: "FAQ",
    footer_stay_updated: "Stay Updated",
    footer_subscribe: "Subscribe to our newsletter..",
    footer_email_placeholder: "Enter your email",
    footer_rights: "© All rights reserved. 2026",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",

    // Sout description (multi-line)
    welcome_desc_line1:
      "Explore diverse content, express yourself, and share your voice with the world.",
    welcome_desc_line2:
      "Through an interactive experience full of creativity and inspiration, you can develop your ideas and reach",
    welcome_desc_line3: "a wider audience.",
    welcome_desc_line4:
      "Sawt is with you step by step to make your voice reach further.",

    // News cards
    news_card1_title: "Content Creator in Gaza",
    news_card2_title: "Mothers in Gaza",
    news_card3_title: "Amputees: A Marginalized Cause",
    news_desc:
      "We share the latest updates about content creators in Gaza, where we work to highlight creators' stories and amplify their voices.",
    news_date: "March 5, 2026",
    news_duration: "10 min",

    // Creators cards
    creator_share: "Share with Sawt",
    creator_name: "Mahmoud Zeiter",
    creator_role: "Comedian",
    creator_bio: "Palestinian content creator and comedian from the Gaza Strip",
    creator_quote:
      "My experience with Sawt was different — finally, a place that understands me as a creator....",
    view_more: "View More",

    // Platform cards
    platform_card1_title: "Content Platform",
    platform_card1_desc:
      "A rich library of videos and human stories that tell the reality of Gaza with dignity and professionalism.",
    platform_card2_title: "Sawt Incubator",
    platform_card2_desc:
      "Specialized training programs to develop content creators' skills and enable them to create and grow.",
    platform_card3_title: "Sawt Media",
    platform_card3_desc:
      "A professional media production company offering full services from writing to marketing.",

    // Reels
    reel_title: "A story of hope from Gaza: defying the siege",
    reel_views: "20K views",

    // Comments
    comments_full_label: "Comments (250)",
    comment_1: "An inspiring story despite all challenges",
    comment_2: "A story that gives motivation to keep going",
    comment_3: "Determination that deserves respect",

    // Opinions
    opinion_user_name: "Farah Harz",
    opinion_user_location: "Palestine — Gaza",
    opinion_text:
      "My experience with Sawt platform was very special. I felt it truly gives a real space for everyone to express their thoughts and share their voice. The tools are easy, the experience is simple, and the interaction with the content and community made me part of a creative environment.",

    // Team members
    team_member_1: "Hadeel Tafesh",
    team_member_2: "Mohammed Al-Ashqar",
    team_member_3: "Mahmoud Al-Saleh",
    team_member_4: "Hadeel Tafesh",
    team_member_5: "Anas Mlaiha",
    view_profile_arrow: "View Profile >",

    // Footer
    footer_rights_brand: "SAWTGAZA",
    footer_copyright: "© All rights reserved. 2026",

    // Aria
    toggle_lang: "Switch language",

    //about page
    about_header: "About Sawt",
    about_desc:
      "A digital media platform that combines humanitarian content, professional training, and media production.",
    about_register: "Register Now",
    about_collaborate: "Collaborate With Us",
    successful_members: "Successful Member",
    about_platform_title: "About Sawt Platform",
    about_platform_question: "What drives us to be your voice?",
    about_platform_desc:
      "We believe every person has a story worth telling. That's why Sawt was created as a free space for expression, where individuals come together to share their experiences and ideas with sincerity. We help you reach others with your voice, giving humanitarian content a real space to be seen, heard, and leave a lasting impact.",
    leaders: "Leaders",
    teams: "Of Teams",
    leaders_of_teams_subtitle: "The faces behind the story",
    join_our_team_title_pre: "Your story could be the start of",
    join_our_team_title_highlight: "change",
    join_our_team_desc:
      "Every voice matters. If you have a story worth hearing, Sawt will support you from the first conversation to public impact.",
    join_our_team_join: "Join Us",
    join_our_team_support: "Support Sawt Team",
    story_title: "Our Story",
    story_subtitle: "From silence... to a voice that is heard",
    story_values: "Our Values",
    story_journey: "Our Journey",
    story_offer: "What We Offer",
    story_impact: "Our Impact",
    story_paragraph_1:
      'The journey of <span class="highlight-word">"Sawt"</span> began under difficult circumstances, where many real stories were hidden and <span class="highlight-word">honest voices</span> were silenced under the pressure of traditional media and politicized narratives. We believed that truth deserves to be told, and that every person has the right to be heard.',
    story_paragraph_2:
      'We faced great challenges: limited resources, the difficulty of reaching affected areas, and attempts to undermine our credibility. But we continued, driven by an unshakable belief that real journalism <span class="highlight-word">is a right of the people, not a tool of authority</span>.',
  },
};

const LANG_KEY = "lang";

function getCurrentLang() {
  return localStorage.getItem(LANG_KEY) || "ar";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    if (translations[lang][key]) {
      el.setAttribute("title", translations[lang][key]);
    }
  });
}

function applyDirection(lang) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);
  document.body.setAttribute("dir", dir);
}

// تبديل اللغة
function toggleLanguage() {
  const current = getCurrentLang();
  const newLang = current === "ar" ? "en" : "ar";

  setLang(newLang);
  applyTranslations(newLang);
  applyDirection(newLang);
}

// تشغيل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const lang = getCurrentLang();

  applyTranslations(lang);
  applyDirection(lang);

  const btn = document.querySelector(".language-btn");
  if (btn) {
    btn.addEventListener("click", toggleLanguage);
  }
});
