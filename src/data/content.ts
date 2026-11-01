export type Language = "ar" | "en";

export interface ImpactMetric {
  id: string;
  value: string;
  numericValue?: number;
  period: { ar: string; en: string };
  label: { ar: string; en: string };
  context: { ar: string; en: string };
  isHighlight?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  category: { ar: string; en: string };
  organization?: { ar: string; en: string };
  role: { ar: string; en: string };
  period: { ar: string; en: string };
  status: { ar: string; en: string };
  statusType: "completed" | "in-progress" | "under-development" | "proposal" | "concept";
  overview: { ar: string; en: string };
  problem: { ar: string; en: string };
  myRole: { ar: string; en: string };
  approach: { ar: string[]; en: string[] };
  evidenceResults: { ar: string; en: string };
  metrics?: { label: { ar: string; en: string }; value: string }[];
  tags: string[];
  externalLinks?: { label: { ar: string; en: string }; url: string }[];
  images: {
    src: string;
    alt: { ar: string; en: string };
    caption?: { ar: string; en: string };
    isFeatured?: boolean;
  }[];
}

export interface TimelineEntry {
  id: string;
  role: { ar: string; en: string };
  organization: { ar: string; en: string };
  location: { ar: string; en: string };
  period: { ar: string; en: string };
  current?: boolean;
  type: "environmental" | "marine" | "digital" | "documentation";
  responsibilities: { ar: string[]; en: string[] };
  achievements?: { ar: string; en: string };
  tags: string[];
}

export interface Credential {
  id: string;
  title: { ar: string; en: string };
  issuer: { ar: string; en: string };
  date: { ar: string; en: string };
  year: number;
  category: "leadership" | "environmental" | "marine" | "skills";
  image?: string;
  description?: { ar: string; en: string };
}

export const siteContent = {
  meta: {
    name: {
      ar: "إسلام حمدان",
      en: "Islam Hamdan",
    },
    location: {
      ar: "طرابلس، ليبيا",
      en: "Tripoli, Libya",
    },
    headline: {
      ar: "مسؤول مشاريع البيئة والتنمية المستدامة | طالب دراسات عليا في علوم البحار | الابتكار التقني والمجتمعي",
      en: "Environmental & Sustainable Development Project Officer | Marine Science Postgraduate Student | EdTech & Civic Innovation",
    },
    positioningStatement: {
      ar: "«أربط بين المعرفة العلمية، والتنفيذ العملي للمشاريع، والتوثيق المنظم، والابتكار الرقمي لتحويل المبادرات البيئية والمجتمعية إلى أعمال واضحة وقابلة للمتابعة وقياس الأثر.»",
      en: "“I connect scientific understanding, practical project delivery, structured documentation, and digital innovation to help turn environmental and community initiatives into organized, measurable work.”",
    },
    contact: {
      email: "islamhamdan51@gmail.com",
      academicEmail: "i.hamdan@uot.edu.ly",
      phoneDisplay: "+218 091-4061363",
      whatsappUrl: "https://wa.me/218914061363", // Trunk 0 removed!
      linkedinUrl: "https://www.linkedin.com/in/islam-hamdan/",
      cvDownloadPath: "/cv/Islam_Hamdan_CV.pdf",
    },
    nav: {
      home: { ar: "الرئيسية", en: "Home" },
      about: { ar: "نبذة عني", en: "About" },
      impact: { ar: "الأثر الموثق", en: "Impact" },
      projects: { ar: "المشاريع", en: "Projects" },
      experience: { ar: "المسيرة المهنية", en: "Experience" },
      research: { ar: "البحث والعلوم", en: "Marine Science" },
      credentials: { ar: "المؤهلات والشهادات", en: "Credentials" },
      contact: { ar: "تواصل معي", en: "Contact" },
      downloadCv: { ar: "تحميل السيرة الذاتية", en: "Download CV" },
    },
  },

  hero: {
    tagline: {
      ar: "من السواحل إلى القمم الشجرية: الأثر البيئي، علوم البحار، والابتكار الرقمي",
      en: "From Coastlines to Canopies: Environmental Impact, Marine Science & Digital Innovation",
    },
    intro: {
      ar: "مسؤول مشاريع بيئية وموثق محترف في طرابلس، أجمع بين الرصد العلمي للنظم الساحلية والتنفيذ الميداني لمشاريع التشجير والتنمية المستدامة، مع توظيف الأنظمة الرقمية لتتبع الأثر وتوثيقه بدقة.",
      en: "Environmental project coordinator and documentation specialist based in Tripoli, bridging marine scientific observation, terrestrial afforestation delivery, and pragmatic digital systems to measure and scale environmental impact.",
    },
    cta: {
      primary: { ar: "استكشف المشاريع", en: "Explore Projects" },
      secondary: { ar: "تحميل السيرة الذاتية", en: "Download CV (PDF)" },
      tertiary: { ar: "تواصل معي", en: "Contact Me" },
    },
    coordinates: "32°53'14\"N 13°11'19\"E — Tripoli, Mediterranean Basin",
  },

  impactData: {
    title: {
      ar: "أرقام الأثر الميداني الموثقة",
      en: "Verified Field Impact Outcomes",
    },
    subtitle: {
      ar: "بيانات مستخرجة وموثقة من الموسم الأول لمشروع غرسة ومنظومة التتبع الرقمية",
      en: "Audited operational results from Gharsa Project Season 1 & digital tracking infrastructure",
    },
    metrics: [
      {
        id: "trees-planted",
        value: "4,589",
        numericValue: 4589,
        period: { ar: "الموسم الأول (2025–2026)", en: "Season 1 (2025–2026)" },
        label: { ar: "شجرة مزروعة ميدانياً", en: "Trees Field-Planted" },
        context: {
          ar: "تم غرسها ومتابعتها ميدانياً عبر حملات تشجير منظمة في بيئات تعليمية ومجتمعية",
          en: "Field-planted and supervised across systematic afforestation campaigns in school and municipal grounds",
        },
        isHighlight: true,
      },
      {
        id: "municipalities",
        value: "11",
        numericValue: 11,
        period: { ar: "الموسم الأول", en: "Season 1" },
        label: { ar: "بلديات ليبية شملها المشروع", en: "Libyan Municipalities" },
        context: {
          ar: "تنسيق رسمي وتنفيذي مباشر مع الإدارات المحلية وفرق العمل الميدانية",
          en: "Direct operational coordination with local municipal administrations and regional teams",
        },
      },
      {
        id: "students-reached",
        value: "1,508",
        numericValue: 1508,
        period: { ar: "الموسم الأول", en: "Season 1" },
        label: { ar: "طالب وطالبة في حملات التوعية", en: "Students Reached" },
        context: {
          ar: "ورش عمل توعوية وتفاعلية حول التصحر، وأهمية الغطاء النباتي، ورعاية الأشجار",
          en: "Interactive environmental education on desertification, tree stewardship, and local green cover",
        },
      },
      {
        id: "volunteers-supervised",
        value: "+60",
        numericValue: 60,
        period: { ar: "الموسم الأول", en: "Season 1" },
        label: { ar: "متطوعاً بإشراف وتنسيق ميداني", en: "Volunteers Supervised" },
        context: {
          ar: "إدارة مهام وتوزيع الفرق الميدانية وتدريب الكوادر الشبابية على عمليات الغرس",
          en: "Team delegation, safety protocols, and hands-on sapling planting supervision",
        },
      },
      {
        id: "volunteer-hours",
        value: "+100",
        numericValue: 100,
        period: { ar: "ساعات موثقة رسمياً", en: "Verified Hours" },
        label: { ar: "ساعة عمل تطوعي ميداني", en: "Field Volunteer Hours" },
        context: {
          ar: "توجت بنيل جائزة المتطوع المتميز بالمركز الأول على مستوى منظمة رحلة",
          en: "Recognized with the Outstanding Volunteer Award — First Place at Rehla",
        },
      },
    ] as ImpactMetric[],

    qrInfrastructure: {
      count: "+6,000",
      label: {
        ar: "شتلة مزروعة وموثقة برموز QR فريدة",
        en: "Planted Seedlings Documented with Unique QR Codes",
      },
      note: {
        ar: "شتلات مزروعة بالفعل في مواقع متعددة، تحمل كل شتلة بطاقة تعريف رقمية برمز QR مسجل لمتابعة حالتها ونموها عبر منصة غرسة (بيانات مدخلة وموثقة في سجلات المشروع، منفصلة تماماً عن إجمالي الغرس للموسم الأول).",
        en: "Active planted seedlings bearing individual physical QR tags linked to digital records on the Gharsa platform for growth and lifecycle monitoring (project record status; maintained strictly distinct from Season 1 totals).",
      },
      platformUrl: "https://gharsa.ly/",
    },

    futurePlanning: {
      target: "8,000 – 10,000",
      label: {
        ar: "المستهدف التخطيطي للموسم الثاني (هدف قيد الإعداد)",
        en: "Season 2 Strategic Planning Target (In-Preparation Objective)",
      },
      note: {
        ar: "مستهدف مرحلي مخطط للموسم القادم قيد التحضير الميداني واللوجستي، ويُعرض هنا كهدف تخطيطي مستقبلي وليس كإنجاز مكتمل.",
        en: "Forward planning operational objective currently under logistic structuring; explicitly presented as a future target, not an achieved outcome.",
      },
    },
  },

  about: {
    title: { ar: "السيرة الذاتية والرؤية", en: "About & Professional Vision" },
    subtitle: {
      ar: "تقاطع العلوم البحرية والتنفيذ الميداني مع التقنيات الرقمية والعمل المجتمعي",
      en: "Connecting marine science, on-the-ground execution, digital tools, and civic service",
    },
    paragraphs: {
      ar: [
        "إسلام حمدان، مسؤول مشاريع البيئة والتنمية المستدامة في مشروع غرسة التابع لمنظمة رحلة للتنمية المستدامة، وطالب دراسات عليا ضمن برنامج علوم البحار بجامعة طرابلس.",
        "أمتلك خبرة مهنية في الكتابة والتوثيق وتنسيق المشاريع، إلى جانب خبرة ميدانية في تنسيق البرامج البيئية والمجتمعية، وتنظيم العمل التطوعي، ومتابعة التنفيذ وإعداد التقارير.",
        "بدأت تجربتي مع مشروع غرسة من العمل التطوعي والإشراف الميداني. وخلال الموسم الأول، أسهمت في تنسيق جهود زراعة الأشجار والتوعية البيئية عبر 11 بلدية، حيث سُجلت زراعة 4,589 شجرة والوصول إلى 1,508 طلاب وطالبات. وحصلت على جائزة المتطوع المتميز بالمركز الأول بعد إتمام أكثر من 100 ساعة تطوعية موثقة والإشراف على أكثر من 60 متطوعًا، ثم انتقلت إلى منصب مسؤول المشروع.",
        "كما أسست مبادرة الأفق الأزرق المعنية بالاستدامة البحرية، وأعمل على تطوير منصة منارة بوصفها حلًا تقنيًا لتنظيم الإدارة والمتابعة في حلقات تحفيظ القرآن.",
        "وأشارك في العمل الشبابي والمجتمعي ضمن المجلس المحلي للشباب ببلدية طرابلس المركز، مع اهتمام بالمبادرات العملية التي تستجيب لاحتياجات المجتمع.",
        "يجمع عملي بين المعرفة العلمية، والتنفيذ الميداني، والتوثيق المنظم، واستخدام التقنية لتطوير أساليب العمل والمتابعة.",
      ],
      en: [
        "Islam Hamdan is an Environmental and Sustainable Development Project Officer working on the Gharsa Project at Rehla for Sustainable Development, and a postgraduate student in Marine Science at the University of Tripoli.",
        "His experience combines professional writing and documentation with practical coordination of environmental and community initiatives, volunteer engagement, field operations, reporting, and project follow-up.",
        "His work with Gharsa progressed from volunteering and field supervision to project management responsibilities. During the first season, the project recorded 4,589 trees planted across 11 Libyan municipalities and environmental awareness activities reaching 1,508 students. Islam received the Outstanding Volunteer Award — First Place, completed more than 100 verified volunteer hours, and supervised more than 60 volunteers before progressing to the Project Officer role.",
        "He is also the founder of Blue Horizon, a marine sustainability initiative, and the founder and product lead of Manarah, an educational technology platform intended to improve administration and tracking for Quranic study circles.",
        "Alongside his environmental and technology interests, he participates in youth and civic activities through the Local Youth Council associated with Tripoli Center Municipality.",
        "His work brings together scientific understanding, practical project delivery, structured documentation, community engagement, and digital problem-solving.",
      ],
    },
    pillars: [
      {
        id: "env-management",
        title: { ar: "إدارة المشاريع البيئية", en: "Environmental Project Coordination" },
        desc: {
          ar: "تخطيط وتنفيذ حملات التشجير ومكافحة التصحر، والتنسيق مع البلديات والمدارس، وإدارة شبكات التطوع الميداني.",
          en: "Planning afforestation drives, municipal coordination, school engagement, and managing volunteer field deployments.",
        },
      },
      {
        id: "marine-science",
        title: { ar: "علوم البحار والتنوع البيولوجي", en: "Marine Science & Biodiversity" },
        desc: {
          ar: "دراسة النظم البيئية الساحلية في حوض المتوسط، وتتبع مخزون المصائد، ورصد التنوع الحيوي للأنواع البحرية.",
          en: "Coastal Mediterranean ecosystem research, fish-market bio-indicator surveys, and marine habitat conservation.",
        },
      },
      {
        id: "digital-solutions",
        title: { ar: "الأنظمة والمنتجات الرقمية", en: "Digital Systems & Product Building" },
        desc: {
          ar: "تطوير تطبيقات الويب وقواعد البيانات، ودمج رموز QR في المتابعة، وهندسة نماذج البيانات لتحسين الكفاءة التشغيلية.",
          en: "Web application architecture (Next.js, Prisma, PostgreSQL), QR tracking workflows, and operational digitisation.",
        },
      },
      {
        id: "documentation-civic",
        title: { ar: "التوثيق الاحترافي والمشاركة المجتمعية", en: "Documentation & Civic Engagement" },
        desc: {
          ar: "أكثر من 8 سنوات في الصياغة الاحترافية للتقارير والوثائق الرسمية، والتمثيل الشبابي في المجلس المحلي للشباب.",
          en: "8+ years in professional documentation, institutional writing, and civic youth representation in Tripoli Center.",
        },
      },
    ],
  },

  projects: [
    {
      id: "gharsa",
      slug: "gharsa-project",
      title: { ar: "مشروع غرسة الوطني للتشجير", en: "Gharsa National Afforestation Project" },
      subtitle: {
        ar: "مبادرة بيئية كبرى للتشجير ومكافحة التصحر تجمع بين العمل الميداني والتتبع الرقمي",
        en: "Large-scale afforestation and anti-desertification initiative coupling field planting with digital tracking",
      },
      category: { ar: "إدارة مشاريع بيئية", en: "Environmental Project Management" },
      organization: { ar: "منظمة رحلة للتنمية المستدامة", en: "Rehla for Sustainable Development" },
      role: { ar: "مسؤول المشروع (حالياً) | مشرف ميداني ومتطوع (سابقاً)", en: "Project Officer (Present) | Field Supervisor & Volunteer (Prior)" },
      period: { ar: "نوفمبر 2025 – مستمر", en: "Nov 2025 – Present" },
      status: { ar: "نشط ميدانياً — تنفيذ الموسم الأول والتجهيز للموسم الثاني", en: "Active Field Operations — Season 1 Delivered, Season 2 In Planning" },
      statusType: "in-progress",
      overview: {
        ar: "مشروع وطني رائد أطلقته منظمة رحلة لمكافحة التصحر واستعادة الغطاء النباتي في ليبيا. يقوم المشروع على زراعة الأشجار الملائمة للمناخ المحلي في المدارس والبلديات والمساحات العامة، مع إشراك المجتمع والطلاب في عمليات الرعاية والري والتوعية، ودمج التقنية الرقمية عبر رموز QR لتتبع الشتلات.",
        en: "A flagship national environmental program by Rehla for Sustainable Development tackling desertification and urban green space depletion in Libya. It blends climate-resilient planting across schools and municipalities with volunteer mobilization and digital QR monitoring for seedling health.",
      },
      problem: {
        ar: "تواجه ليبيا تحديات حادة في التصحر وتدهور الأراضي ونقص المساحات الخضراء الحضرية. كانت المشكلة المزمنة في مشاريع الغرس التقليدية هي غياب المتابعة بعد الزراعة، وانعدام الربط مع المجتمعات المدرسية المحيطة، وصعوبة قياس معدلات البقاء والأثر بدقة.",
        en: "Libya experiences severe desertification, land degradation, and sparse municipal greenery. Traditional planting campaigns historically suffered from zero post-planting follow-up, negligible community ownership, and an absence of structured tracking systems to audit sapling survival.",
      },
      myRole: {
        ar: "تدرجت في المشروع من التطوع الميداني والإشراف على فرق العمل إلى تولي منصب مسؤول المشروع؛ وتضمنت مسؤولياتي: التخطيط العملياتي، والتنسيق المباشر مع 11 بلدية وإدارات التعليم، وتوزيع المهام الميدانية لأكثر من 60 متطوعاً، والإشراف على إعداد وتوثيق بطاقات الـ QR للشتلات، وكتابة التقارير الدورية للأداء.",
        en: "Progressed from hands-on volunteer and field team supervisor to official Project Officer. Responsible for operational planning, municipal liaison across 11 districts, directing 60+ volunteers on planting days, managing physical QR tag deployment and follow-up data, and authoring rigorous progress reports.",
      },
      approach: {
        ar: [
          "تنسيق البلديات والمدارس: عقد شراكات ميدانية واختيار المواقع الصالحة للزراعة ونظم الري المتاحة.",
          "ورش التوعية البيئية: تصميم جلسات تعليمية للأطفال والطلاب حول دور الأشجار في التوازن البيئي ودورة الكربون.",
          "تنظيم العمل التطوعي: بناء هيكل تدريبي للمتطوعين على تقنيات الحفر الصحيح، وتثبيت الدعامات، والري الأولي.",
          "منظومة التتبع الرقمي: ربط الشتلات ببطاقات QR فريدة تمكّن من الوصول المباشر لسجل الشتلة عبر منصة غرسة.",
          "التوثيق وإعداد التقارير: توثيق دقيق لكل فعالية بالصور والبيانات المكانية ونسب مشاركة الطلاب.",
        ],
        en: [
          "Municipal & School Partnerships: Identifying viable planting plots, assessing soil types, and establishing water access.",
          "Environmental Literacy: Facilitating educational workshops for students on local ecosystems and tree care.",
          "Volunteer Mobilization: Training and leading volunteer crews in proper excavation, sapling positioning, and initial irrigation.",
          "Digital QR Integration: Deploying physical QR codes attached to seedlings to allow online profile lookup via Gharsa.",
          "Structured Operational Reporting: Archiving high-resolution field documentation, geo-data, and engagement metrics.",
        ],
      },
      evidenceResults: {
        ar: "حقق الموسم الأول غرس 4,589 شجرة عبر 11 بلدية، وتوعية 1,508 طلاب، وإشراف على أكثر من 60 متطوعاً بإجمالي ساعات تجاوز 100 ساعة موثقة، مع تسجيل أكثر من 6,000 شتلة مزروعة ببطاقات QR، ونيل جائزة المتطوع المتميز بالمركز الأول.",
        en: "Season 1 completed with 4,589 trees planted across 11 municipalities, 1,508 students engaged, 60+ volunteers coordinated across 100+ field hours, 6,000+ seedlings tracked with QR codes, and awarded the First Place Outstanding Volunteer Award.",
      },
      metrics: [
        { label: { ar: "شجرة مزروعة (الموسم 1)", en: "Planted Trees (Season 1)" }, value: "4,589" },
        { label: { ar: "بلديات مغطاة", en: "Municipalities" }, value: "11" },
        { label: { ar: "طلاب مشاركون بالتوعية", en: "Students Reached" }, value: "1,508" },
        { label: { ar: "شتلات موثقة بـ QR", en: "QR-Tagged Seedlings" }, value: "+6,000" },
      ],
      tags: ["Afforestation", "Project Management", "Field Operations", "Environmental Education", "QR Workflows", "Civic Engagement"],
      externalLinks: [
        { label: { ar: "منصة غرسة الرقمية", en: "Gharsa Platform" }, url: "https://gharsa.ly/" },
        { label: { ar: "منظمة رحلة للتنمية المستدامة", en: "Rehla for Sustainable Development" }, url: "https://www.rehlaa.org/" },
      ],
      images: [
        {
          src: "/images/gharsa-field-irrigation.jpg",
          alt: { ar: "إسلام حمدان والمتطوعون يجهزون شبكات الري والشتلات", en: "Islam Hamdan and volunteers installing irrigation lines and seedlings" },
          caption: { ar: "العمل الميداني لتجهيز خطوط الري وغرس الشتلات ضمن مشروع غرسة", en: "Field irrigation setup and sapling care during Gharsa operations" },
          isFeatured: true,
        },
        {
          src: "/images/gharsa-students-planting.jpg",
          alt: { ar: "إسلام حمدان مع طلاب المدارس يحملون شتلة موثقة برمز QR", en: "Islam Hamdan with schoolchildren holding a QR-tagged seedling" },
          caption: { ar: "إشراك الطلاب الميداني وزراعة شتلة مزودة ببطاقة QR للتعريف والتتبع", en: "Hands-on student planting featuring a QR-coded identification tag" },
        },
        {
          src: "/images/gharsa-qr-students-banner.jpg",
          alt: { ar: "إسلام حمدان مع الطلاب أمام لافتة غرسة المزودة برمز QR وراية رحلة", en: "Islam Hamdan with youth in front of the Gharsa QR roll-up and Rehla flag" },
          caption: { ar: "توثيق الفعاليات الميدانية مع لافتات التعريف برمز QR لمنصة غرسة", en: "Field event documentation with Gharsa QR tracking banners" },
        },
        {
          src: "/images/award-volunteer-first-place.jpg",
          alt: { ar: "إسلام حمدان يتسلم جائزة المتطوع المتميز بالمركز الأول مع عرض بيانات الأثر", en: "Islam Hamdan receiving the Outstanding Volunteer Award First Place" },
          caption: { ar: "التكريم بالمركز الأول وعرض نسب أثر المشروع على وعي الطلاب بالبيئة", en: "First-place recognition ceremony showcasing student environmental impact data" },
        },
        {
          src: "/images/gharsa-school-crowd.jpg",
          alt: { ar: "حشد طلابي واسع في نشاط بيئي مدرسي ضمن حملات غرسة", en: "School student gathering during Gharsa environmental awareness day" },
          caption: { ar: "الوصول إلى أكثر من 1,508 طلاب وطالبات في المدارس الليبية", en: "Reaching over 1,508 schoolchildren across Libyan municipal schools" },
        },
        {
          src: "/images/gharsa-scouts-appreciation.jpg",
          alt: { ar: "إسلام حمدان مع فوج الكشافة متسلماً شهادة شكر وتقدير لمشروع غرسة", en: "Islam Hamdan with scouts holding Gharsa project appreciation certificate" },
          caption: { ar: "التعاون مع أفواج الكشافة والمرشدات في أنشطة خدمة البيئة", en: "Collaborative engagement with scout troops in environmental stewardship" },
        },
      ],
    },

    {
      id: "blue-horizon",
      slug: "blue-horizon-initiative",
      title: { ar: "مبادرة الأفق الأزرق للاستدامة البحرية", en: "Blue Horizon Marine Sustainability Initiative" },
      subtitle: {
        ar: "مبادرة مجتمعية تركز على حماية النظم البيئية البحرية والساحلية لجنوب المتوسط وتفعيل دور الغواصين والصيادين",
        en: "Community marine initiative dedicated to Mediterranean coastal conservation, freediving engagement, and artisanal fisheries dialogue",
      },
      category: { ar: "علوم البحار والعمل البيئي", en: "Marine Science & Coastal Conservation" },
      role: { ar: "مؤسس ومنسق المبادرة", en: "Founder & Program Lead" },
      period: { ar: "يناير 2026 – مستمر", en: "Jan 2026 – Present" },
      status: { ar: "مبادرة مجتمعية نشطة — جلسات توعية وحملات نظافة شاطئية", en: "Active Community Initiative — Outreach sessions & coastal cleanups" },
      statusType: "in-progress",
      overview: {
        ar: "مبادرة بيئية مجتمعية أسسها إسلام حمدان استناداً إلى خلفيته الأكاديمية في علوم البحار وشغفه بالغوص الحر (Freediving). تهدف المبادرة إلى رفع الوعي العام بالتنوع الحيوي للبحر المتوسط، وتسليط الضوء على التحديات التي تواجه مجتمعات الصيادين المحليين، وتنظيم حملات نظافة ميدانية للشواطئ والموائل الحساسة.",
        en: "A community-rooted marine initiative founded by Islam Hamdan, leveraging his academic specialization in marine biology and active involvement in the local freediving and spearfishing community. Focused on raising public literacy around Mediterranean marine biodiversity, engaging artisanal fishermen on habitat challenges, and orchestrating coastal clean-up expeditions.",
      },
      problem: {
        ar: "تعاني السواحل الليبية من نقص الدراسات التشاركية مع الصيادين، وتراكم النفايات البلاستيكية والمعدات البحرية المهملة (Ghost gear)، وضعف الوعي المجتمعي بأهمية حماية الشعاب والموائل الساحلية الضحلة من الصيد الجائر والملوثات.",
        en: "The southern Mediterranean coastline faces mounting pressures from plastic debris, discarded fishing gear, coastal development, and fragmented dialogue between scientific researchers and artisanal fishing communities.",
      },
      myRole: {
        ar: "تأسيس المبادرة وتطوير محاورها التوعوية، وربط طلاب علوم البحار بالمجتمع الميداني، والتواصل المباشر مع الصيادين للاستماع لاحتياجاتهم ونقل أولوياتهم، والمشاركة في تنظيم حملات إزالة الملوثات الساحلية.",
        en: "Conceptualized and established the initiative; formulated educational messaging bridging academic marine zoology with community realities; engaged fishermen directly to highlight sector priorities; and organized shoreline waste-mitigation days.",
      },
      approach: {
        ar: [
          "الحوار مع الصيادين: لقاءات ميدانية لمناقشة التغيرات في المصائد والمخزون السمكي وظهور الأنواع الغازية.",
          "تفعيل مجتمع الغواصين: الاستفادة من مهارات الغواصين في الرصد البصري للشواطئ ورفع المخلفات العالقة.",
          "التوعية البحرية للشباب: صياغة مواد علمية مبسطة حول بيولوجيا المتوسط وأهمية الحفاظ على النظم البحرية.",
          "حملات تنظيف الشواطئ: تنظيم أيام تطوعية لجمع وفرز المخلفات البلاستيكية على الشريط الساحلي لطرابلس.",
        ],
        en: [
          "Fishermen Dialogue: Field interviews examining shifting fish stocks and invasive alien species observations.",
          "Freediver Mobilization: Harnessing local divers' sub-surface observational skills for reef and shoreline monitoring.",
          "Youth Marine Literacy: Producing accessible scientific summaries explaining regional marine trophic webs.",
          "Coastal Cleanups: Mobilizing volunteer cohorts to clear and categorize marine plastics from sensitive coastal segments.",
        ],
      },
      evidenceResults: {
        ar: "تنظيم حملات تنظيف شاطئية ميدانية بمشاركة متطوعين وغواصين، وعقد لقاءات حوارية نوعية مع صيادين محليين، وربط الرؤية العلمية بالمشاركة الميدانية الفعلية.",
        en: "Conducted hands-on coastal clean-ups, initiated dialogue circles with local fishing stakeholders, and fostered youth interest in marine conservation through science-based community outreach.",
      },
      tags: ["Marine Conservation", "Mediterranean Ecology", "Freediving", "Fisheries Dialogue", "Coastal Cleanups", "Community Engagement"],
      images: [
        {
          src: "/images/academic-uot-meeting.jpg",
          alt: { ar: "إسلام حمدان في جلسة علمية بمركز البحوث بجامعة طرابلس", en: "Islam Hamdan attending scientific panel at University of Tripoli" },
          caption: { ar: "المشاركة العلمية في أبحاث التنوع البيولوجي والبيئة البحرية بجامعة طرابلس", en: "Academic participation in biodiversity and marine research proceedings" },
          isFeatured: true,
        },
        {
          src: "/images/islam-portrait.png",
          alt: { ar: "إسلام حمدان - مؤسس مبادرة الأفق الأزرق", en: "Islam Hamdan - Founder of Blue Horizon Initiative" },
          caption: { ar: "الربط بين علوم البحار والدفاع عن استدامة البيئة الساحلية", en: "Bridging marine research with coastal sustainability action" },
        },
      ],
    },

    {
      id: "manarah",
      slug: "manarah-platform",
      title: { ar: "منصة منارة لإدارة حلقات التحفيظ", en: "Manarah Quranic EdTech Platform" },
      subtitle: {
        ar: "نظام رقمي سحابي متكامل لأتمتة الحضور ومتابعة الحفظ وتتبع إنجاز الطلاب باستخدام تقنية QR",
        en: "Full-stack EdTech application streamlining attendance, student records, and memorization tracking via QR codes",
      },
      category: { ar: "الابتكار الرقمي والمنتجات", en: "Digital Products & EdTech" },
      role: { ar: "المؤسس ومسؤول المنتج والمطور الرئيسي", en: "Founder, Product Lead & Full-Stack Developer" },
      period: { ar: "2026 – مستمر", en: "2026 – Present" },
      status: { ar: "قيد التطوير النشط — النواة الأساسية وقاعدة البيانات مكتملة، وجارٍ استكمال تقارير التقييم", en: "Under Active Development — Core DB & QR check-in operational; evaluation dashboards in progress" },
      statusType: "under-development",
      overview: {
        ar: "منصة ويب متخصصة تهدف إلى تحويل الإدارة التقليدية لحلقات تحفيظ القرآن الكريم إلى بيئة رقمية منظمة. تتيح للمشرفين والمعلمين تسجيل بيانات الطلاب، وتوليد بطاقات تعريف برمز QR لكل طالب لتسجيل الحضور الفوري بالكاميرا، ومتابعة جلسات التسميع والتقييمات الأسبوعية بدقة.",
        en: "A dedicated administrative web application digitizing operations for Quranic study circles. Designed to replace paper rosters with structured student profiles, dynamic QR identification for rapid smartphone attendance logging, and structured memorization assessment workflows.",
      },
      problem: {
        ar: "تعتمد معظم مراكز التحفيظ على السجلات الورقية اليدوية، مما يؤدي إلى استنزاف وقت المعلمين في تسجيل الحضور، وفقدان بيانات التطور الفردي للطلاب، وصعوبة إرسال تقارير دورية لأولياء الأمور أو قياس نسب الانضباط بدقة.",
        en: "Quranic educational circles predominantly rely on handwritten paper logs. This wastes valuable class time on manual roll calls, loses historical student progression data, and prevents administrators from extracting actionable attendance analytics.",
      },
      myRole: {
        ar: "صاحب الفكرة ومطور النظام؛ قمت بهندسة مخطط قاعدة البيانات باستخدام Prisma، وبناء واجهات المستخدم التفاعلية بتقنيات Next.js و TypeScript، ودمج قارئ QR عبر مكتبة html5-qrcode لتسجيل الحضور السريع.",
        en: "Conceived the architecture and led full-stack engineering: designed relational data models in Prisma/PostgreSQL, developed responsive Next.js frontend interfaces in TypeScript, and integrated client-side QR scanning workflows.",
      },
      approach: {
        ar: [
          "هندسة البيانات: تصميم جداول مترابطة تغطي المستخدمين، والطلاب، والمدرسين، والجلسات، والحضور، والتقييمات اليومية والأسبوعية.",
          "توليد ومسح QR: نظام توليد تلقائي لرموز QR للطلاب مع واجهة مسح سريعة عبر المتصفح باستخدام الكاميرا.",
          "الصلاحيات والأدوار: بناء نظام مصادقة محكم يفصل بين المشرف العام، والمعلم، وولي الأمر.",
          "سجلات الحفظ والمراجعة: جداول مخصصة لمتابعة الأجزاء والسور وتوثيق التقييمات التراكمية.",
        ],
        en: [
          "Schema Architecture: Relational Prisma schema modeling Users, Students, Teachers, Study Sessions, Attendance events, and Evaluations.",
          "QR Workflows: Automated QR badge generation paired with camera-based client-side scanning for rapid roll call.",
          "Role-Based Access: Secure authentication system distinguishing administrators, teachers, and student guardians.",
          "Progress Telemetry: Granular models tracking daily memorization verses, review accuracy, and weekly progress scores.",
        ],
      },
      evidenceResults: {
        ar: "بناء بنية النظام البرمجية بنجاح واكتمال نماذج Prisma الأساسية (User, Student, Teacher, Session, Attendance, Evaluation)، مع تفعيل مسار الحضور بالـ QR محلياً واختبار تدفقات العمل الأساسية.",
        en: "Successfully implemented core data schema in Prisma/PostgreSQL, validated browser-based QR scanning pipeline, and built responsive administration screens currently under local validation.",
      },
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "QR Verification", "System Architecture"],
      metrics: [
        { label: { ar: "حالة النواة الأساسية", en: "Core Architecture" }, value: "مكتملة (Built)" },
        { label: { ar: "نظام حضور QR", en: "QR Attendance" }, value: "شغال (Operational)" },
        { label: { ar: "تقارير التقييم", en: "Evaluation Reports" }, value: "قيد الإنجاز (In Dev)" },
      ],
      images: [
        {
          src: "/images/rehla-presentation.jpg",
          alt: { ar: "إسلام حمدان يقدم حلولاً ونماذج عمل في منظمة رحلة", en: "Islam Hamdan presenting operational models at Rehla" },
          caption: { ar: "توظيف الحلول الرقمية والنماذج المنظمة في إدارة ومتابعة المشاريع", en: "Leveraging digital structures and organized workflows in project delivery" },
          isFeatured: true,
        },
      ],
    },
  ] as ProjectCaseStudy[],

  civicInitiatives: [
    {
      id: "tripoli-bridge-of-work",
      title: { ar: "مبادرة جسر عمل طرابلس", en: "Tripoli Bridge of Work Initiative" },
      status: { ar: "مقترح تصوري وتخطيطي", en: "Conceptual Proposal" },
      statusType: "proposal",
      category: { ar: "تمكين الشباب وسوق العمل", en: "Youth Economic Empowerment" },
      desc: {
        ar: "مقترح مبادرة مجتمعية تهدف إلى سد الفجوة بين الخريجين الشباب وسوق العمل المحلي في طرابلس، من خلال برامج توجيه مهني مكثفة وربط المتدربين بفرص وظيفية وتدريبية قائمة على المهارات العملية.",
        en: "A conceptual framework bridging the gap between recent university graduates and Tripoli's emerging private/civic job market through vocational mentorship and competency-based placements.",
      },
      role: { ar: "إعداد المقترح والتصميم المفاهيمي", en: "Concept Author & Proposal Developer" },
      badges: ["Youth Employment", "Tripoli Center", "Mentorship Model"],
    },
    {
      id: "plastic-recycling-model",
      title: { ar: "نموذج إدارة وتدوير البلاستيك البلدي", en: "Municipal Plastic Recycling Workflow Model" },
      status: { ar: "دراسة وتخطيط أولي", en: "Research & Planning" },
      statusType: "concept",
      category: { ar: "الاستدامة الحضرية والبيئة", en: "Urban Sustainability" },
      desc: {
        ar: "تصور عملي لنظام فرز وتجميع النفايات البلاستيكية في الأحياء الحضرية ببلدية طرابلس، يعتمد على نقاط تجميع مجتمعية بالشراكة مع رواد الأعمال ومؤسسات المجتمع المدني لتقليل الضغط على المكبات العامة.",
        en: "A researched community collection and sorting model designed for urban Tripoli neighbourhoods, aiming to divert recyclable plastics through micro-entrepreneurship and civic hubs.",
      },
      role: { ar: "البحث وصياغة نموذج التدفق التشغيلي", en: "Research & Workflow Structuring" },
      badges: ["Waste Diversion", "Circular Economy", "Municipal Flow"],
    },
    {
      id: "mansoura-accessibility",
      title: { ar: "تخطيط وتحسين إتاحة الوصول الحضري بالمنصورة", en: "Urban Accessibility Advocacy in Al-Mansoura" },
      status: { ar: "مناصرة مجتمعية وتخطيط", en: "Advocacy & Community Planning" },
      statusType: "proposal",
      category: { ar: "إمكانية الوصول والخدمات الحضرية", en: "Urban Accessibility & Inclusion" },
      desc: {
        ar: "مبادرة رصد ميداني ومناصرة تهدف إلى تعزيز إمكانية الوصول لذوي الإعاقة وكبار السن في شوارع ومرافق محلة المنصورة، عبر تحديد النقاط الحرجة لغياب المنحدرات والممرات الآمنة ورفعها للجهات المعنية.",
        en: "A civic advocacy effort identifying physical barrier hotspots, lack of curb ramps, and pedestrian accessibility deficits across Al-Mansoura district to advocate for inclusive municipal urban planning.",
      },
      role: { ar: "ممثل شباب محلة المنصورة ومعد التقرير", en: "District Youth Representative & Field Auditor" },
      badges: ["Accessibility", "Al-Mansoura", "Civic Rights"],
    },
  ],

  experienceTimeline: [
    {
      id: "exp-gharsa-po",
      role: { ar: "مسؤول المشاريع — مشروع غرسة", en: "Project Officer — Gharsa Project" },
      organization: { ar: "منظمة رحلة للتنمية المستدامة", en: "Rehla for Sustainable Development" },
      location: { ar: "طرابلس، ليبيا", en: "Tripoli, Libya" },
      period: { ar: "يوليو 2026 – مستمر", en: "July 2026 – Present" },
      current: true,
      type: "environmental",
      responsibilities: {
        ar: [
          "قيادة التخطيط العملياتي والتنفيذي لأنشطة التشجير ومكافحة التصحر.",
          "إدارة العلاقات والتنسيق المستمر مع 11 بلدية وإدارات التعليم المحلية.",
          "تنسيق العمليات الميدانية والإشراف على توزيع الفرق اللوجستية وشبكات التطوع.",
          "متابعة برامج رعاية الشتلات واستدامة الري بالتعاون مع إدارات المواقع.",
          "إدارة مسارات التوثيق الرقمي وتتبع بطاقات الـ QR المسجلة للشتلات.",
          "إعداد التقارير الإدارية والفنية لقياس مؤشرات الأداء وضمان جودة التنفيذ.",
        ],
        en: [
          "Directing operational planning and logistics for afforestation campaigns.",
          "Managing active partnerships across 11 municipal administrations and educational sectors.",
          "Leading field deployments, volunteer safety, and task distribution.",
          "Coordinating post-planting sapling maintenance and irrigation protocols.",
          "Supervising digital QR inventory workflows and field verification data.",
          "Authoring executive progress reports and operational KPIs for leadership.",
        ],
      },
      achievements: {
        ar: "قيادة الإعداد الميداني لمستهدفات الموسم الثاني والمحافظة على استمرارية متابعة الشتلات السابقة.",
        en: "Structuring operational blueprints for Season 2 and maintaining active monitoring over existing plantings.",
      },
      tags: ["Operations Leadership", "Municipal Liaison", "Logistics", "Digital Tracking", "Reporting"],
    },
    {
      id: "exp-gharsa-sup",
      role: { ar: "مشرف فريق ميداني ومتطوع — مشروع غرسة (الموسم 1)", en: "Team Supervisor & Volunteer — Gharsa (Season 1)" },
      organization: { ar: "منظمة رحلة للتنمية المستدامة", en: "Rehla for Sustainable Development" },
      location: { ar: "طرابلس وعدة بلديات", en: "Tripoli & Municipalities" },
      period: { ar: "نوفمبر 2025 – يوليو 2026", en: "Nov 2025 – July 2026" },
      type: "environmental",
      responsibilities: {
        ar: [
          "الإشراف الميداني المباشر على فرق المتطوعين في مواقع الغرس والتهيئة.",
          "تنظيم وتيسير ورش التوعية البيئية لطلاب المدارس الابتدائية والإعدادية.",
          "تنسيق توزيع الأدوات والشتلات ومتابعة إجراءات السلامة أثناء العمل الميداني.",
          "توثيق فعاليات الغرس ميدانياً والمساهمة في جمع بيانات بطاقات الـ QR.",
          "إتمام أكثر من 100 ساعة عمل تطوعي موثقة والإشراف على أكثر من 60 متطوعاً.",
        ],
        en: [
          "Direct on-site supervision of volunteer teams during land clearing and planting.",
          "Facilitating environmental awareness workshops for 1,508 school students.",
          "Coordinating equipment distribution, sapling handling, and safety measures.",
          "Field photo-documentation and logging initial QR tracking associations.",
          "Completed 100+ verified volunteer hours and directed over 60 active volunteers.",
        ],
      },
      achievements: {
        ar: "نيل جائزة المتطوع المتميز (المركز الأول) تقديراً للالتزام والأداء الميداني الاستثنائي.",
        en: "Honored with the Outstanding Volunteer Award (First Place) for exceptional commitment and field coordination.",
      },
      tags: ["Field Supervision", "Volunteer Leadership", "Awareness Campaigns", "Award Winner"],
    },
    {
      id: "exp-blue-horizon",
      role: { ar: "مؤسس ومنسق المبادرة", en: "Founder & Program Lead" },
      organization: { ar: "مبادرة الأفق الأزرق للاستدامة البحرية", en: "Blue Horizon Marine Sustainability Initiative" },
      location: { ar: "طرابلس والساحل الغربي", en: "Tripoli & Coastline" },
      period: { ar: "يناير 2026 – مستمر", en: "Jan 2026 – Present" },
      current: true,
      type: "marine",
      responsibilities: {
        ar: [
          "صياغة الرؤية الاستراتيجية لحماية الموائل البحرية الساحلية الليبية.",
          "تنظيم حملات تنظيف شاطئية وتنسيق مشاركة هواة الغوص الحر.",
          "فتح قنوات حوار بناءة مع مجتمعات الصيادين لنقل احتياجاتهم والتوعية بالمخاطر البيئية.",
          "إعداد محتوى علمي وتوعوي يبرز التنوع البيولوجي للبحر الأبيض المتوسط.",
        ],
        en: [
          "Formulating the strategic vision for coastal marine conservation in western Libya.",
          "Organizing beach cleanups leveraging observational skills of local freedivers.",
          "Establishing communication forums with artisanal fishermen regarding ecosystem pressures.",
          "Developing science communication materials spotlighting Mediterranean marine life.",
        ],
      },
      tags: ["Marine Ecology", "Freediving Community", "Fisheries Dialogue", "Conservation"],
    },
    {
      id: "exp-manarah",
      role: { ar: "مؤسس ومسؤول المنتج والمطور", en: "Founder & Product Lead" },
      organization: { ar: "منصة منارة للتقنية التعليمية", en: "Manarah Educational Platform" },
      location: { ar: "طرابلس، ليبيا", en: "Tripoli, Libya" },
      period: { ar: "2026 – مستمر", en: "2026 – Present" },
      current: true,
      type: "digital",
      responsibilities: {
        ar: [
          "تحديد متطلبات المنتج وتصميم تجربة المستخدم لإدارة مراكز التحفيظ.",
          "تطوير الواجهات الأمامية والمسارات الخلفية باستخدام Next.js و TypeScript.",
          "بناء نماذج البيانات ومخطط Prisma للربط مع قواعد بيانات PostgreSQL.",
          "دمج مسار مسح بطاقات الـ QR لتسجيل حضور الطلاب بسرعة وموثوقية.",
        ],
        en: [
          "Defining product requirements and UX journeys for study circle administration.",
          "Developing full-stack web architecture with Next.js, React, and TypeScript.",
          "Designing robust relational schemas with Prisma and PostgreSQL.",
          "Integrating client-side QR scanning engine for high-speed student roll calls.",
        ],
      },
      tags: ["Next.js", "TypeScript", "Prisma", "System Design", "EdTech"],
    },
    {
      id: "exp-freelance-doc",
      role: { ar: "منسق مشاريع وتوثيق مستقل", en: "Freelance Documentation & Project Coordinator" },
      organization: { ar: "عمل حر / مستقل", en: "Self-Employed" },
      location: { ar: "طرابلس، ليبيا", en: "Tripoli, Libya" },
      period: { ar: "أكتوبر 2023 – مستمر", en: "Oct 2023 – Present" },
      current: true,
      type: "documentation",
      responsibilities: {
        ar: [
          "تقديم خدمات الصياغة المهنية للتقارير الفنية والوثائق الإدارية للمؤسسات والعملاء.",
          "مراجعة وتدقيق المخرجات الكتابية لضمان سلامة الهيكل والوضوح واللغة.",
          "تنظيم هياكل المعلومات وتحويل البيانات التشغيلية المعقدة إلى وثائق قابلة للمتابعة.",
          "إدارة المواعيد والتواصل المباشر مع العملاء باستقلالية واحترافية عالية.",
        ],
        en: [
          "Delivering professional report writing and structured technical documentation for clients.",
          "Auditing institutional texts for structural clarity, syntactic precision, and consistency.",
          "Transforming multi-faceted operational data into clear, actionable executive summaries.",
          "Managing client relationships, delivery timelines, and revisions autonomously.",
        ],
      },
      tags: ["Technical Writing", "Information Architecture", "Document Design", "Quality Assurance"],
    },
    {
      id: "exp-writing-specialist",
      role: { ar: "أخصائي كتابة وتوثيق احترافي", en: "Professional Writing & Documentation Specialist" },
      organization: { ar: "مؤسسات متعددة (مركز أوراق، مكتب عالم التصوير، مركز الأصدقاء، شركة البداية)", en: "Multiple Organizations (Awraq, Alam Al-Tasweer, Friends Center, Al-Bidaya)" },
      location: { ar: "طرابلس، ليبيا", en: "Tripoli, Libya" },
      period: { ar: "2015 – سبتمبر 2023", en: "2015 – Sept 2023" },
      type: "documentation",
      responsibilities: {
        ar: [
          "إعداد وصياغة التقارير الإدارية والأكاديمية والوثائق الرسمية بدقة عالية.",
          "مركز أوراق (أكتوبر 2022 – سبتمبر 2023): إدارة وتدقيق الوثائق التخصصية ودعم العملاء.",
          "مكتب عالم التصوير (أكتوبر 2017 – 2021): التوثيق المكتبي وإخراج المطبوعات الرسمية.",
          "مركز الأصدقاء (أبريل – أغسطس 2017): التنسيق الإداري وصياغة المراسلات.",
          "شركة البداية (2015 – 2016): دعم التوثيق وأرشفة البيانات والسجلات.",
          "تطوير سرعة طباعة فائقة ودقة متناهية في التنسيق والمراجعة اللغوية.",
        ],
        en: [
          "Authored high-precision administrative, academic, and organizational reports.",
          "Awraq Center (Oct 2022 – Sept 2023): Document refinement, auditing, and client support.",
          "Alam Al-Tasweer Office (Oct 2017 – 2021): Desktop publishing and institutional documentation.",
          "Friends Center (Apr – Aug 2017): Administrative coordination and formal correspondence.",
          "Al-Bidaya Company (2015 – 2016): Archiving, record keeping, and workflow assistance.",
          "Mastered touch typing and uncompromising structural formatting standards.",
        ],
      },
      tags: ["8+ Years Experience", "Institutional Documentation", "Touch Typing", "Workflow Structuring"],
    },
  ] as TimelineEntry[],

  communityLeadership: {
    title: { ar: "الريادة المجتمعية والتمثيل الشبابي", en: "Community Leadership & Youth Representation" },
    subtitle: {
      ar: "مشاركة مدنية فاعلة في خدمة قضايا الشباب والتنمية المحلية بطرابلس",
      en: "Active civic representation advocating for youth empowerment and sustainable urban development",
    },
    items: [
      {
        id: "youth-camp-rep",
        title: { ar: "تمثيل شباب محلة المنصورة — مخيم القيادات الشبابية المحلية 2026", en: "Youth Representative of Al-Mansoura — Local Leadership Youth Camp 2026" },
        entity: { ar: "المجلس المحلي للشباب ببلدية طرابلس المركز", en: "Local Youth Council, Tripoli Center Municipality" },
        year: "2026",
        desc: {
          ar: "تم اختياره لتمثيل شباب محلة المنصورة في مخيم القيادات الشبابية المحلية لعام 2026، والمشاركة في جلسات صياغة المبادرات المجتمعية ومناقشة احتياجات المحلات السكنية وتطوير آليات التفاعل المدني.",
          en: "Selected to represent the youth of Al-Mansoura Mahalla during the 2026 Local Leadership Youth Camp, contributing to municipal policy dialogues, community needs assessment, and civic action frameworks.",
        },
        image: "/images/youth-leadership-award.jpg",
      },
      {
        id: "local-youth-council",
        title: { ar: "عضوية المجلس المحلي للشباب ببلدية طرابلس المركز", en: "Affiliation with the Local Youth Council — Tripoli Center" },
        entity: { ar: "بلدية طرابلس المركز", en: "Tripoli Center Municipality" },
        year: "2026 – مستمر",
        desc: {
          ar: "المشاركة النشطة في برامج وأنشطة المجلس المحلي للشباب، مع التركيز على المبادرات البيئية، وتطوير المساحات الخضراء، وتحسين إتاحة الوصول الحضري للشباب وذوي الإعاقة.",
          en: "Active participant in youth council committees, championing urban environmental stewardship, municipal green space protection, and public accessibility initiatives.",
        },
        image: "/images/youth-leadership-group.jpg",
      },
    ],
  },

  education: {
    title: { ar: "التعليم والبحث العلمي", en: "Education & Marine Research" },
    subtitle: {
      ar: "التأهيل الأكاديمي في علوم البحار والتنوع البيولوجي للنظم الساحلية",
      en: "Academic grounding in marine science, zoology, and Mediterranean ecosystem dynamics",
    },
    degrees: [
      {
        id: "master-degree",
        degree: { ar: "دراسات عليا في علوم البحار (ماجستير)", en: "Postgraduate Study in Marine Science (MSc)" },
        institution: { ar: "جامعة طرابلس — كلية العلوم، قسم علم الحيوان", en: "University of Tripoli — Faculty of Science, Zoology Dept." },
        period: { ar: "بدء الدراسة: مارس 2025 (مستمر)", en: "Started: March 2025 (In Progress)" },
        status: { ar: "قيد الدراسة والبحث", en: "In Progress" },
        description: {
          ar: "برنامج دراسات عليا أكاديمي متقدم يركز على بيولوجيا البحار، وعلم البيئة الساحلية، ومصائد الأسماك في حوض البحر الأبيض المتوسط. (ملاحظة: موضوع وعنوان البحث الأكاديمي محفوظ ومحتفظ بخصوصيته بقرار من الباحث).",
          en: "Advanced postgraduate research curriculum concentrating on marine biological dynamics, coastal ecology, and fisheries science within the Mediterranean basin. (Note: Specific master's research topic and title are deliberately kept private).",
        },
      },
      {
        id: "bachelor-degree",
        degree: { ar: "بكالوريوس العلوم في علم الحيوان (مسار علوم البحار)", en: "Bachelor of Science in Zoology (Marine Science Track)" },
        institution: { ar: "جامعة طرابلس — كلية العلوم، قسم علم الحيوان", en: "University of Tripoli — Faculty of Science, Zoology Dept." },
        period: { ar: "تاريخ الإنجاز: نوفمبر 2024", en: "Completed: November 2024" },
        status: { ar: "مكتمل", en: "Completed" },
        description: {
          ar: "تخرج بمسار تخصصي في علوم البحار. مشروع التخرج: دراسة التنوع الحيوي للأنواع البحرية في أسواق الأسماك المحلية كنموذج مؤشر لتقييم المخزون السمكي وصحة النظام البيئي للبحر المتوسط.",
          en: "Graduated with specialization in Marine Science. Capstone research: Marine-species biodiversity surveys across local fish markets as an indicator model for fish-stock assessment and Mediterranean ecosystem health.",
        },
      },
    ],
    conference: {
      title: { ar: "المؤتمر المتوسطي للتنوع البيولوجي البحري والساحلي", en: "Mediterranean Conference on Marine & Coastal Biodiversity" },
      location: { ar: "طرابلس، ليبيا", en: "Tripoli, Libya" },
      date: { ar: "أبريل 2025", en: "April 2025" },
      desc: {
        ar: "المشاركة وحضور الجلسات العلمية المتخصصة في التنوع الحيوي للبيئات البحرية والساحلية، والاطلاع على أحدث الأوراق البحثية الإقليمية حول حفظ الموائل والمحميات البحرية.",
        en: "Attended research-focused scientific sessions on regional marine and coastal biodiversity priorities, habitat conservation, and southern Mediterranean fisheries sustainability.",
      },
    },
  },

  credentials: [
    {
      id: "cred-youth-leadership-2026",
      title: { ar: "شهادة شكر وتقدير — مخيم القيادات الشبابية المحلية", en: "Certificate of Appreciation — Local Leadership Youth Camp" },
      issuer: { ar: "المجلس المحلي للشباب، بلدية طرابلس المركز", en: "Local Youth Council, Tripoli Center Municipality" },
      date: { ar: "2026", en: "2026" },
      year: 2026,
      category: "leadership",
      image: "/images/youth-leadership-award.jpg",
      description: { ar: "تقديراً للمشاركة الفاعلة وتمثيل شباب محلة المنصورة في صياغة الرؤى والمبادرات الشبابية.", en: "Honoring active leadership and representation of Al-Mansoura youth in municipal policy forums." },
    },
    {
      id: "cred-volunteer-first-place",
      title: { ar: "جائزة المتطوع المتميز (المركز الأول)", en: "Outstanding Volunteer Award — First Place" },
      issuer: { ar: "منظمة رحلة للتنمية المستدامة (مشروع غرسة)", en: "Rehla for Sustainable Development (Gharsa Project)" },
      date: { ar: "الموسم الأول (2026)", en: "Season 1 (2026)" },
      year: 2026,
      category: "environmental",
      image: "/images/award-volunteer-first-place.jpg",
      description: { ar: "نيل المركز الأول بعد إتمام أكثر من 100 ساعة تطوعية موثقة والإشراف الميداني على أكثر من 60 متطوعاً.", en: "Awarded 1st place after completing 100+ verified field hours and supervising 60+ volunteers." },
    },
    {
      id: "cred-3zero",
      title: { ar: "برنامج أهداف 3ZERO (صفر كربون والتنمية المستدامة)", en: "3ZERO Objectives Program: Zero Carbon & Sustainability" },
      issuer: { ar: "منظمة تمكين للتنمية بالتعاون مع الاتحاد الأوروبي ومركز موارد المجتمع المدني", en: "Tamkeen for Development, CSOs Resource Centre & European Union" },
      date: { ar: "يناير 2026", en: "January 2026" },
      year: 2026,
      category: "environmental",
      image: "/images/zero-carbon-certificate.jpg",
      description: { ar: "تدريب تخصصي حول استراتيجيات الحياد الكربوني والاستدامة البيئية وإدارة المبادرات الخضراء.", en: "Specialized training on carbon neutrality strategies, sustainability frameworks, and green initiatives." },
    },
    {
      id: "cred-leadership-work",
      title: { ar: "دورة المهارات القيادية في بيئة العمل", en: "Leadership Skills in the Work Environment" },
      issuer: { ar: "برنامج تدريبي معتمد", en: "Certified Professional Training" },
      date: { ar: "فبراير 2026", en: "February 2026" },
      year: 2026,
      category: "leadership",
      description: { ar: "تطوير مهارات إدارة فرق العمل، والتواصل المؤسسي الفعال، وحل النزاعات المهنية.", en: "Advanced team leadership, institutional communication, and practical workplace conflict resolution." },
    },
    {
      id: "cred-risk-debate",
      title: { ar: "دورة إدارة المخاطر ومهارات المناظرة", en: "Risk Management & Debate Skills Training" },
      issuer: { ar: "برنامج تدريبي معتمد", en: "Certified Professional Training" },
      date: { ar: "فبراير 2026", en: "February 2026" },
      year: 2026,
      category: "skills",
      description: { ar: "تحليل المخاطر الميدانية والتشغيلية، وتقنيات الإقناع وبناء الحجج المنطقية في الحوارات العامة.", en: "Field risk analysis, contingency planning, logical argumentation, and structured public advocacy." },
    },
    {
      id: "cred-self-dev",
      title: { ar: "دورة تطوير الذات (التطبيق الذاتي)", en: "Self-Development & Personal Mastery Training" },
      issuer: { ar: "مركز رعاية الشباب مجاهد غومة المحمودي", en: "Mujahid Ghuma Al-Mahmoudi Youth Care Centre" },
      date: { ar: "فبراير 2026", en: "February 2026" },
      year: 2026,
      category: "skills",
      description: { ar: "بناء الانضباط الشخصي، وإدارة الأولويات، وتطوير الإنتاجية في بيئات العمل المتغيرة.", en: "Personal productivity, goal alignment, cognitive adaptability, and priority management." },
    },
    {
      id: "cred-creative-thinking",
      title: { ar: "التفكير الإبداعي وحل المشكلات", en: "Creative Thinking & Problem-Solving" },
      issuer: { ar: "الاتحاد الأوروبي بدعم من المجلس الثقافي البريطاني (British Council)", en: "European Union & British Council" },
      date: { ar: "نوفمبر 2022 / يناير 2026", en: "Nov 2022 / Jan 2026" },
      year: 2026,
      category: "skills",
      description: { ar: "منهجيات التفكير التصميمي والابتكار الممنهج في مواجهة التحديات التشغيلية والمجتمعية.", en: "Design thinking frameworks and pragmatic problem-solving applied to civic and operational challenges." },
    },
    {
      id: "cred-radiation",
      title: { ar: "دورة الوقاية الإشعاعية والقياسات الإشعاعية", en: "Radiation Protection & Radiation Measurements" },
      issuer: { ar: "مركز القياسات الإشعاعية والتدريب، طرابلس", en: "Radiation Measurements and Training Center, Tripoli" },
      date: { ar: "نوفمبر 2025", en: "November 2025" },
      year: 2025,
      category: "skills",
      description: { ar: "البروتوكولات المعيارية للأمان الإشعاعي، واستخدام أجهزة القياس الميدانية، والتحليل المخبري.", en: "Standard radiological safety protocols, dosimeter operation, and laboratory analysis procedures." },
    },
    {
      id: "cred-marine-biology",
      title: { ar: "علم الأحياء البحرية (Marine Biology)", en: "Marine Biology Course" },
      issuer: { ar: "المتحف الأمريكي للتاريخ الطبيعي عبر كورسيرا (Coursera)", en: "American Museum of Natural History (Coursera)" },
      date: { ar: "مارس 2018", en: "March 2018" },
      year: 2018,
      category: "marine",
      description: { ar: "دراسة النظم البيئية للمحيطات، وسلاسل الغذاء البحرية، والتأثيرات البيخية على الشعب المرجانية.", en: "Oceanic trophic chains, benthic community dynamics, and environmental impacts on reefs." },
    },
    {
      id: "cred-general-biology",
      title: { ar: "علم الأحياء العام (General Biology)", en: "General Biology Course" },
      issuer: { ar: "جامعة هارفارد عبر إيديكس (HarvardX / edX)", en: "HarvardX (edX)" },
      date: { ar: "فبراير 2018", en: "February 2018" },
      year: 2018,
      category: "marine",
      description: { ar: "الأسس الخلوية والوراثية والتطورية للأنظمة الحية وتصنيف الكائنات.", en: "Cellular biology, genetics, evolutionary ecology, and organismal taxonomy fundamentals." },
    },
    {
      id: "cred-open-water-diver",
      title: { ar: "مؤهل غواص المياه المفتوحة (Open Water Diver)", en: "Open Water Diver Qualification" },
      issuer: { ar: "مؤهل غوص معتمد — ممارس نشط", en: "Certified Diver — Active Practitioner" },
      date: { ar: "ممارس نشط منذ 2021", en: "Active Diver Since 2021" },
      year: 2021,
      category: "marine",
      description: { ar: "ممارس معتمد للغوص في المياه المفتوحة والغوص الحر، مع توظيف المهارة في الرصد البيئي الساحلي وحملات التنظيف.", en: "Certified open water diver and active freediver applying aquatic capabilities in coastal habitat cleanups and sub-surface observation." },
    },
  ] as Credential[],

  skillsAndLanguages: {
    title: { ar: "المهارات المهنية واللغات", en: "Professional Competencies & Languages" },
    subtitle: {
      ar: "مزيج عملي بين التنسيق الميداني، التوثيق المنهجي، علوم البحار، والحلول البرمجية",
      en: "A grounded interdisciplinary skillset connecting operations, technical documentation, marine science, and software engineering",
    },
    categories: [
      {
        id: "cat-pm",
        title: { ar: "إدارة وتنسيق المشاريع", en: "Project Management & Operations" },
        skills: [
          { ar: "تنسيق المشاريع الميدانية", en: "Field Project Coordination" },
          { ar: "إدارة العمليات واللوجستيات", en: "Operations & Logistics Planning" },
          { ar: "إشراف وتوجيه المتطوعين", en: "Volunteer Supervision & Mobilization" },
          { ar: "التنسيق مع البلديات والشركاء", en: "Municipal & Stakeholder Liaison" },
          { ar: "متابعة المهام والمواعيد الحرجة", en: "Milestone & Deadline Tracking" },
          { ar: "تحديد المخاطر والحل العملي للمشكلات", en: "Risk Identification & Practical Problem-Solving" },
          { ar: "تحسين العمليات التشغيلية", en: "Operational Process Improvement" },
        ],
      },
      {
        id: "cat-doc",
        title: { ar: "التوثيق الاحترافي والتقارير", en: "Documentation & Reporting" },
        skills: [
          { ar: "الكتابة التخصصية وصياغة الوثائق", en: "Professional & Scientific Writing" },
          { ar: "هيكلة الوثائق والتقارير التنفيذية", en: "Structured Document Architecture" },
          { ar: "تنسيق الأبحاث وجمع البيانات", en: "Research Coordination & Data Synthesis" },
          { ar: "إعداد تقارير الإنجاز والمتابعة", en: "Milestone & Operational Progress Reporting" },
          { ar: "تنظيم المعلومات وهندسة المحتوى", en: "Information Organization & Taxonomy" },
          { ar: "مراجعة الجودة والتدقيق اللغوي", en: "Quality Auditing & Editorial Precision" },
          { ar: "الطباعة السريعة باللمس (Touch Typing)", en: "High-Speed Touch Typing" },
        ],
      },
      {
        id: "cat-science",
        title: { ar: "العلوم والبيئة البحرية", en: "Marine Science & Ecology" },
        skills: [
          { ar: "بيولوجيا البحار وعلم الحيوان", en: "Marine Biology & Zoology" },
          { ar: "رصد التنوع الحيوي البحري", en: "Marine Biodiversity Assessment" },
          { ar: "حماية النظم البيئية الساحلية", en: "Coastal Ecosystem Conservation" },
          { ar: "مبادرات الاستدامة البيئية والتشجير", en: "Afforestation & Sustainability Initiatives" },
          { ar: "المراقبة الميدانية المبنية على الأدلة", en: "Evidence-Based Field Observation" },
          { ar: "الغوص الحر والرصد البصري الساحلي", en: "Freediving & Coastal Visual Surveys" },
        ],
      },
      {
        id: "cat-tech",
        title: { ar: "المنتجات الرقمية والتقنيات", en: "Digital Products & Web Stack" },
        skills: [
          { ar: "HTML5 و CSS3 المتقدم", en: "Modern HTML5 & Semantic CSS" },
          { ar: "JavaScript و TypeScript", en: "JavaScript & TypeScript" },
          { ar: "Next.js وإطار React", en: "Next.js & React Ecosystem" },
          { ar: "هندسة البيانات ومكتبة Prisma ORM", en: "Data Modeling & Prisma ORM" },
          { ar: "قواعد البيانات (PostgreSQL و SQLite)", en: "PostgreSQL & SQLite Relational DBs" },
          { ar: "منصات السحاب والنشر (Supabase, Vercel)", en: "Supabase Backend & Vercel Deployment" },
          { ar: "مسارات التتبع برمز QR والباركود", en: "QR Code Workflow Engineering" },
        ],
      },
    ],
    languages: [
      {
        code: "ar",
        name: { ar: "العربية", en: "Arabic" },
        level: { ar: "اللغة الأم (Native)", en: "Native" },
        desc: { ar: "إتقان كامل للصياغة الأدبية والمهنية والعلمية وبناء التقارير المحكمة", en: "Complete native fluency in academic, institutional, and technical discourse" },
      },
      {
        code: "en",
        name: { ar: "الإنجليزية", en: "English" },
        level: { ar: "كفاءة مهنية عملية (Professional Working Proficiency)", en: "Professional Working Proficiency" },
        desc: { ar: "قراءة الأبحاث العلمية، والتواصل المهني، وكتابة الوثائق الفنية والتقارير", en: "Scientific paper review, international correspondence, technical docs & reporting" },
      },
      {
        code: "fr",
        name: { ar: "الفرنسية", en: "French" },
        level: { ar: "كفاءة أولية (Elementary Proficiency)", en: "Elementary Proficiency" },
        desc: { ar: "معرفة بالمصطلحات الأساسية والتراكيب اللغوية البسيطة", en: "Fundamental terminology, basic reading and situational comprehension" },
      },
    ],
  },
};
