import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const CATEGORIES = [
  {
    id: "analysis",
    label: "Data Analysis",
    skills: [
      { name: "Excel", pct: 88 },
      { name: "SQL", pct: 82 },
      { name: "Power BI", pct: 80 },
      { name: "Python", pct: 78 },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [
      { name: "Python", pct: 78 },
      { name: "SQL", pct: 82 },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning",
    skills: [
      { name: "Machine Learning", pct: 72 },
      { name: "Pandas", pct: 75 },
      { name: "NumPy", pct: 72 },
      { name: "Scikit-learn", pct: 68 },
    ],
  },
  {
    id: "visualization",
    label: "Visualization",
    skills: [
      { name: "Power BI", pct: 80 },
      { name: "Excel Charts", pct: 85 },
      { name: "Matplotlib", pct: 65 },
    ],
  },
  {
    id: "tools",
    label: "Other Tools",
    skills: [
      { name: "Jupyter Notebook", pct: 80 },
      { name: "Excel (Advanced)", pct: 88 },
      { name: "Google Sheets", pct: 75 },
    ],
  },
];

function SkillBar({
  name,
  pct,
  delay,
  animate,
}: { name: string; pct: number; delay: number; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs font-semibold text-primary">{pct}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-chart-2"
          initial={{ width: 0 }}
          animate={animate ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState("analysis");

  const active = CATEGORIES.find((c) => c.id === activeTab) ?? CATEGORIES[0];

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            What I work with
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Skills & Tools
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                data-ocid={`skills.${cat.id}.tab`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-card">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display font-bold text-xl mb-6">
                {active.label}
              </h3>
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  delay={i * 0.08}
                  animate={inView}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
