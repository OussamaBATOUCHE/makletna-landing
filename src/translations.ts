export type Lang = "en" | "ar" | "fr";

export const translations = {
  en: {
    nav: {
      appName: "Makletna",
      features: "Features",
      howItWorks: "How It Works",
      register: "Register Interest",
    },
    hero: {
      badge: "Coming Soon",
      title: "Makletna",
      arabicName: "ماكلتنا",
      tagline: "Discover Home-Made Food Near You",
      description:
        "Makletna connects you with passionate home cooks in your neighbourhood. Healthy, traditional Algerian meals — made from scratch, delivered fresh to your door.",
      cta: "Join the Waitlist",
      secondary: "Learn More",
      comingSoon: "Coming soon on",
      appTagline: "Will be available soon",
    },
    features: {
      sectionLabel: "Features",
      title: "Everything You Need",
      subtitle: "An app that brings healthy, home-made food from local cooks straight to you",
      items: [
        {
          icon: "utensils",
          title: "Authentic Home-Made Meals",
          description:
            "Enjoy healthy, home-cooked dishes prepared from scratch by talented local cooks using traditional Algerian recipes.",
        },
        {
          icon: "map-pin",
          title: "Find Home Cooks Near You",
          description:
            "Browse home cooks close to you on an interactive map and discover healthy traditional food hidden in your neighbourhood.",
        },
        {
          icon: "package",
          title: "Real-Time Order Tracking",
          description:
            "Follow your order from preparation to delivery with live status updates every step of the way.",
        },
        {
          icon: "heart",
          title: "Support Local Cooks",
          description:
            "Every order directly supports a local home chef, helping them build a sustainable culinary business.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "How It Works",
      title: "Healthy, Traditional & Delicious",
      subtitle: "Real home-made food from your neighbours — fresh, healthy, and full of flavour",
      customers: {
        title: "For Food Lovers",
        steps: [
          { step: "01", title: "Find Home Cooks Nearby", description: "Browse local home cooks near you and explore their healthy, traditional menus on the map or in a list." },
          { step: "02", title: "Place Your Order", description: "Choose your meals, customise your order, and pay securely in-app." },
          { step: "03", title: "Enjoy & Review", description: "Receive fresh, healthy home-made food and share your experience." },
        ],
      },
      providers: {
        title: "For Home Chefs",
        steps: [
          { step: "01", title: "List Your Home Cooking", description: "Create your profile, upload your healthy and traditional menu, and set your hours." },
          { step: "02", title: "Accept Orders", description: "Receive orders from customers near you and manage them in real time." },
          { step: "03", title: "Cook & Earn", description: "Prepare the wholesome meals you love and build a loyal community of regulars." },
        ],
      },
    },
    propose: {
      sectionLabel: "Our Promise",
      title: "What We Propose",
      description:
        "Makletna is built on a simple belief: the healthiest, most delicious food is made at home. We connect people who love to cook with people who crave real, traditional Algerian food — creating a community rooted in heritage and wellbeing.",
      stats: [
        { value: "100%", label: "Home-cooked" },
        { value: "🇩🇿", label: "Made in Algeria" },
        { value: "Soon", label: "Launching in Algiers" },
      ],
    },
    form: {
      sectionLabel: "Early Access",
      title: "Be the First to Know",
      subtitle:
        "Register your interest now and get exclusive early access when we launch in Algiers.",
      name: "Full Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      phone: "Phone Number (optional)",
      phonePlaceholder: "+213 ...",
      role: "I am a...",
      roleCustomer: "Food Lover",
      roleProvider: "Home Chef",
      wilaya: "Wilaya",
      wilayaPlaceholder: "Select your wilaya",
      submit: "Join the Waitlist",
      submitting: "Submitting...",
      success: "You're on the list! 🎉",
      successMessage:
        "We'll reach out as soon as Makletna launches in your area. Thank you for your interest!",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "Healthy Home-Made Food Near You",
      contact: "Contact",
      email: "contact@makletna.com",
      social: "Follow Us",
      instagram: "@makletna",
      madeIn: "DZAIR MADE",
      rights: "All rights reserved.",
    },
  },

  ar: {
    nav: {
      appName: "ماكلتنا",
      features: "المميزات",
      howItWorks: "كيف يعمل",
      register: "سجّل اهتمامك",
    },
    hero: {
      badge: "قريباً",
      title: "ماكلتنا",
      arabicName: "ماكلتنا",
      tagline: "اكتشف الطعام المنزلي الصحي القريب منك",
      description:
        "ماكلتنا تربطك بطهاة منزليين موهوبين في حيّك. وجبات جزائرية صحية وتقليدية، مُعدّة بعناية من مكوّنات طازجة وموصّلة إلى بابك.",
      cta: "انضم إلى قائمة الانتظار",
      secondary: "اعرف المزيد",
      comingSoon: "قريباً على",
      appTagline: "قريباً على متجري التطبيقات",
    },
    features: {
      sectionLabel: "المميزات",
      title: "كل ما تحتاجه",
      subtitle: "تطبيق يجلب لك الطعام المنزلي الصحي من طهاة قريبين منك",
      items: [
        {
          icon: "utensils",
          title: "وجبات منزلية صحية وأصيلة",
          description:
            "استمتع بأطباق منزلية صحية مُحضَّرة من مكوّنات طازجة بوصفات جزائرية تقليدية أصيلة.",
        },
        {
          icon: "map-pin",
          title: "ابحث عن طهاة قريبين منك",
          description:
            "تصفّح الطهاة المنزليين القريبين منك على خريطة تفاعلية واكتشف الطعام الصحي والتقليدي في حيّك.",
        },
        {
          icon: "package",
          title: "تتبّع طلبك لحظةً بلحظة",
          description:
            "تابع طلبك من التحضير حتى التوصيل مع تحديثات فورية في كل خطوة.",
        },
        {
          icon: "heart",
          title: "ادعم الطهاة المحليين",
          description:
            "كل طلب يدعم طاهياً منزلياً ويساعده على بناء مشروع طهوي مستدام.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "كيف يعمل",
      title: "صحي وتقليدي ولذيذ",
      subtitle: "طعام منزلي حقيقي من جيرانك — طازج وصحي ومليء بالنكهة",
      customers: {
        title: "لعشاق الطعام",
        steps: [
          { step: "٠١", title: "ابحث عن طهاة قريبين", description: "تصفّح الطهاة المنزليين القريبين منك واكتشف قوائمهم الصحية والتقليدية على الخريطة أو في القائمة." },
          { step: "٠٢", title: "اطلب وجبتك", description: "اختر وجباتك وخصّص طلبك وادفع بأمان داخل التطبيق." },
          { step: "٠٣", title: "استمتع وقيّم", description: "استلم طعامك المنزلي الطازج والصحي وشارك تجربتك." },
        ],
      },
      providers: {
        title: "للطهاة المنزليين",
        steps: [
          { step: "٠١", title: "سجّل وصفاتك المنزلية", description: "أنشئ ملفك التعريفي، أضف قائمتك الصحية والتقليدية وحدّد أوقات عملك." },
          { step: "٠٢", title: "استلم الطلبات", description: "استقبل طلبات العملاء القريبين منك وأدِرها في الوقت الفعلي." },
          { step: "٠٣", title: "اطبخ واربح", description: "حضّر الأطباق الشهية التي تحبها وابنِ مجتمعاً من الزبائن المخلصين." },
        ],
      },
    },
    propose: {
      sectionLabel: "وعدنا",
      title: "ما نقترحه",
      description:
        "ماكلتنا مبنية على قناعة بسيطة: أصحّ وأشهى طعام هو ما يُعدّ في المنزل. نربط المحبين للطبخ التقليدي بمن يشتهون طعاماً حقيقياً وصحياً — لنخلق مجتمعاً متجذراً في التراث الجزائري.",
      stats: [
        { value: "100%", label: "مطبوخ منزلياً" },
        { value: "🇩🇿", label: "صنع في الجزائر" },
        { value: "قريباً", label: "الإطلاق في الجزائر العاصمة" },
      ],
    },
    form: {
      sectionLabel: "وصول مبكر",
      title: "كن أول من يعلم",
      subtitle:
        "سجّل اهتمامك الآن واحصل على وصول حصري مبكر عند انطلاقنا في الجزائر العاصمة.",
      name: "الاسم الكامل",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "example@email.com",
      phone: "رقم الهاتف (اختياري)",
      phonePlaceholder: "+213 ...",
      role: "أنا...",
      roleCustomer: "عاشق الطعام",
      roleProvider: "طاهٍ منزلي",
      wilaya: "الولاية",
      wilayaPlaceholder: "اختر ولايتك",
      submit: "انضم إلى قائمة الانتظار",
      submitting: "جاري الإرسال...",
      success: "أنت في القائمة! 🎉",
      successMessage:
        "سنتواصل معك فور إطلاق ماكلتنا في منطقتك. شكراً على اهتمامك!",
      error: "حدث خطأ ما. يرجى المحاولة مجدداً.",
    },
    footer: {
      tagline: "طعام منزلي صحي قريب منك",
      contact: "تواصل معنا",
      email: "contact@makletna.com",
      social: "تابعنا",
      instagram: "@makletna",
      madeIn: "DZAIR MADE",
      rights: "جميع الحقوق محفوظة.",
    },
  },

  fr: {
    nav: {
      appName: "Makletna",
      features: "Fonctionnalités",
      howItWorks: "Comment ça marche",
      register: "S'inscrire",
    },
    hero: {
      badge: "Bientôt disponible",
      title: "Makletna",
      arabicName: "ماكلتنا",
      tagline: "Découvrez la cuisine maison saine près de chez vous",
      description:
        "Makletna vous connecte à des cuisiniers passionnés dans votre quartier. Des plats algériens sains et traditionnels — faits maison, livrés frais à votre porte.",
      cta: "Rejoindre la liste d'attente",
      secondary: "En savoir plus",
      comingSoon: "Bientôt sur",
      appTagline: "Bientôt disponible",
    },
    features: {
      sectionLabel: "Fonctionnalités",
      title: "Tout ce dont vous avez besoin",
      subtitle: "Une app qui vous propose de la cuisine maison saine, préparée par des cuisiniers proches de vous",
      items: [
        {
          icon: "utensils",
          title: "Repas Maison Sains & Authentiques",
          description:
            "Savourez des plats faits maison, sains et préparés avec des ingrédients frais selon des recettes algériennes traditionnelles.",
        },
        {
          icon: "map-pin",
          title: "Trouvez des Cuisiniers Près de Vous",
          description:
            "Parcourez les cuisiniers proches de vous sur une carte interactive et découvrez une cuisine saine et traditionnelle dans votre quartier.",
        },
        {
          icon: "package",
          title: "Suivi en Temps Réel",
          description:
            "Suivez votre commande de la préparation à la livraison avec des mises à jour en direct à chaque étape.",
        },
        {
          icon: "heart",
          title: "Soutenir les Cuisiniers Locaux",
          description:
            "Chaque commande soutient directement un cuisinier local et l'aide à développer son activité culinaire.",
        },
      ],
    },
    howItWorks: {
      sectionLabel: "Comment ça marche",
      title: "Sain, Traditionnel & Délicieux",
      subtitle: "De la vraie cuisine maison par vos voisins — fraîche, saine et pleine de saveurs",
      customers: {
        title: "Pour les Gourmands",
        steps: [
          { step: "01", title: "Trouvez des Cuisiniers Proches", description: "Parcourez les cuisiniers maison près de chez vous et explorez leurs menus sains et traditionnels sur la carte ou en liste." },
          { step: "02", title: "Passer Votre Commande", description: "Choisissez vos plats, personnalisez votre commande et payez en toute sécurité." },
          { step: "03", title: "Déguster & Évaluer", description: "Recevez votre repas fait maison, sain et frais, et partagez votre expérience." },
        ],
      },
      providers: {
        title: "Pour les Cuisiniers Maison",
        steps: [
          { step: "01", title: "Proposez Votre Cuisine", description: "Créez votre profil, ajoutez vos plats sains et traditionnels et définissez vos horaires." },
          { step: "02", title: "Accepter les Commandes", description: "Recevez des commandes de clients proches de vous et gérez-les en temps réel." },
          { step: "03", title: "Cuisiner & Gagner", description: "Préparez les plats savoureux que vous aimez et fidélisez une communauté de clients." },
        ],
      },
    },
    propose: {
      sectionLabel: "Notre Promesse",
      title: "Ce Que Nous Proposons",
      description:
        "Makletna est fondée sur une conviction simple : la cuisine la plus saine et la plus savoureuse est celle du foyer. Nous connectons ceux qui aiment cuisiner avec ceux qui cherchent un repas vrai, traditionnel et sain — pour créer une communauté ancrée dans le patrimoine culinaire algérien.",
      stats: [
        { value: "100%", label: "Fait maison" },
        { value: "🇩🇿", label: "Fait en Algérie" },
        { value: "Bientôt", label: "Lancement à Alger" },
      ],
    },
    form: {
      sectionLabel: "Accès Anticipé",
      title: "Soyez Parmi les Premiers",
      subtitle:
        "Inscrivez votre intérêt maintenant et obtenez un accès exclusif anticipé lors de notre lancement à Alger.",
      name: "Nom Complet",
      namePlaceholder: "Votre nom",
      email: "Adresse Email",
      emailPlaceholder: "votre@email.com",
      phone: "Numéro de Téléphone (optionnel)",
      phonePlaceholder: "+213 ...",
      role: "Je suis...",
      roleCustomer: "Gourmand",
      roleProvider: "Cuisinier Maison",
      wilaya: "Wilaya",
      wilayaPlaceholder: "Sélectionnez votre wilaya",
      submit: "Rejoindre la Liste d'Attente",
      submitting: "Envoi en cours...",
      success: "Vous êtes sur la liste ! 🎉",
      successMessage:
        "Nous vous contacterons dès le lancement de Makletna dans votre région. Merci de votre intérêt !",
      error: "Une erreur s'est produite. Veuillez réessayer.",
    },
    footer: {
      tagline: "Cuisine Maison Saine Près de Chez Vous",
      contact: "Contact",
      email: "contact@makletna.com",
      social: "Suivez-Nous",
      instagram: "@makletna",
      madeIn: "DZAIR MADE",
      rights: "Tous droits réservés.",
    },
  },
} as const;

export type Translations = typeof translations.en;
