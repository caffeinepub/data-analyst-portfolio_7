import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight, Download, Mail } from "lucide-react";
import { motion } from "motion/react";

const TAGS = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Data Science",
];

const FLOATING_ITEMS = [
  { label: "Python", sub: "Core Language", delay: 0 },
  { label: "Power BI", sub: "Dashboards", delay: 0.3 },
  { label: "ML", sub: "Machine Learning", delay: 0.6 },
  { label: "SQL", sub: "Data Querying", delay: 0.9 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-grid-bg"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.52 0.2 243) 1px, transparent 1px), linear-gradient(90deg, oklch(0.52 0.2 243) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge variant="secondary" className="mb-4 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mr-1.5 animate-pulse" />
                Open to opportunities
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4"
            >
              Akhilesh <span className="gradient-text">Pratap Gautam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-xl font-display font-semibold text-muted-foreground mb-3"
            >
              Aspiring Data Scientist &middot; Data Analyst
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Passionate about transforming data into actionable insights.
              Currently working as a Data Science Intern at Evostra Ventures,
              building analytical solutions with Python, SQL, Power BI, and
              Machine Learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="gap-2 font-semibold"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.primary_button"
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold border-primary/30 text-primary hover:bg-primary/10"
                asChild
                data-ocid="hero.secondary_button"
              >
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="gap-2 font-semibold"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-ocid="hero.contact_button"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </motion.div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="w-72 h-72 rounded-2xl overflow-hidden border-2 border-border shadow-card bg-card flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">A</span>
                  </div>
                  <p className="font-display font-bold text-xl">Akhilesh</p>
                  <p className="text-sm text-muted-foreground">
                    Data Science Intern
                  </p>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl -z-10" />
            </motion.div>

            {FLOATING_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + item.delay }}
                style={{
                  position: "absolute",
                  top: i < 2 ? `${8 + i * 38}%` : undefined,
                  bottom: i >= 2 ? `${8 + (i - 2) * 38}%` : undefined,
                  left: i % 2 === 0 ? "-12%" : undefined,
                  right: i % 2 !== 0 ? "-12%" : undefined,
                }}
                className="animate-float"
              >
                <div className="bg-card border border-border rounded-xl px-4 py-2.5 shadow-card">
                  <p className="font-display font-bold text-xl text-primary">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
