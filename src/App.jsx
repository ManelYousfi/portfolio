import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const navigation = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expériences' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

const metrics = [
  { label: 'Années d’expérience', value: '3+' },
  { label: 'Pipelines industrialisés', value: '18' },
  { label: 'Projets IA livrés', value: '12' },
  { label: 'Stacks maîtrisées', value: '10+' },
]

const skillGroups = [
  { name: 'Python & Data Engineering', level: 95 },
  { name: 'MLOps & CI/CD', level: 90 },
  { name: 'LLM, RAG & LangChain', level: 92 },
  { name: 'Computer Vision', level: 86 },
  { name: 'Cloud, Docker & Terraform', level: 84 },
]

const capabilityTags = [
  'PySpark',
  'SQL avancé',
  'Docker',
  'Terraform',
  'XGBoost',
  'LSTM',
  'LangChain',
  'PyTorch',
  'OpenCV',
  'GitLab CI/CD',
  'Tests unitaires',
  'Agile / Jira',
]

const experiences = [
  {
    period: '2023 — 2025',
    role: 'Data Scientist',
    company: 'RATP — Paris',
    highlights: [
      'Conception de pipelines ETL PySpark pour industrialiser la donnée à grande échelle.',
      'Développement de modèles de maintenance prédictive audio pour l’IoT ferroviaire.',
      'Création de dashboards Streamlit pour le monitoring temps réel et la décision opérationnelle.',
      'Rédaction de documentation HLD / LLD pour sécuriser la transmission et le run.',
    ],
  },
  {
    period: '2023',
    role: 'AI Engineer & Computer Vision',
    company: 'MERMEC — Marseille',
    highlights: [
      'Segmentation et détection d’objets temps réel avec PyTorch et architectures ResNet.',
      'Optimisation de la fiabilité des modèles vision pour des contraintes terrain.',
      'Pilotage technique de la QA et amélioration continue du cycle de validation.',
    ],
  },
  {
    period: '2021 — 2022',
    role: 'Data Scientist & Analyst Freelance',
    company: 'Béjaïa — Algérie',
    highlights: [
      'Prévision de séries temporelles et détection d’anomalies sur des cas métiers variés.',
      'Ingénierie de données et automatisation d’analyses pour accélérer les décisions.',
      'Accompagnement de clients sur la transformation de données complexes en insights actionnables.',
    ],
  },
]

const analyticsVisitors = [
  { month: 'Jan', visitors: 3200, conversion: 3.2 },
  { month: 'Fév', visitors: 4100, conversion: 3.8 },
  { month: 'Mar', visitors: 4600, conversion: 4.1 },
  { month: 'Avr', visitors: 5300, conversion: 4.4 },
  { month: 'Mai', visitors: 6100, conversion: 4.9 },
  { month: 'Juin', visitors: 7200, conversion: 5.1 },
]

const analyticsPages = [
  { page: 'Portfolio', views: 9100 },
  { page: 'Case Studies', views: 7400 },
  { page: 'Dashboards', views: 6800 },
  { page: 'Blog IA', views: 4300 },
  { page: 'Contact', views: 2500 },
]

const trafficSources = [
  { name: 'LinkedIn', value: 38, color: '#6366f1' },
  { name: 'Direct', value: 24, color: '#06b6d4' },
  { name: 'GitHub', value: 21, color: '#22c55e' },
  { name: 'Referral', value: 17, color: '#f59e0b' },
]

const iotSeries = [
  { time: '08:00', vibration: 44, temp: 62, sound: 51 },
  { time: '09:00', vibration: 48, temp: 64, sound: 54 },
  { time: '10:00', vibration: 52, temp: 67, sound: 58 },
  { time: '11:00', vibration: 49, temp: 69, sound: 56 },
  { time: '12:00', vibration: 58, temp: 72, sound: 61 },
  { time: '13:00', vibration: 63, temp: 75, sound: 66 },
  { time: '14:00', vibration: 57, temp: 71, sound: 60 },
]

const heatmapRows = [
  { zone: 'Capteurs Nord', values: [0.32, 0.48, 0.51, 0.63, 0.58, 0.41] },
  { zone: 'Capteurs Est', values: [0.26, 0.39, 0.44, 0.56, 0.61, 0.47] },
  { zone: 'Capteurs Sud', values: [0.21, 0.28, 0.37, 0.49, 0.54, 0.59] },
  { zone: 'Capteurs Ouest', values: [0.34, 0.45, 0.52, 0.69, 0.71, 0.64] },
]

const alerts = [
  { level: 'Critique', message: 'Anomalie vibratoire sur rame 12 — seuil +18%', time: 'il y a 3 min' },
  { level: 'Surveillance', message: 'Dérive thermique progressive sur station B', time: 'il y a 11 min' },
  { level: 'Info', message: 'Pipeline audio recalibré avec succès', time: 'il y a 26 min' },
]

const trainingCurves = [
  { epoch: 1, loss: 0.96, valLoss: 1.08, accuracy: 0.61 },
  { epoch: 2, loss: 0.72, valLoss: 0.87, accuracy: 0.71 },
  { epoch: 3, loss: 0.55, valLoss: 0.68, accuracy: 0.79 },
  { epoch: 4, loss: 0.41, valLoss: 0.53, accuracy: 0.86 },
  { epoch: 5, loss: 0.32, valLoss: 0.44, accuracy: 0.9 },
  { epoch: 6, loss: 0.27, valLoss: 0.39, accuracy: 0.93 },
]

const featureImportance = [
  { feature: 'Signal RMS', score: 93 },
  { feature: 'Spectral Flux', score: 84 },
  { feature: 'Temp. moteur', score: 72 },
  { feature: 'Charge réseau', score: 58 },
  { feature: 'Historique défauts', score: 65 },
]

const modelComparison = [
  { model: 'XGBoost', precision: '94%', recall: '91%', latency: '28 ms' },
  { model: 'LSTM', precision: '91%', recall: '93%', latency: '47 ms' },
  { model: 'ResNet50', precision: '96%', recall: '89%', latency: '35 ms' },
]

const radarData = [
  { subject: 'CI/CD', score: 93 },
  { subject: 'RAG', score: 95 },
  { subject: 'PySpark', score: 91 },
  { subject: 'Vision', score: 84 },
  { subject: 'SQL', score: 88 },
  { subject: 'Terraform', score: 80 },
]

const confusionMatrix = [
  [186, 12, 4],
  [9, 171, 15],
  [3, 18, 194],
]

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const SectionTitle = ({ eyebrow, title, description }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="mb-10 max-w-3xl"
  >
    <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-secondary">
      {eyebrow}
    </span>
    <h2 className="text-3xl font-semibold tracking-tight text-text md:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p>
  </motion.div>
)

const Panel = ({ className = '', children }) => (
  <div className={`panel ${className}`}>{children}</div>
)

const Gauge = ({ label, value, color }) => {
  const degrees = Math.round((value / 100) * 180)

  return (
    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{label}</span>
        <span className="text-sm font-medium text-text">{value}%</span>
      </div>
      <div className="relative mt-6 h-28 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 mx-auto h-56 w-56 rounded-full border-[18px] border-white/5" />
        <div
          className="absolute inset-x-0 bottom-0 mx-auto h-56 w-56 rounded-full border-[18px] border-transparent"
          style={{
            borderTopColor: color,
            borderLeftColor: color,
            transform: `rotate(${degrees - 180}deg)`,
            transition: 'transform 0.8s ease',
          }}
        />
        <div className="absolute inset-x-0 bottom-6 text-center">
          <div className="text-3xl font-semibold text-text">{value}</div>
          <div className="text-xs uppercase tracking-[0.25em] text-muted">stabilité</div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-night text-text">
      <div className="fixed inset-0 -z-10 bg-night" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.01),transparent_35%)]" />
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-[0.12]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-night/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.35em] text-text">
            MY
          </a>
          <div className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted transition hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:manelyousfi.pro@gmail.com"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text transition hover:border-primary/40 hover:bg-primary/10"
          >
            Me contacter
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <section
          id="hero"
          className="grid min-h-[calc(100vh-88px)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary">
              Disponible pour projets data, IA & ML Ops
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.04em] text-text md:text-7xl">
              Manel Yousfi
              <span className="mt-4 block bg-gradient-to-r from-primary via-text to-secondary bg-clip-text text-3xl text-transparent md:text-5xl">
                Data Scientist & Ingénieur IA
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Spécialiste ML Ops, RAG et LLM. J’industrialise les pipelines data et les systèmes
              IA pour transformer des signaux complexes en produits fiables, mesurables et prêts à
              passer à l’échelle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:manelyousfi.pro@gmail.com" className="primary-button">
                Envoyer un email
              </a>
              <a href="#dashboards" className="secondary-button">
                Voir les dashboards
              </a>
              <a href="https://github.com/ManelYousfi" target="_blank" rel="noreferrer" className="secondary-button">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/manel-yousfi-/" target="_blank" rel="noreferrer" className="secondary-button">
                LinkedIn
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.1 }}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-5 shadow-glow"
                >
                  <div className="text-2xl font-semibold text-text">{metric.value}</div>
                  <div className="mt-2 text-sm text-muted">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -right-4 bottom-6 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
            <Panel className="relative overflow-hidden p-6 md:p-8">
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                France
              </div>
              <div className="grid gap-6">
                <div className="mx-auto mt-4 flex h-64 w-full max-w-sm items-center justify-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.24),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-night/70 text-7xl text-text/80">
                    MY
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted">Contact</div>
                    <div className="mt-3 space-y-2 text-sm text-text">
                      <p>manelyousfi.pro@gmail.com</p>
                      <p>+33.641.49.56.32</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-muted">Langues</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="tag">Français courant</span>
                      <span className="tag">Anglais courant</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <div className="text-sm text-primary">Positionnement</div>
                  <p className="mt-2 text-sm leading-7 text-text/90">
                    Profil hybride data / engineering, capable de concevoir, entraîner, déployer et
                    monitorer des systèmes IA orientés production.
                  </p>
                </div>
              </div>
            </Panel>
          </motion.div>
        </section>

        <section id="about" className="py-24">
          <SectionTitle
            eyebrow="À propos"
            title="Transformer la complexité technique en expériences lisibles, robustes et mesurables."
            description="Data Scientist & Analyste avec 3 ans d’expérience, j’interviens de la préparation des données jusqu’au déploiement, avec une vraie culture produit et fiabilité : tests, CI/CD, observabilité et documentation."
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Panel className="h-full p-7">
                <h3 className="text-xl font-medium text-text">Stack & expertise</h3>
                <div className="mt-8 space-y-5">
                  {skillGroups.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-text">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#6366f1,#06b6d4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Panel className="h-full p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-text">Capacités clés</h3>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                    Ops-ready
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {capabilityTags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="tag"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/8 bg-black/20 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted">Radar de maîtrise</p>
                      <p className="text-lg font-medium text-text">Compétences transverses</p>
                    </div>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="rgba(148,163,184,0.18)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <PolarRadiusAxis
                          angle={30}
                          domain={[0, 100]}
                          tick={false}
                          axisLine={false}
                        />
                        <Radar
                          name="Niveau"
                          dataKey="score"
                          stroke="#06b6d4"
                          fill="#6366f1"
                          fillOpacity={0.45}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Panel>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-24">
          <SectionTitle
            eyebrow="Expériences"
            title="Une trajectoire orientée impact, terrain et industrialisation."
            description="Chaque mission met en avant une même logique : faire converger données, modèles et usages réels dans des environnements exigeants."
          />

          <div className="relative ml-4 border-l border-white/10 pl-8 md:ml-10 md:pl-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative mb-12"
              >
                <span className="absolute -left-[3.05rem] top-2 h-4 w-4 rounded-full border-4 border-night bg-primary md:-left-[3.55rem]" />
                <Panel className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-secondary">
                        {experience.period}
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold text-text">{experience.role}</h3>
                      <p className="mt-1 text-base text-muted">{experience.company}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted">
                      Expérience {index + 1}
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">
                    {experience.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="dashboards" className="py-24">
          <SectionTitle
            eyebrow="Dashboards"
            title="Trois univers analytiques intégrés directement dans le portfolio."
            description="Le cœur de la page : des visualisations animées, interactives et liées aux expériences réelles de Manel en analytics, IoT et MLOps."
          />

          <div className="grid gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Panel className="p-6 md:p-8">
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">Dashboard 01</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">Web Analytics</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                      Vue exécutive d’un produit digital : trafic, engagement, pages consultées et
                      provenance des utilisateurs.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      ['Utilisateurs', '72.4k'],
                      ['Sessions', '118k'],
                      ['Conversion', '5.1%'],
                      ['Bounce Rate', '28%'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-muted">{label}</div>
                        <div className="mt-2 text-2xl font-semibold text-text">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
                  <div className="grid gap-6">
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4">
                        <div className="text-sm text-muted">Trafic & conversion</div>
                      </div>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={analyticsVisitors}>
                            <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                            <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="visitors"
                              name="Visiteurs"
                              stroke="#6366f1"
                              strokeWidth={3}
                              dot={{ r: 4, fill: '#6366f1' }}
                            />
                            <Line
                              type="monotone"
                              dataKey="conversion"
                              name="Conversion %"
                              stroke="#06b6d4"
                              strokeWidth={3}
                              dot={{ r: 4, fill: '#06b6d4' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Pages vues par section</div>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={analyticsPages}>
                            <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                            <XAxis dataKey="page" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Bar dataKey="views" radius={[10, 10, 0, 0]}>
                              {analyticsPages.map((entry, index) => (
                                <Cell
                                  key={`${entry.page}-${index}`}
                                  fill={index % 2 === 0 ? '#6366f1' : '#06b6d4'}
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Sources de trafic</div>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={trafficSources}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              innerRadius={68}
                              outerRadius={104}
                              paddingAngle={4}
                            >
                              {trafficSources.map((entry) => (
                                <Cell key={entry.name} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={tooltipStyle} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="grid gap-3">
                        {trafficSources.map((source) => (
                          <div key={source.name} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                            <div className="flex items-center gap-3">
                              <span
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: source.color }}
                              />
                              <span className="text-sm text-text">{source.name}</span>
                            </div>
                            <span className="text-sm text-muted">{source.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-primary/20 bg-[linear-gradient(135deg,rgba(99,102,241,0.16),rgba(6,182,212,0.08))] p-5">
                      <div className="text-sm uppercase tracking-[0.25em] text-primary">Insight</div>
                      <p className="mt-3 text-sm leading-7 text-text/90">
                        Le trafic le plus qualifié provient du couple LinkedIn + GitHub, avec une
                        conversion en hausse continue sur 6 mois grâce à des contenus techniques et
                        des démonstrations visuelles orientées résultats.
                      </p>
                    </div>
                  </div>
                </div>
              </Panel>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Panel className="p-6 md:p-8">
                <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">Dashboard 02</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">IoT Monitoring — RATP</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                      Monitoring temps réel de signaux techniques pour la maintenance prédictive :
                      santé des capteurs, dérives thermiques, intensité acoustique et alertes.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
                    Stream analytics • temps réel simulé
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                  <div className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                      <Gauge label="Vibration" value={82} color="#6366f1" />
                      <Gauge label="Température" value={74} color="#06b6d4" />
                      <Gauge label="Audio" value={88} color="#22c55e" />
                    </div>

                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Alertes récentes</div>
                      <div className="space-y-3">
                        {alerts.map((alert) => (
                          <div
                            key={`${alert.level}-${alert.message}`}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span
                                className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${
                                  alert.level === 'Critique'
                                    ? 'bg-rose-500/15 text-rose-300'
                                    : alert.level === 'Surveillance'
                                      ? 'bg-amber-500/15 text-amber-300'
                                      : 'bg-secondary/15 text-secondary'
                                }`}
                              >
                                {alert.level}
                              </span>
                              <span className="text-xs text-muted">{alert.time}</span>
                            </div>
                            <p className="mt-3 text-sm leading-7 text-text/90">{alert.message}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Flux capteurs</div>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={iotSeries}>
                            <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                            <XAxis dataKey="time" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                            <Line type="monotone" dataKey="vibration" stroke="#6366f1" strokeWidth={3} />
                            <Line type="monotone" dataKey="temp" stroke="#06b6d4" strokeWidth={3} />
                            <Line type="monotone" dataKey="sound" stroke="#22c55e" strokeWidth={3} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-5 text-sm text-muted">Heatmap criticité par zone</div>
                      <div className="space-y-3">
                        {heatmapRows.map((row) => (
                          <div key={row.zone} className="grid grid-cols-[120px_1fr] items-center gap-3">
                            <div className="text-sm text-muted">{row.zone}</div>
                            <div className="grid grid-cols-6 gap-2">
                              {row.values.map((value, index) => (
                                <div
                                  key={`${row.zone}-${index}`}
                                  className="flex h-12 items-center justify-center rounded-2xl border border-white/6 text-xs text-white/90"
                                  style={{
                                    backgroundColor: `rgba(6, 182, 212, ${0.18 + value * 0.65})`,
                                    boxShadow:
                                      value > 0.6 ? '0 0 24px rgba(99,102,241,0.18)' : 'none',
                                  }}
                                >
                                  {(value * 100).toFixed(0)}%
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <Panel className="p-6 md:p-8">
                <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-secondary">Dashboard 03</p>
                    <h3 className="mt-2 text-2xl font-semibold text-text">ML Pipeline Control Room</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                      Lecture synthétique d’un pipeline MLOps : performance modèle, apprentissage,
                      importance des variables et comparaison d’architectures.
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
                    Tests • monitoring • comparaison
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                  <div className="grid gap-6">
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Courbes d’entraînement</div>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={trainingCurves}>
                            <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                            <XAxis dataKey="epoch" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Legend />
                            <Line type="monotone" dataKey="loss" name="Train Loss" stroke="#6366f1" strokeWidth={3} />
                            <Line type="monotone" dataKey="valLoss" name="Val Loss" stroke="#06b6d4" strokeWidth={3} />
                            <Line type="monotone" dataKey="accuracy" name="Accuracy" stroke="#22c55e" strokeWidth={3} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Importance des variables</div>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={featureImportance} layout="vertical" margin={{ left: 20, right: 12 }}>
                            <CartesianGrid stroke="rgba(148,163,184,0.12)" horizontal={false} />
                            <XAxis type="number" tick={{ fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                            <YAxis
                              type="category"
                              dataKey="feature"
                              tick={{ fill: '#94a3b8', fontSize: 12 }}
                              axisLine={false}
                              tickLine={false}
                              width={110}
                            />
                            <Tooltip contentStyle={tooltipStyle} />
                            <Bar dataKey="score" radius={[0, 10, 10, 0]} fill="#06b6d4" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Confusion matrix</div>
                      <div className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] gap-3 text-center text-sm">
                        <div />
                        {['Prédit A', 'Prédit B', 'Prédit C'].map((header) => (
                          <div key={header} className="pb-2 text-xs uppercase tracking-[0.18em] text-muted">
                            {header}
                          </div>
                        ))}
                        {confusionMatrix.map((row, rowIndex) => (
                          <FragmentRow key={`row-${rowIndex}`} label={`Réel ${String.fromCharCode(65 + rowIndex)}`} row={row} />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <div className="mb-4 text-sm text-muted">Comparaison modèles</div>
                      <div className="overflow-hidden rounded-3xl border border-white/8">
                        <table className="w-full border-collapse text-left">
                          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.18em] text-muted">
                            <tr>
                              <th className="px-4 py-4">Modèle</th>
                              <th className="px-4 py-4">Précision</th>
                              <th className="px-4 py-4">Recall</th>
                              <th className="px-4 py-4">Latence</th>
                            </tr>
                          </thead>
                          <tbody>
                            {modelComparison.map((model) => (
                              <tr key={model.model} className="border-t border-white/8">
                                <td className="px-4 py-4 text-text">{model.model}</td>
                                <td className="px-4 py-4 text-muted">{model.precision}</td>
                                <td className="px-4 py-4 text-muted">{model.recall}</td>
                                <td className="px-4 py-4 text-muted">{model.latency}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-secondary/20 bg-secondary/10 p-5">
                      <div className="text-sm uppercase tracking-[0.25em] text-secondary">Lecture ML Ops</div>
                      <p className="mt-3 text-sm leading-7 text-text/90">
                        La combinaison XGBoost pour l’inférence rapide et LSTM pour les séquences
                        longues permet un équilibre solide entre précision, recall et latence en
                        production.
                      </p>
                    </div>
                  </div>
                </div>
              </Panel>
            </motion.div>
          </div>
        </section>

        <section id="education" className="py-24">
          <SectionTitle
            eyebrow="Formation"
            title="Une base académique solide, orientée traitement de données et intelligence artificielle."
            description="Un parcours recentré sur la maîtrise des modèles, de l’ingénierie de données et de la mise en production."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Panel className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-secondary">2023 — 2025</div>
                <h3 className="mt-2 text-2xl font-semibold text-text">
                  Master Traitement de données & IA
                </h3>
                <p className="mt-2 text-base text-muted">
                  Centrale Méditerranéenne & AMU Marseille
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-muted">
                Data • ML • IA appliquée
              </div>
            </Panel>
          </motion.div>
        </section>

        <section id="contact" className="py-24">
          <SectionTitle
            eyebrow="Contact"
            title="Construisons un produit data ou IA qui impressionne autant en démo qu’en production."
            description="Pour une mission, une collaboration ou un échange technique, Manel est joignable directement par email, téléphone ou LinkedIn."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Panel className="h-full p-7">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a className="mt-1 block text-lg text-text hover:text-secondary" href="mailto:manelyousfi.pro@gmail.com">
                      manelyousfi.pro@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Téléphone</p>
                    <a className="mt-1 block text-lg text-text hover:text-secondary" href="tel:+33641495632">
                      +33.641.49.56.32
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Localisation</p>
                    <p className="mt-1 text-lg text-text">France</p>
                  </div>
                </div>
              </Panel>
            </motion.div>

            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="panel grid gap-4 p-7"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm text-muted">Nom</span>
                  <input className="input-field" type="text" placeholder="Votre nom" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-muted">Email</span>
                  <input className="input-field" type="email" placeholder="vous@entreprise.com" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-sm text-muted">Sujet</span>
                <input className="input-field" type="text" placeholder="Mission data, IA, dashboard..." />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-muted">Message</span>
                <textarea className="input-field min-h-36 resize-none" placeholder="Décrivez votre besoin..." />
              </label>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:manelyousfi.pro@gmail.com" className="primary-button">
                  Envoyer par email
                </a>
                <a href="https://www.linkedin.com/in/manel-yousfi-/" target="_blank" rel="noreferrer" className="secondary-button">
                  Ouvrir LinkedIn
                </a>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
    </div>
  )
}

const tooltipStyle = {
  backgroundColor: '#0f172a',
  border: '1px solid rgba(148,163,184,0.18)',
  borderRadius: '16px',
  color: '#e2e8f0',
}

const FragmentRow = ({ label, row }) => (
  <>
    <div className="flex items-center text-xs uppercase tracking-[0.18em] text-muted">{label}</div>
    {row.map((cell, index) => (
      <div
        key={`${label}-${index}`}
        className="rounded-2xl border border-white/8 px-4 py-5 text-lg font-semibold text-text"
        style={{
          background: `linear-gradient(180deg, rgba(99,102,241,${0.12 + cell / 320}), rgba(6,182,212,0.08))`,
        }}
      >
        {cell}
      </div>
    ))}
  </>
)

export default App