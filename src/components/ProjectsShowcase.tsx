type Language = "en" | "ar";

export function ProjectsShowcase({ lang }: { lang: Language }) {
  const ar = lang === "ar";

  return (
    <section className="projects section" id="projects">
      <div className="projects-intro">
        <div className="section-kicker"><span>03</span>{ar ? "المشاريع والمبادرات" : "Projects & initiatives"}</div>
        <p>{ar ? "أعمال تجمع بين البيئة والبحر والتقنية والعمل الشبابي." : "Environmental work, marine conservation, digital products and youth leadership."}</p>
      </div>

      <div className="portfolio-grid">
        <article className="portfolio-card gharsa-card">
          <a className="portfolio-photo" href="https://gharsa.ly/" target="_blank" rel="noreferrer" aria-label={ar ? "زيارة موقع مشروع غرسة" : "Visit the Gharsa Project website"}>
            <img src="/images/gharsa-students-planting.jpg" alt={ar ? "طلاب يشاركون في زراعة الأشجار ضمن مشروع غرسة" : "Students taking part in tree planting with the Gharsa Project"} width="1280" height="853" loading="lazy" decoding="async" />
            <span>GHARSA · 01</span>
          </a>
          <div className="portfolio-copy">
            <p className="eyebrow">{ar ? "البيئة · إدارة المشاريع" : "ENVIRONMENT · PROJECT DELIVERY"}</p>
            <h2>{ar ? "غرسة" : "Gharsa"}</h2>
            <p className="portfolio-role">{ar ? "مسؤول مشاريع · رحلة للتنمية المستدامة" : "Project Officer · Rehla for Sustainable Development"}</p>
            <p>{ar ? "توعية بيئية وزراعة أشجار بالتعاون مع البلديات والمجتمعات المحلية." : "Environmental education and tree planting with municipalities and local communities."}</p>
            <div className="portfolio-facts"><span><strong>4,589</strong> {ar ? "شجرة في الموسم الأول" : "trees in Season 1"}</span><span><strong>11</strong> {ar ? "بلدية" : "municipalities"}</span></div>
            <p className="portfolio-note">{ar ? "سجل قائم منفصل: أكثر من 6,000 شتلة مزروعة تحمل رموز QR فردية." : "Separate existing record: 6,000+ planted seedlings have individual QR codes."}</p>
          </div>
          <div className="portfolio-photo-strip" aria-label={ar ? "صور إضافية من أنشطة غرسة" : "More Gharsa fieldwork photos"}>
            <img src="/images/gharsa-fieldwork.webp" alt={ar ? "متطوعون يجهزون موقعاً للزراعة" : "Volunteers preparing a planting site"} width="900" height="675" loading="lazy" decoding="async" />
            <img src="/images/gharsa-tree-care.webp" alt={ar ? "العناية بشجرة صغيرة في الموقع" : "Caring for a young tree at the site"} width="720" height="960" loading="lazy" decoding="async" />
          </div>
        </article>

        <article className="portfolio-card blue-card">
          <div className="blue-visual">
            <svg viewBox="0 0 700 260" fill="none" aria-hidden="true"><path d="M-20 140C100 70 155 210 275 140S450 70 570 140s175 70 250 0M-20 185c120-70 175 70 295 0s175-70 295 0 175 70 250 0M-20 95c120-70 175 70 295 0s175-70 295 0 175 70 250 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <img src="/images/blue-horizon-mark.webp" alt={ar ? "شعار مبادرة الأفق الأزرق" : "Blue Horizon initiative logo"} width="700" height="700" loading="lazy" decoding="async" />
            <span className="blue-caption">{ar ? "البحر المتوسط · ليبيا" : "MEDITERRANEAN · LIBYA"}</span>
          </div>
          <div className="portfolio-copy">
            <p className="eyebrow">{ar ? "حماية البيئة البحرية · 2026—الآن" : "MARINE CONSERVATION · 2026—PRESENT"}</p>
            <h2>{ar ? "الأفق الأزرق" : "Blue Horizon"}</h2>
            <p className="portfolio-role">{ar ? "المؤسس وقائد البرنامج" : "Founder & Program Lead"}</p>
            <p>{ar ? "مبادرة مجتمعية لحماية النظام البيئي المتوسطي، تنسق المتطوعين والغواصين والشركاء المحليين في أنشطة التوعية الساحلية." : "A community marine initiative protecting the Mediterranean coast by coordinating volunteers, freedivers and local partners for coastal advocacy."}</p>
          </div>
        </article>

        <article className="portfolio-card manarah-card">
          <a className="manarah-visual" href="https://halaqa-system.vercel.app/ar" target="_blank" rel="noreferrer" aria-label={ar ? "زيارة منصة منارة" : "Visit the Manarah platform"}>
            <span className="manarah-logo-frame"><img src="/images/manarah-logo-profile.png" alt={ar ? "شعار منصة منارة" : "Manarah platform logo"} width="1080" height="1080" loading="lazy" decoding="async" /></span>
            <span className="manarah-identity"><strong>مَنَارَة</strong><small>{ar ? "منظومة الحلقات" : "Quran circles system"}</small></span>
            <span className="manarah-visit">{ar ? "زيارة المنصة" : "Visit platform"}<b aria-hidden="true">↗</b></span>
          </a>
          <div className="portfolio-copy">
            <p className="eyebrow">{ar ? "تقنية التعليم · 2026—الآن" : "EDUCATION TECHNOLOGY · 2026—PRESENT"}</p>
            <h2>{ar ? "منارة" : "Manarah"}</h2>
            <p className="portfolio-role">{ar ? "المؤسس وقائد المنتج" : "Founder & Product Lead"}</p>
            <p>{ar ? "منظومة لإدارة ومتابعة حلقات تحفيظ القرآن: تحضير سريع ببطاقات ذكية، وتقييم للتسميع، وعرض مباشر للمتصدرين." : "A system for managing Quran study circles: smart-card attendance, recitation assessment and a live honor display."}</p>
            <ul className="manarah-features" aria-label={ar ? "وظائف منصة منارة" : "Manarah platform capabilities"}>
              <li>{ar ? "تحضير ذكي" : "Smart attendance"}</li>
              <li>{ar ? "تقييم التسميع" : "Recitation assessment"}</li>
              <li>{ar ? "شاشة تكريم" : "Honor display"}</li>
            </ul>
          </div>
        </article>

        <article className="portfolio-card youth-card">
          <div className="youth-visual">
            <img className="youth-main-photo" src="/images/youth-leadership-group.jpg" alt={ar ? "مشاركون في مخيم القيادات المحلية للشباب" : "Participants at the Local Leadership Youth Camp"} width="1280" height="854" loading="lazy" decoding="async" />
            <img className="youth-detail-photo" src="/images/youth-leadership-hall.jpg" alt={ar ? "إسلام في فعالية مخيم القيادات المحلية" : "Islam at a Local Leadership Youth Camp event"} width="607" height="1080" loading="lazy" decoding="async" />
            <span>{ar ? "بلدية طرابلس المركز · 2026" : "TRIPOLI CENTER · 2026"}</span>
          </div>
          <div className="portfolio-copy">
            <p className="eyebrow">{ar ? "القيادة الشبابية · المشاركة المدنية" : "YOUTH LEADERSHIP · CIVIC PARTICIPATION"}</p>
            <h2>{ar ? "قيادة شبابية محلية" : "Local youth leadership"}</h2>
            <p className="portfolio-role">{ar ? "ممثل شباب منطقة المنصورة · بلدية طرابلس المركز" : "Youth Representative, Al-Mansoura · Tripoli Center Municipality"}</p>
            <p>{ar ? "اختير إسلام لتمثيل شباب منطقة المنصورة في مخيم القيادات المحلية للشباب، والمشاركة في حوارات التنمية المجتمعية والعمل المدني." : "Selected to represent Al-Mansoura youth at the Local Leadership Youth Camp, contributing to civic development and community impact discussions."}</p>
            <p className="portfolio-note">{ar ? "شهادة تقدير من المجلس المحلي للشباب." : "Certificate of Appreciation from the Local Youth Council."}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
