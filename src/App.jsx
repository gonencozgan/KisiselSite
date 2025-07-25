// src/App.jsx
import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

/* --------------------------------------------------
 * Dil / metin sözlüğü
 * -------------------------------------------------*/
const translations = {
  nav: {
    tr: ["hakkimda", "deneyim", "yetenekler", "iletisim"],
    en: ["about", "experience", "skills", "contact"],
  },
  heroTitle: {
    tr: "Cloud & DevOps Mühendisi",
    en: "Cloud & DevOps Engineer",
  },
  heroDesc: {
    tr: "Kubernetes ve OpenShift üzerinde kurumsal platformlar; modern CI/CD hatları ve gözlemlenebilirlik çözümleri geliştiriyorum.",
    en: "Building scalable enterprise platforms on Kubernetes and OpenShift; crafting modern CI/CD pipelines and observability solutions.",
  },
  contactCta: { tr: "İletişime Geç", en: "Get in Touch" },
  aboutTitle: { tr: "Hakkımda", en: "About" },
  aboutText: {
    tr: "Bilgisayar Mühendisi olarak finans sektöründe Kubernetes tabanlı bulut platformlarını tasarlayıp yönettim. Açık kaynak araçlara tutkuluyum; kod kalitesi ve otomasyon vazgeçilmezim.",
    en: "As a Computer Engineer, I designed and managed Kubernetes-based cloud platforms in the finance sector. I'm passionate about open‑source tools; code quality and automation are my top priorities.",
  },
  expTitle: { tr: "Deneyim", en: "Experience" },
  skillsTitle: { tr: "Yetenekler", en: "Skills" },
  contactTitle: { tr: "İletişim", en: "Contact" },
  techLabel: { tr: "Teknolojiler:", en: "Technologies:" },
};

/* --------------------------------------------------
 * Veri kümeleri
 * -------------------------------------------------*/
const experience = [
  {
    company: "Odeabank",
    title: "Expert Cloud & DevOps Engineer",
    period: { tr: "Haz 2023 – Günümüz", en: "Jun 2023 – Present" },
    stack: "OpenShift, Anthos, Vanilla K8S, Docker, ELK, GitLab, Prometheus",
  },
  {
    company: "Yapı Kredi Teknoloji",
    title: "Cloud & Middleware Engineer",
    period: { tr: "Mar 2022 – Haz 2023", en: "Mar 2022 – Jun 2023" },
    stack: "Pivotal PAS/PKS, WebSphere, Tomcat, Dynatrace, Git, Jira, Bamboo",
  },
  {
    company: "TurkNet",
    title: "DevOps Engineer",
    period: { tr: "Kas 2021 – Şub 2022", en: "Nov 2021 – Feb 2022" },
    stack: "Azure DevOps, Nginx, New Relic, Grafana, ELK",
  },
  {
    company: "TEB",
    title: "Middleware Administrator",
    period: { tr: "Ara 2020 – Kas 2021", en: "Dec 2020 – Nov 2021" },
    stack: "Jboss EAP, WebSphere, WebLogic, IIS",
  },
  {
    company: "Şekerbank",
    title: "Middleware Administrator",
    period: { tr: "Ara 2018 – Ara 2020", en: "Dec 2018 – Dec 2020" },
    stack: "NGINX, WebSphere, Jenkins, IIS",
  },
  {
    company: "TSK (Türk Silahlı Kuvvetleri)",
    title: "Engineer Lieutenant – Academic Advisor",
    period: { tr: "Ağu 2017 – Tem 2018", en: "Aug 2017 – Jul 2018" },
    stack: "NGINX, WebSphere, Jenkins, IIS",
  },
];

const skills = [
  "Kubernetes",
  "OpenShift",
  "Docker",
  "NGINX",
  "WebSphere",
  "GitLab CI/CD",
  "Prometheus",
  "ELK",
];

/* --------------------------------------------------
 * Ana bileşen
 * -------------------------------------------------*/
export default function App() {
  const [lang, setLang] = useState("tr");
  const navItems = translations.nav[lang];

  return (
    <main className="font-sans text-gray-800 dark:text-gray-100">
      {/* ------------ NAVBAR ------------ */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-white/90 dark:bg-blue-900/80 backdrop-blur border-b border-blue-200/60 dark:border-blue-700/60">
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <h1 className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
            Gönenç Özgan
          </h1>

          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="text-sm text-blue-600 dark:text-blue-400"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>
        </nav>
      </header>

      {/* ------------ HERO ------------ */}
      <section
        id={navItems[0]}
        className="relative flex min-h-screen flex-col items-center justify-center pt-16 text-center"
      >
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* BÜYÜTÜLMÜŞ FOTO (320px / md 384px) */}
        <motion.img
          src="profile.jpg"
          alt="Gönenç Özgan"
          loading="eager"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-2xl mb-8 object-cover object-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {translations.heroTitle[lang]}
        </motion.h2>

        <motion.p
          className="mx-auto max-w-xl mb-10 text-lg text-gray-700 dark:text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {translations.heroDesc[lang]}
        </motion.p>

        <motion.a
          href={`#${navItems[3]}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {translations.contactCta[lang]}
        </motion.a>
      </section>

      {/* ------------ ABOUT ------------ */}
      <section
        id={navItems[0]}
        className="py-20 bg-blue-50 dark:bg-blue-900/60"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
            {translations.aboutTitle[lang]}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations.aboutText[lang]}
          </p>
        </div>
      </section>

      {/* ------------ EXPERIENCE ------------ */}
      <section
        id={navItems[1]}
        className="py-20 bg-white dark:bg-blue-800 border-y border-blue-200 dark:border-blue-700"
      >
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          <h3 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
            {translations.expTitle[lang]}
          </h3>

          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">
                    {e.company}
                  </h4>
                  <p className="text-blue-500">{e.title}</p>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 dark:bg-blue-700 px-2 py-1 rounded">
                  {e.period[lang]}
                </span>
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>{translations.techLabel[lang]}</strong> {e.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------ SKILLS ------------ */}
      <section
        id={navItems[2]}
        className="py-20 bg-blue-50 dark:bg-blue-900/60"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
            {translations.skillsTitle[lang]}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ CONTACT ------------ */}
      <section
        id={navItems[3]}
        className="py-20 bg-white dark:bg-blue-800 border-t border-blue-200 dark:border-blue-700"
      >
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-blue-600 dark:text-blue-400">
            {translations.contactTitle[lang]}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:gonenc.ozgan@gmail.com"
              className="group p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow hover:shadow-lg"
            >
              <Mail
                size={24}
                className="mx-auto text-blue-500 group-hover:text-blue-600"
              />
              <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                gonenc.ozgan@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/gönenç-özgan-37031078"
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-blue-100 dark:bg-blue-900 rounded-lg shadow hover:shadow-lg"
            >
              <Linkedin
                size={24}
                className="mx-auto text-blue-500 group-hover:text-blue-600"
              />
              <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                LinkedIn Profile
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ------------ FOOTER ------------ */}
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-300 bg-blue-50 dark:bg-blue-900">
        © {new Date().getFullYear()} Gönenç Özgan. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
