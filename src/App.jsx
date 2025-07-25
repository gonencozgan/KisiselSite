// src/App.jsx
import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "Odeabank",
    title: "Expert Cloud & DevOps Engineer",
    period: "Haz 2023 – Günümüz",
    stack: "OpenShift, Anthos, Vanilla K8S, Docker, ELK, GitLab, Prometheus",
  },
  {
    company: "Yapı Kredi Teknoloji",
    title: "Cloud & Middleware Engineer",
    period: "Mar 2022 – Haz 2023",
    stack: "Pivotal PAS/PKS, WebSphere, Tomcat, Dynatrace, Git, Jira, Bamboo",
  },
  {
    company: "TurkNet",
    title: "DevOps Engineer",
    period: "Kas 2021 – Şub 2022",
    stack: "Azure DevOps, Nginx, New Relic, Grafana, ELK",
  },
  {
    company: "TEB",
    title: "Middleware Administrator",
    period: "Ara 2020 – Kas 2021",
    stack: "Jboss EAP, WebSphere, WebLogic, IIS",
  },
  {
    company: "Şekerbank",
    title: "Middleware Administrator",
    period: "Ara 2018 – Ara 2020",
    stack: "NGINX, WebSphere, Jenkins , IIS",
  },
  {
    company: "TSK (Türk Silahlı Kuvvetleri)",
    title: "Engineer Liuetenant - Academic Advisor",
    period: "Ağu 2017 – Tem 2018",
    stack: "NGINX, WebSphere, Jenkins , IIS",
  },
];

const skills = [
  "Kubernetes",
  "OpenShift",
  "Docker",
  "NGINX",
  "WebSphere",
  "GitLab CI/CD",
  "Prometheus",
  "ELK",
];

export default function App() {
  return (
    <main className="font-sans text-slate-800 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-slate-200/60 dark:border-neutral-800/60">
        <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          <h1 className="text-xl font-extrabold">Gönenç Özgan</h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {["about", "experience", "skills", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-amber-500 transition"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center pt-16 text-center"
      >
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 shadow-xl mb-6 flex items-center justify-center text-white text-4xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          GÖ
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cloud & DevOps Mühendisi
        </motion.h2>

        <motion.p
          className="mx-auto max-w-xl mb-8 text-lg text-slate-700 dark:text-slate-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Kubernetes ve OpenShift üzerinde kurumsal platformlar; modern CI/CD
          hatları ve gözlemlenebilirlik çözümleri geliştiriyorum.
        </motion.p>

        <motion.a
          href="#contact"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          İletişime Geç
        </motion.a>
      </section>

      {/* HAKKIMDA */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-neutral-900/60">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Hakkımda
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Bilgisayar Mühendisi olarak finans sektöründe Kubernetes tabanlı bulut
            platformlarını tasarlayıp yönettim. Açık kaynak araçlara tutkuluyum;
            kod kalitesi ve otomasyon vazgeçilmezim.
          </p>
        </div>
      </section>

      {/* DENEYİM */}
      <section
        id="experience"
        className="py-20 border-y border-slate-100 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Deneyim
          </h3>
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                    {e.company}
                  </h4>
                  <p className="text-amber-600">{e.title}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {e.period}
                </span>
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Teknolojiler:</strong> {e.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YETENEKLER */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-neutral-900/60">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Yetenekler
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full"
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

      {/* İLETİŞİM */}
      <section
        id="contact"
        className="py-20 border-t border-slate-100 dark:border-neutral-800"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            İletişim
          </h3>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Birlikte çalışmak veya selam vermek için ulaşın.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:+905385694634"
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg"
            >
              <Phone
                size={24}
                className="mx-auto text-amber-500 group-hover:text-amber-600"
              />
              <p className="mt-2 font-semibold">+90 538 569 46 34</p>
            </a>
            <a
              href="mailto:gonencozgan@gmail.com"
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg"
            >
              <Mail
                size={24}
                className="mx-auto text-amber-500 group-hover:text-amber-600"
              />
              <p className="mt-2 font-semibold">gonenc.ozgan@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/gönenç-özgan-37031078"
              target="_blank"
              rel="noreferrer"
              className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg"
            >
              <Linkedin
                size={24}
                className="mx-auto text-amber-500 group-hover:text-amber-600"
              />
              <p className="mt-2 font-semibold">LinkedIn Profili</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-slate-500 dark:text-gray-400">
        © {new Date().getFullYear()} Gönenç Özgan. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
