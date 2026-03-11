import { Brain, Lightbulb, LineChart, Target } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const STRENGTHS = [
  {
    icon: Brain,
    label: "Analytical Thinking",
    desc: "Systematic data analysis to solve complex business challenges",
  },
  {
    icon: LineChart,
    label: "Data Storytelling",
    desc: "Translating numbers into compelling visual narratives with Power BI",
  },
  {
    icon: Lightbulb,
    label: "Machine Learning",
    desc: "Building predictive models and data-driven solutions",
  },
  {
    icon: Target,
    label: "Business Acumen",
    desc: "Experience in both data science and business analyst roles",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Get to know me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex gap-6 items-start mb-8">
              <div className="w-20 h-20 rounded-2xl border-2 border-border flex-shrink-0 bg-primary/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">A</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold mb-1">
                  Akhilesh Pratap Gautam
                </h3>
                <p className="text-primary font-medium text-sm">
                  Data Science Intern &middot; Open to Work
                </p>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an{" "}
                <strong className="text-foreground">
                  aspiring Data Scientist and Analyst
                </strong>{" "}
                with hands-on experience in Python, SQL, Power BI, Excel, and
                Machine Learning.
              </p>
              <p>
                Currently interning at{" "}
                <strong className="text-foreground">Evostra Ventures</strong> as
                a Data Science Intern (Feb 2026 – present), where I apply
                data-driven techniques to solve real business problems.
              </p>
              <p>
                Previously worked as a{" "}
                <strong className="text-foreground">
                  Business Analyst Intern at CareerPhi
                </strong>{" "}
                (Sep – Nov 2025), where I gained experience bridging data
                insights with business strategy.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "2", label: "Internships" },
                { value: "5+", label: "Skills" },
                { value: "Active", label: "Learner" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-background rounded-xl border border-border"
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">
              Core Strengths
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {STRENGTHS.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="p-5 bg-background rounded-xl border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold mb-1">{s.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
